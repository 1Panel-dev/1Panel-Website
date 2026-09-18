#!/usr/bin/env python3
"""批量生成 WebP 副本（构建前置工具，非构建必需）。

用法：
    python3 scripts/generate-webp.py [--min-size KB] [--quality N]

行为：
  * 扫描 public/ 下大于阈值的 .png / .jpg / .jpeg
  * 生成同名 .webp（质量默认 82，method=6）
  * 已存在 .webp 且比源文件新时跳过
  * 生成的 .webp 需要提交到仓库，这样构建机无需安装 Pillow

说明：P 模式（调色板）PNG 重新编码为 PNG 反而会变大，只有 WebP 能显著降低体积
（实测 1.4MB 的企业版截图 -> 180KB）。
"""

import os
import sys
import argparse

try:
    from PIL import Image
except ImportError:
    print('[generate-webp] 未安装 Pillow，跳过。安装方式: pip install Pillow')
    sys.exit(0)

PUBLIC_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'public')


def iter_images(root):
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in ('.git', 'node_modules')]
        for name in filenames:
            if name.lower().endswith(('.png', '.jpg', '.jpeg')):
                yield os.path.join(dirpath, name)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--min-size', type=int, default=80, help='只处理大于该体积(KB)的图片')
    parser.add_argument('--quality', type=int, default=82)
    parser.add_argument('--force', action='store_true')
    args = parser.parse_args()

    if not os.path.isdir(PUBLIC_DIR):
        print(f'[generate-webp] 找不到 {PUBLIC_DIR}')
        return 1

    total_before = 0
    total_after = 0
    converted = 0
    skipped = 0

    for src in iter_images(PUBLIC_DIR):
        size_kb = os.path.getsize(src) / 1024
        if size_kb < args.min_size:
            continue

        webp_path = os.path.splitext(src)[0] + '.webp'
        if (
            not args.force
            and os.path.exists(webp_path)
            and os.path.getmtime(webp_path) >= os.path.getmtime(src)
        ):
            skipped += 1
            total_before += os.path.getsize(src)
            total_after += os.path.getsize(webp_path)
            continue

        try:
            with Image.open(src) as im:
                im.load()
                # 保留动画/多帧图片不动
                if getattr(im, 'n_frames', 1) > 1:
                    continue
                if im.mode in ('RGBA', 'LA', 'P'):
                    im = im.convert('RGBA')
                else:
                    im = im.convert('RGB')
                im.save(webp_path, 'WEBP', quality=args.quality, method=6)
        except Exception as exc:  # noqa: BLE001
            print(f'[generate-webp] 跳过 {os.path.relpath(src, PUBLIC_DIR)}: {exc}')
            continue

        converted += 1
        before = os.path.getsize(src)
        after = os.path.getsize(webp_path)
        total_before += before
        total_after += after
        rel = os.path.relpath(src, PUBLIC_DIR)
        print(f'{rel}: {before // 1024}KB -> {after // 1024}KB ({100 - after * 100 // before}%)')

    print()
    print(f'[generate-webp] 新增 {converted} 个，跳过 {skipped} 个')
    if total_before:
        print(
            f'[generate-webp] 合计 {total_before / 1024 / 1024:.2f}MB -> '
            f'{total_after / 1024 / 1024:.2f}MB (省 {100 - total_after * 100 // total_before}%)'
        )
    return 0


if __name__ == '__main__':
    sys.exit(main())
