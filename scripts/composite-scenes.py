"""Composite Atlas laptop mock + real portrait into workspace scene images."""
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageEnhance, ImageFilter

DAY_SRC = "/Users/hdev/.cursor/projects/Users-hdev-Dev-project-atlas/assets/workspace-day-portrait.png"
NIGHT_SRC = "/Users/hdev/.cursor/projects/Users-hdev-Dev-project-atlas/assets/workspace-night-warm.png"
PORTRAIT = "/Users/hdev/Dev/project-atlas/assets/Portrait.jpeg"
OUT_DIR = "/Users/hdev/Dev/project-atlas/website/public/images"

GEORGIA = "/System/Library/Fonts/Supplemental/Georgia.ttf"
GEORGIA_I = "/System/Library/Fonts/Supplemental/Georgia Italic.ttf"
HELV = "/System/Library/Fonts/Helvetica.ttc"


def find_coeffs(dst, src):
    matrix = []
    for (x, y), (X, Y) in zip(dst, src):
        matrix.append([X, Y, 1, 0, 0, 0, -x * X, -x * Y])
        matrix.append([0, 0, 0, X, Y, 1, -y * X, -y * Y])
    A = np.array(matrix, dtype=np.float64)
    B = np.array([c for p in dst for c in p], dtype=np.float64)
    return np.linalg.solve(A, B).tolist()


def paste_quad(base, art, quad):
    w, h = base.size
    src = [(0, 0), (art.width, 0), (art.width, art.height), (0, art.height)]
    coeffs = find_coeffs(src, quad)
    warped = art.convert("RGBA").transform((w, h), Image.PERSPECTIVE, coeffs, Image.BICUBIC)
    mask = Image.new("L", (art.width, art.height), 255).transform(
        (w, h), Image.PERSPECTIVE, coeffs, Image.BICUBIC
    )
    base.paste(warped, (0, 0), mask)
    return base


def render_screen(night=False):
    W, H = 960, 720
    bg = (252, 246, 233) if night else (250, 247, 240)
    im = Image.new("RGB", (W, H), bg)
    d = ImageDraw.Draw(im)

    f_title = ImageFont.truetype(GEORGIA, 64)
    f_nav = ImageFont.truetype(HELV, 24)
    f_body = ImageFont.truetype(HELV, 26)
    f_small = ImageFont.truetype(GEORGIA_I, 30)

    d.text((56, 44), "Atlas", font=ImageFont.truetype(GEORGIA, 40), fill=(38, 32, 25))
    for i, item in enumerate(["Work", "Notes", "About"]):
        d.text((640 + i * 96, 52), item, font=f_nav, fill=(110, 98, 82))

    d.text((56, 170), "Atlas Intelligence", font=f_title, fill=(38, 32, 25))
    d.text((56, 248), "Platform", font=f_title, fill=(38, 32, 25))
    d.text((56, 356), "Strategy, design and AI woven", font=f_small, fill=(120, 105, 85))
    d.text((56, 396), "into one thinking space.", font=f_small, fill=(120, 105, 85))

    d.rounded_rectangle((56, 470, 236, 526), 28, fill=(212, 164, 90))
    d.text((88, 484), "Explore", font=f_body, fill=(255, 253, 246))
    d.rounded_rectangle((256, 470, 420, 526), 28, outline=(180, 165, 140), width=2)
    d.text((288, 484), "Ask AI", font=f_body, fill=(110, 98, 82))

    day = Image.open(DAY_SRC).convert("RGB")
    card = day.crop((80, 260, 720, 900)).resize((360, 360), Image.LANCZOS)
    mask = Image.new("L", (360, 360), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, 360, 360), 24, fill=255)
    im.paste(card, (544, 150), mask)

    for i, w_ in enumerate([300, 380, 250]):
        d.rounded_rectangle((56, 580 + i * 34, 56 + w_, 594 + i * 34), 7, fill=(226, 216, 198))

    if night:
        warm = Image.new("RGB", (W, H), (255, 214, 150))
        im = Image.blend(im, warm, 0.12)
        im = ImageEnhance.Brightness(im).enhance(1.04)
    return im


def add_screen_glow(base, quad, strength=95):
    w, h = base.size
    glow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    ImageDraw.Draw(glow).polygon(quad, fill=(255, 230, 180, strength))
    glow = glow.filter(ImageFilter.GaussianBlur(34))
    return Image.alpha_composite(base.convert("RGBA"), glow).convert("RGB")


# Day: portrait already composited; add Atlas screen only
day = Image.open(DAY_SRC).convert("RGB")
day_quad = [(798, 497), (1051, 497), (1025, 634), (798, 634)]
day = paste_quad(day, render_screen(night=False), day_quad)
day.save(f"{OUT_DIR}/workspace-day.png")
print("day saved")

# Night: real portrait + glowing Atlas screen
night = Image.open(NIGHT_SRC).convert("RGB")

p = Image.open(PORTRAIT).convert("RGB")
pw, ph = p.size
target_ratio = 100 / 126
crop_w, crop_h = pw, int(pw / target_ratio)
if crop_h > ph:
    crop_h, crop_w = ph, int(ph * target_ratio)
p = p.crop(((pw - crop_w) // 2, 0, (pw + crop_w) // 2, crop_h))
p = p.resize((320, 400), Image.LANCZOS)
p = ImageEnhance.Brightness(p).enhance(0.58)
p = ImageEnhance.Color(p).enhance(0.72)
p = Image.blend(p, Image.new("RGB", p.size, (255, 176, 96)), 0.24)

frame_quad = [(523, 608), (618, 600), (630, 728), (512, 738)]
night = paste_quad(night, p, frame_quad)

night_quad = [(837, 537), (974, 537), (1029, 672), (870, 672)]
night = paste_quad(night, render_screen(night=True), night_quad)
night = add_screen_glow(night, night_quad)
night.save(f"{OUT_DIR}/workspace-night.png")
print("night saved")
