# -*- coding: utf-8 -*-
"""基于统一风格模板封面，替换顶部小字生成新封面。

系列封面（方案X 实测报告）共用同一套视觉：蓝紫渐变背景 + 顶部两行小字 +
居中大主标题 + 底部 pill + 装饰弧线。本脚本以已有封面为模板，只替换顶部
第一行小字，其余元素原样保留，确保整组封面视觉完全一致。

做法：
  1. 用待替换文字周边的像素拟合二维二次曲面，精确重建该处背景
     （避免破坏渐变与装饰弧线，也避免留下原文字的投影残影）
  2. 以匹配出的字体/字号/字重重新绘制新文字，并还原原有的淡投影

用法：
  python scripts/gen_cover_from_template.py \
      --template public/images/blog/1panel-ai-appliance-plan5-benchmark/cover.png \
      --top1 "方案三 · 双卡实测" \
      --out public/images/blog/1panel-ai-appliance-plan3-benchmark/cover.png
"""

from __future__ import annotations

import argparse
import os

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

# ---- 模板中第一行小字的几何参数（针对 1536×864 系列封面测得）----
TEXT_CENTER = (766.5, 137.5)   # 文字中心（绝对坐标）
CLEAR_BOX = (575, 110, 961, 166)  # 需要重建的背景区域 x0, y0, x1, y1
RING = 16                      # 拟合背景时的外围采样环厚度
FONT_PATH = os.path.expanduser("~/Library/Fonts/SourceHanSansSC-Heavy.otf")
FONT_SIZE = 36
FONT_FALLBACKS = [
    "/Library/Fonts/SourceHanSansSC-Heavy.otf",
    "/System/Library/Fonts/PingFang.ttc",
]
# 原封面的淡投影：黑色叠加，向下偏移，轻微模糊
SHADOW_DY = 3
SHADOW_BLUR = 4.0
SHADOW_ALPHA = 0.095
# 背景噪声强度（与原封面 ~1.7/2.1/4.2 的标准差一致，避免修复区过于平滑）
NOISE_SIGMA = (1.7, 2.1, 4.2)


def load_font(size: int = FONT_SIZE) -> ImageFont.FreeTypeFont:
    for path in [FONT_PATH, *FONT_FALLBACKS]:
        if os.path.exists(path):
            try:
                if path.endswith(".ttc"):
                    return ImageFont.truetype(path, size, index=1)
                return ImageFont.truetype(path, size)
            except OSError:
                continue
    raise SystemExit("找不到可用的中文字体，请检查 FONT_PATH")


def rebuild_background(arr: np.ndarray, box: tuple[int, int, int, int], ring: int = RING) -> np.ndarray:
    """用区域外围像素拟合二维二次曲面，重建区域内的纯净背景。"""
    x0, y0, x1, y1 = box
    xs: list[int] = []
    ys: list[int] = []
    for yy in list(range(y0 - ring, y0)) + list(range(y1, y1 + ring)):
        xs.extend(range(x0 - ring, x1 + ring))
        ys.extend([yy] * (x1 - x0 + 2 * ring))
    for yy in range(y0, y1):
        for xx in list(range(x0 - ring, x0)) + list(range(x1, x1 + ring)):
            xs.append(xx)
            ys.append(yy)

    sx = np.asarray(xs, dtype=float)
    sy = np.asarray(ys, dtype=float)
    samples = arr[sy.astype(int), sx.astype(int)]

    u = (sx - x0) / (x1 - x0)
    v = (sy - y0) / (y1 - y0)
    design = np.column_stack([np.ones_like(u), u, v, u * u, v * v, u * v])
    coef, *_ = np.linalg.lstsq(design, samples, rcond=None)

    gx, gy = np.meshgrid(np.arange(x0, x1), np.arange(y0, y1))
    gu = ((gx - x0) / (x1 - x0)).ravel()
    gv = ((gy - y0) / (y1 - y0)).ravel()
    grid = np.column_stack([np.ones(gu.size), gu, gv, gu * gu, gv * gv, gu * gv])
    return (grid @ coef).reshape(y1 - y0, x1 - x0, 3)


def render_text_layer(text: str, size: tuple[int, int], font: ImageFont.FreeTypeFont, center: tuple[float, float]):
    """渲染文字（含淡投影），返回 (阴影层, 文字层)，均为 float32 (H,W,3) 前景/0 背景。"""
    w, h = size
    layer = Image.new("L", (w, h), 0)
    draw = ImageDraw.Draw(layer)
    box = font.getbbox(text)
    tw, th = box[2] - box[0], box[3] - box[1]
    draw.text((center[0] - tw / 2 - box[0], center[1] - th / 2 - box[1]), text, font=font, fill=255)

    # 阴影
    shadow = layer.filter(ImageFilter.GaussianBlur(SHADOW_BLUR))
    shadow_arr = np.asarray(shadow, dtype=np.float32) / 255.0
    shadow_arr = np.roll(shadow_arr, SHADOW_DY, axis=0) * SHADOW_ALPHA

    glyph = np.asarray(layer, dtype=np.float32) / 255.0
    return shadow_arr[..., None], glyph[..., None]


def build(template: str, top1: str, out: str, font_size: int = FONT_SIZE) -> None:
    src = Image.open(template).convert("RGB")
    arr = np.asarray(src).astype(np.float64)
    x0, y0, x1, y1 = CLEAR_BOX

    bg = rebuild_background(arr, CLEAR_BOX)

    rng = np.random.default_rng(11)
    noise = np.stack(
        [rng.normal(0, s, bg.shape[:2]) for s in NOISE_SIGMA], axis=2
    ).astype(np.float64)
    clean = np.clip(bg + noise, 0, 255)

    out_arr = arr.copy()
    out_arr[y0:y1, x0:x1] = clean

    # 绘制新文字
    font = load_font(font_size)
    canvas_size = (x1 - x0, y1 - y0)
    center = (TEXT_CENTER[0] - x0, TEXT_CENTER[1] - y0)
    shadow, glyph = render_text_layer(top1, canvas_size, font, center)

    region = out_arr[y0:y1, x0:x1]
    region = region * (1.0 - shadow) + 255.0 * shadow       # 黑色阴影
    region = region * (1.0 - glyph) + 255.0 * glyph          # 白色文字
    out_arr[y0:y1, x0:x1] = np.clip(region, 0, 255)

    os.makedirs(os.path.dirname(os.path.abspath(out)), exist_ok=True)
    Image.fromarray(out_arr.astype(np.uint8)).save(out)

    box = font.getbbox(top1)
    print(f"[ok] {out}")
    print(f"     文字: {top1}  ({box[2]-box[0]}×{box[3]-box[1]} px, 字号 {font_size})")


def main() -> None:
    parser = argparse.ArgumentParser(description="基于模板封面替换顶部小字")
    parser.add_argument("--template", required=True, help="模板封面路径")
    parser.add_argument("--top1", required=True, help="顶部第一行小字的新文案")
    parser.add_argument("--out", required=True, help="输出路径")
    parser.add_argument("--font-size", type=int, default=FONT_SIZE, help="字号（默认 36）")
    args = parser.parse_args()
    build(args.template, args.top1, args.out, args.font_size)


if __name__ == "__main__":
    main()
