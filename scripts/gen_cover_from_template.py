# -*- coding: utf-8 -*-
"""基于统一风格模板封面，替换指定文字槽位生成新封面。

系列封面共用同一套视觉（渐变背景 + 顶部两行小字 + 居中大主标题 + 底部 pill +
装饰弧线）。本脚本以已有封面为模板，只替换指定的文字槽位，其余元素原样保留，
确保整组封面视觉完全一致。

两种重建模式：
  * rect  —— 整块矩形重建（旧版行为，适用于确认无装饰弧线穿过的区域）
  * tight —— 紧贴字形掩膜重建（推荐）：只重建被旧文字笔画/投影覆盖的像素，
             装饰弧线等背景细节原样保留

做法：
  1. 用待替换文字周边像素拟合二维二次曲面，迭代剔除离群点（装饰弧线），
     得到该处的干净背景模型
  2. tight 模式下用匹配字体渲染出旧文字的笔画掩膜，只重建掩膜覆盖的像素
  3. 用匹配出的字体/字号/字重重新绘制新文字，并还原原有淡投影

用法：
  # 通用槽位模式（推荐）
  python scripts/gen_cover_from_template.py --profile ai-gateway \
      --set top1="1Panel AI Gateway" \
      --set top2="智能路由 · Jev 模式" \
      --set main="版本发布" \
      --out public/images/blog/<slug>/cover.png

  # 兼容旧用法（默认 ai-appliance 模板，只替换 top1）
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

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ---- 字体登记表 ----------------------------------------------------------
FONT_REGISTRY: dict[str, list[str]] = {
    "SHS-Heavy": ["~/Library/Fonts/SourceHanSansSC-Heavy.otf",
                  "/Library/Fonts/SourceHanSansSC-Heavy.otf"],
    "PuHuiTi-Bold": ["~/Library/Fonts/Alibaba-PuHuiTi-Bold.ttf",
                     "/Library/Fonts/Alibaba-PuHuiTi-Bold.ttf"],
    "PuHuiTi-Medium": ["~/Library/Fonts/Alibaba-PuHuiTi-Medium.ttf",
                       "/Library/Fonts/Alibaba-PuHuiTi-Medium.ttf"],
    "PuHuiTi-Regular": ["~/Library/Fonts/Alibaba-PuHuiTi-Regular.ttf",
                        "/Library/Fonts/Alibaba-PuHuiTi-Regular.ttf"],
    "PuHuiTi-Heavy": ["~/Library/Fonts/Alibaba-PuHuiTi-Heavy.ttf",
                      "/Library/Fonts/Alibaba-PuHuiTi-Heavy.ttf"],
}
FONT_FALLBACKS = ["/System/Library/Fonts/PingFang.ttc"]

# ---- 模板档案（几何参数均针对 1536×864 系列封面实测标定）-------------------
PROFILES: dict[str, dict] = {
    # 深色系「1Panel AI 网关」封面（v1.3 / 评测 等）
    "ai-gateway": {
        "template": "public/images/blog/1panel-ai-gateway-vs-litellm-new-api/cover.png",
        "mode": "tight",
        "slots": {
            # 顶栏两行所在区域实测无装饰弧线，且相邻文字距离较近 ——
            # 用 rect + 窄环带，避免邻近文字的笔画污染背景拟合
            "top1": {"text": "LiteLLM · New API · 1Panel", "font": "PuHuiTi-Bold", "size": 38,
                     "center": (767.0, 136.5), "box": (458, 98, 1078, 166),
                     "mode": "rect", "ring": 6},
            "top2": {"text": "AI 网关横向评测", "font": "PuHuiTi-Medium", "size": 40,
                     "center": (767.0, 196.0), "box": (578, 170, 956, 226),
                     "mode": "rect", "ring": 6},
            # 主标题区域有装饰弧线穿过，必须用紧贴字形的 tight 模式
            "main": {"text": "评测报告", "font": "PuHuiTi-Heavy", "size": 151,
                     "center": (768.0, 450.5), "box": (446, 350, 1094, 554), "pad": 14,
                     # 亮度兜底擦除的作用范围：止于底部装饰线之上，避免把装饰线擦掉
                     "ink_zone": (350, 516)},
        },
    },
    # 深色系「1Panel AI 一体机（方案X 实测报告）」封面
    "ai-appliance": {
        "template": "public/images/blog/1panel-ai-appliance-plan5-benchmark/cover.png",
        "mode": "rect",
        # 保持历史行为：整块矩形重建、不做离群剔除
        "fit_iters": 0,
        "seed": 11,
        # 历史实现把淡投影写成了叠加白色光晕（region*(1-s)+255*s）。
        # 这里保留该行为，使新生成的一体机封面与既有封面保持像素级一致。
        "legacy_shadow": True,
        # 历史实现还在修复区叠加了噪声（σ≈1.7/2.1/4.2）。实测模板背景是无噪的，
        # 该噪声在放大观察时表现为可见色块 —— 属既有缺陷。
        # 保留旧值仅为让本工具能原样复现已发布封面；如需干净结果加 --noise 0,0,0。
        "noise": (1.7, 2.1, 4.2),
        "slots": {
            "top1": {"text": "方案五 · 双模型实测", "font": "SHS-Heavy", "size": 36,
                     "center": (766.5, 137.5), "box": (575, 110, 961, 166), "pad": 0},
        },
    },
}

# 旧版 CLI 的默认参数（等价于 ai-appliance 档案的 top1 槽位）
LEGACY_TEMPLATE = os.path.join(REPO, PROFILES["ai-appliance"]["template"])
LEGACY_CENTER = PROFILES["ai-appliance"]["slots"]["top1"]["center"]
LEGACY_CLEAR_BOX = PROFILES["ai-appliance"]["slots"]["top1"]["box"]
LEGACY_FONT = PROFILES["ai-appliance"]["slots"]["top1"]["font"]
LEGACY_SIZE = PROFILES["ai-appliance"]["slots"]["top1"]["size"]
LEGACY_RING = 16

# 原封面的淡投影：黑色叠加，向下偏移，轻微模糊；按字号等比缩放
SHADOW_DY_RATIO = 3.0 / 36.0
SHADOW_BLUR_RATIO = 4.0 / 36.0
SHADOW_ALPHA = 0.095
# 重建背景时叠加的噪声（逐通道标准差）。
# 实测：这些封面是程序化生成的位图，背景完全无噪（9×9 中值残差 std ≈ 0.00–0.02），
# 所以默认不加噪 —— 否则修复区会呈现肉眼可见的"噪点色块"。
NOISE_SIGMA = (0.0, 0.0, 0.0)


def resolve_font(family: str, size: int) -> ImageFont.FreeTypeFont:
    for path in FONT_REGISTRY.get(family, []) + FONT_FALLBACKS:
        p = os.path.expanduser(path)
        if not os.path.exists(p):
            continue
        try:
            if p.endswith(".ttc"):
                return ImageFont.truetype(p, size, index=1)
            return ImageFont.truetype(p, size)
        except OSError:
            continue
    raise SystemExit(f"找不到可用字体：{family}")


def fit_surface(arr: np.ndarray, box: tuple[int, int, int, int],
                ring: int = 14, iters: int = 5) -> np.ndarray:
    """用区域外围像素拟合二维二次曲面，迭代剔除离群点（装饰弧线）。"""
    x0, y0, x1, y1 = box
    h, w, _ = arr.shape
    x0c, y0c = max(0, x0 - ring), max(0, y0 - ring)
    x1c, y1c = min(w, x1 + ring), min(h, y1 + ring)
    xs: list[int] = []
    ys: list[int] = []
    for yy in list(range(y0c, y0)) + list(range(y1, y1c)):
        xs.extend(range(x0c, x1c))
        ys.extend([yy] * (x1c - x0c))
    for yy in range(y0, min(y1, h)):
        for xx in list(range(x0c, x0)) + list(range(x1, x1c)):
            xs.append(xx)
            ys.append(yy)
    sx = np.asarray(xs, dtype=float)
    sy = np.asarray(ys, dtype=float)
    cols = arr[sy.astype(int), sx.astype(int)]
    u = (sx - x0) / max(1, x1 - x0)
    v = (sy - y0) / max(1, y1 - y0)
    design = np.column_stack([np.ones_like(u), u, v, u * u, v * v, u * v])
    keep = np.ones(len(sx), bool)
    for _ in range(iters):
        coef, *_ = np.linalg.lstsq(design[keep], cols[keep], rcond=None)
        res = np.abs(design @ coef - cols).sum(axis=1)
        keep = res < max(10.0, np.percentile(res[keep], 88) * 1.6)
    coef, *_ = np.linalg.lstsq(design[keep], cols[keep], rcond=None)
    gx, gy = np.meshgrid(np.arange(x0, x1), np.arange(y0, y1))
    gu = ((gx - x0) / max(1, x1 - x0)).ravel()
    gv = ((gy - y0) / max(1, y1 - y0)).ravel()
    grid = np.column_stack([np.ones(gu.size), gu, gv, gu * gu, gv * gv, gu * gv])
    return (grid @ coef).reshape(y1 - y0, x1 - x0, 3)


def glyph_layer(text: str, slot: dict, box: tuple[int, int, int, int]) -> np.ndarray:
    """渲染文字的笔画覆盖率（0..1），坐标对齐模板。"""
    x0, y0, x1, y1 = box
    w, h = x1 - x0, y1 - y0
    font = resolve_font(slot["font"], slot["size"])
    layer = Image.new("L", (w, h), 0)
    bb = font.getbbox(text)
    tw, th = bb[2] - bb[0], bb[3] - bb[1]
    draw = ImageDraw.Draw(layer)
    draw.text((slot["center"][0] - x0 - tw / 2 - bb[0],
               slot["center"][1] - y0 - th / 2 - bb[1]), text, font=font, fill=255)
    return np.asarray(layer, dtype=np.float64) / 255.0, (tw, th)


def dilate(mask: np.ndarray, r: int) -> np.ndarray:
    out = mask.copy()
    for _ in range(r):
        o = out.copy()
        o[1:, :] |= out[:-1, :]
        o[:-1, :] |= out[1:, :]
        o[:, 1:] |= out[:, :-1]
        o[:, :-1] |= out[:, 1:]
        out = o
    return out


def feather(mask: np.ndarray, radius: float = 1.2) -> np.ndarray:
    img = Image.fromarray((np.clip(mask, 0, 1) * 255).astype(np.uint8))
    return np.asarray(img.filter(ImageFilter.GaussianBlur(radius)), dtype=np.float64) / 255.0


def replace_slot(out: np.ndarray, arr: np.ndarray, slot: dict, new_text: str, mode: str,
                 fit_iters: int = 5, seed: int = 20260928, ring: int = 14,
                 legacy_shadow: bool = False, noise_sigma: tuple[float, float, float] = NOISE_SIGMA) -> dict:
    box = tuple(slot["box"])
    x0, y0, x1, y1 = box
    bg = fit_surface(arr, box, ring=ring, iters=fit_iters)   # (h, w, 3)
    dev = (arr[y0:y1, x0:x1] - bg).mean(axis=2)      # 正=比背景亮
    h, w = dev.shape

    size = slot["size"]
    dy = max(1, int(round(SHADOW_DY_RATIO * size)))
    blur = max(1.0, SHADOW_BLUR_RATIO * size)

    if mode == "rect":
        erase = np.ones((h, w), bool)
    else:
        old_glyph, _ = glyph_layer(slot["text"], slot, box)
        erase = dilate(old_glyph > 0.04, int(slot.get("pad", 8)))
        # 旧文字的淡投影：按同一套投影模型算出其扩散范围，整片清除。
        # 只靠亮度阈值不够 —— 投影外缘的差值只有 -1~-5，会被漏掉留下暗带。
        old_shadow = Image.fromarray((old_glyph * 255).astype(np.uint8)).filter(
            ImageFilter.GaussianBlur(blur))
        erase |= np.roll(np.asarray(old_shadow, dtype=np.float64) / 255.0, dy, axis=0) > 0.02
        # 亮度兜底：匹配字体的边缘可能对不齐，凡明显亮于背景的仍是旧笔画。
        # 阈值取 70 —— 远高于装饰弧线（实测峰值 ~38），远低于白字（~190）。
        za, zb = slot.get("ink_zone", (y0, y1))
        zone = np.zeros((h, w), bool)
        zone[max(0, za - y0):max(0, zb - y0), :] = True
        erase |= (dev > 70.0) & zone

    soft = feather(erase.astype(np.float64), 1.2)[..., None]

    rng = np.random.default_rng(seed)
    noise = np.stack([rng.normal(0, s, (h, w)) for s in noise_sigma], axis=2)
    clean_bg = np.clip(bg + noise, 0, 255)

    region = arr[y0:y1, x0:x1].copy()
    region = region * (1.0 - soft) + clean_bg * soft

    # 新文字：白色笔画 + 黑色淡投影
    new_glyph, dims = glyph_layer(new_text, slot, box)
    shadow = Image.fromarray((new_glyph * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(blur))
    shadow = np.roll(np.asarray(shadow, dtype=np.float64) / 255.0, dy, axis=0) * SHADOW_ALPHA

    region = region * (1.0 - shadow[..., None])
    if legacy_shadow:
        # 历史行为：投影叠加成白色光晕（保留以兼容既有封面）
        region = region + 255.0 * shadow[..., None]
    region = region * (1.0 - new_glyph[..., None]) + 255.0 * new_glyph[..., None]

    out[y0:y1, x0:x1] = np.clip(region, 0, 255)
    return {"slot": slot, "new_text": new_text, "dims": dims,
            "erased": int(erase.sum())}


def build_profile(profile_name: str, sets: dict[str, str], out_path: str,
                  template_override: str | None = None,
                  noise_override: tuple[float, float, float] | None = None) -> None:
    prof = PROFILES[profile_name]
    template = template_override or os.path.join(REPO, prof["template"])
    src = Image.open(template).convert("RGB")
    arr = np.asarray(src).astype(np.float64)
    out = arr.copy()

    info = []
    for key, new_text in sets.items():
        if key not in prof["slots"]:
            raise SystemExit(f"档案 {profile_name} 没有槽位 {key}；可用：{list(prof['slots'])}")
        info.append(replace_slot(out, arr, prof["slots"][key], new_text,
                                 prof["slots"][key].get("mode", prof["mode"]),
                                 prof.get("fit_iters", 5), prof.get("seed", 20260928),
                                 prof["slots"][key].get("ring", prof.get("ring", 14)),
                                 prof.get("legacy_shadow", False), noise_override or prof.get("noise", NOISE_SIGMA)))

    os.makedirs(os.path.dirname(os.path.abspath(out_path)), exist_ok=True)
    Image.fromarray(out.astype(np.uint8)).save(out_path)

    print(f"[ok] {out_path}")
    print(f"     模板: {os.path.relpath(template, REPO)}  模式: {prof['mode']}")
    for it in info:
        s = it["slot"]
        print(f"     {s['text']!r} -> {it['new_text']!r}  "
              f"({it['dims'][0]}×{it['dims'][1]} px, {s['font']} {s['size']}, 重建 {it['erased']} px)")

    # 校验：所有槽位之外必须逐像素一致
    boxes = [tuple(prof["slots"][k]["box"]) for k in sets]
    diff = np.abs(out - arr).sum(axis=2)
    guard = np.zeros(diff.shape, bool)
    for x0, y0, x1, y1 in boxes:
        guard[y0:y1, x0:x1] = True
    outside = int(diff[~guard].max()) if (~guard).any() else 0
    print(f"     槽位之外最大差异: {outside}  ({'通过' if outside == 0 else '异常'})")


def build_legacy(template: str, top1: str, out_path: str, font_size: int) -> None:
    """旧版行为：默认档案模板，仅替换 top1 槽位（整块矩形重建）。"""
    slot = {"text": PROFILES["ai-appliance"]["slots"]["top1"]["text"],
            "font": LEGACY_FONT, "size": font_size,
            "center": LEGACY_CENTER, "box": LEGACY_CLEAR_BOX, "pad": 0}
    src = Image.open(template).convert("RGB")
    arr = np.asarray(src).astype(np.float64)
    out = arr.copy()
    info = replace_slot(out, arr, slot, top1, "rect", fit_iters=0, seed=11,
                        ring=LEGACY_RING, legacy_shadow=True,
                        noise_sigma=PROFILES["ai-appliance"].get("noise", NOISE_SIGMA))
    os.makedirs(os.path.dirname(os.path.abspath(out_path)), exist_ok=True)
    Image.fromarray(out.astype(np.uint8)).save(out_path)
    print(f"[ok] {out_path}")
    print(f"     文字: {top1}  ({info['dims'][0]}×{info['dims'][1]} px, 字号 {font_size})")
    x0, y0, x1, y1 = LEGACY_CLEAR_BOX
    diff = np.abs(out - arr).sum(axis=2)
    guard = np.zeros(diff.shape, bool)
    guard[max(0, y0 - 5):y1 + 5, max(0, x0 - 5):x1 + 5] = True
    print(f"     替换区之外最大差异: {int(diff[~guard].max())}")


def main() -> None:
    parser = argparse.ArgumentParser(description="基于模板封面替换文字槽位")
    parser.add_argument("--profile", help=f"模板档案：{list(PROFILES)}")
    parser.add_argument("--set", action="append", metavar="KEY=VALUE",
                        help="设置槽位文案，可重复（如 --set top1=...)")
    parser.add_argument("--template", help="覆盖档案自带模板路径")
    parser.add_argument("--top1", help="[旧用法] 顶部第一行小字")
    parser.add_argument("--out", required=True, help="输出路径")
    parser.add_argument("--font-size", type=int, default=LEGACY_SIZE, help="[旧用法] 字号")
    parser.add_argument("--noise", help='覆盖重建区的噪声强度，如 "0,0,0"（默认沿用档案设置）')
    args = parser.parse_args()

    if args.profile or args.set:
        if not args.profile:
            parser.error("使用 --set 时必须指定 --profile")
        sets: dict[str, str] = {}
        for item in args.set or []:
            if "=" not in item:
                parser.error(f"--set 需要 KEY=VALUE 形式，收到 {item!r}")
            k, v = item.split("=", 1)
            sets[k.strip()] = v.strip()
        noise = None
        if args.noise:
            try:
                parts = [float(v) for v in args.noise.split(",")]
            except ValueError:
                parser.error('--noise 需要形如 "0,0,0" 的三个数值')
            if len(parts) != 3:
                parser.error('--noise 需要三个数值，如 "0,0,0"')
            noise = (parts[0], parts[1], parts[2])
        build_profile(args.profile, sets, args.out, args.template, noise)
        return

    if not args.top1:
        parser.error("需要 --profile/--set 或 --top1")
    build_legacy(args.template or LEGACY_TEMPLATE, args.top1, args.out, args.font_size)


if __name__ == "__main__":
    main()
