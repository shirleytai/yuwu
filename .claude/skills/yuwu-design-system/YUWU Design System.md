---
title: YUWU Design System
aliases:
  - 禹物再製所 Design System
  - YU·WU Design System
tags:
  - design-system
  - brand
  - yuwu
brand: YUWU (禹物再製所)
website: https://yu-wu.studio
updated: 2026-07-13
---

# YUWU Design System (禹物再製所)

> [!abstract] What this is
> The complete brand + design-system reference for **YUWU (禹物再製所)**, a Taiwanese salvaged-object art studio in Tainan. Colours, typography, layout, components, voice, and photography rules — everything needed to design on-brand.
> Agent 使用規範見 [[Claude Skills/personal-skills/yuwu-design-system/SKILL|yuwu-design-system SKILL]]；此文件是完整參考來源（source of truth，對應官網程式碼）。

## About the Brand

YUWU (禹物再製所) is a Taiwanese art-and-craft studio founded by 戴禹財 and 蔡佩莉 in Tainan, Taiwan. Beginning with driftwood sculpture twenty years ago, the studio has evolved into a multi-material practice of salvaged-object transformation — turning found iron, reclaimed wood, and discarded everyday objects into furniture, décor, and art. The philosophy is ecological and poetic: **not restoration, but transformation. Not erasing the past, but carrying it forward.**

| Field | Value |
|---|---|
| Website | https://yu-wu.studio |
| Email | hello@yu-wu.studio |
| Address | No. 7, Lane 218, Chenggong Rd, North District, Tainan |
| Studio hours | Wed – Sun · 14:00 – 19:00 (by appointment) |
| Instagram | @yuwu-studio |
| Threads | @yuwu.recreation |
| Copyright | © 2026 Yu·Wu Re-creation Studio · Tainan |

---

## Quick Reference

> [!tip] Cheat sheet
> **Background** `#F2F2E8` cream · **Dark** `#1A1A1A` · **Accent/CTA** `#B39E5D` gold · **Wood surface** `#C4A882`
> **Text** `#141414` on cream, `#F2F2E8` on dark · **Muted** `#746F66` · **Deepest** `#1C1006`
> **Fonts** Prociono (display) · Megrim (`YU·WU` logo ONLY) · Work Sans (UI/body)
> **Non-negotiables** 0px radius · no gradients · no shadows · nav lowercase · footer ALL CAPS · no emoji

---

## Content Fundamentals

### Voice & Copy

<p style="font-size:12px;letter-spacing:1.5px;color:#746F66;">POETIC · NATURE-ROOTED · NO URGENCY · NO EMOJI · LOWERCASE NAV</p>

YUWU writes in English for international/design-minded audiences, with Traditional Chinese (繁體) used sparingly for local context.

- **Poetic, precise, unhurried.** Never sales-oriented. Never urgent. The writing breathes.
- **Nature-rooted.** Metaphors from materials, time, and decay. "Rust is time's handwriting on metal."
- **Wabi-sabi spirit.** Imperfection as beauty. Patina as value. Cracks as character.
- **First-person plural.** "We don't restore old things." "We let the cracks stay."
- **No emoji.** No exclamation marks. No urgency-driven calls to action.

> [!example] ✓ Voice — poetic, precise, first-person plural
> "Rust is time's handwriting on metal — we clear the loose flakes but keep the deep red-brown beneath, then seal it in beeswax."
>
> "We let the cracks stay, let the rust stay, and give them a new use so they can step into today's life."
>
> "letting each object become a life of its own."

> [!failure] ✗ Avoid
> ~~"Shop now for amazing deals! 🌿 Limited time offer!"~~

<div style="display:flex;flex-wrap:wrap;gap:32px;background:#F2F2E8;color:#141414;padding:20px 24px;margin:8px 0;">
<div><div style="font-size:10px;letter-spacing:2px;color:#746F66;">NAV</div><div style="font-size:14px;">shop · our direction · contact</div></div>
<div><div style="font-size:10px;letter-spacing:2px;color:#746F66;">LABELS</div><div style="font-size:14px;letter-spacing:2px;">SHOP · CUSTOMER</div></div>
<div><div style="font-size:10px;letter-spacing:2px;color:#746F66;">PRODUCTS</div><div style="font-size:14px;">"Ascent" High Table<br>NT$ 9000 · By Enquiry</div></div>
</div>

### Casing rules

| Context | Rule | Example |
|---|---|---|
| Navigation | Lowercase | `shop`, `our direction`, `contact` |
| Footer categories | ALL CAPS + wide tracking | `SHOP`, `CUSTOMER`, `CONNECT` |
| Material codes | Numeral + slash + title case | `001 / Wood`, `002 / Iron` |
| Named pieces | Title case + quotation marks | `"Ascent" High Table` |
| Prices | NT$ prefix, no decimal | `NT$ 9000` |
| Provenance labels | Sentence case + middle-dot separator | `Found · Iron + Wood` |

### Punctuation

- **Em dash (—):** parenthetical thoughts and transitions
- **Middle dot (·):** metadata separators (material, place, social handles)
- No Oxford-style footnotes, no asterisks
- Line breaks in display copy are intentional and sparse

---

## Visual Foundations

### Colours

**Primary Palette** — cream · charcoal · wood tan · sand: the four core surfaces

<div style="display:flex;flex-wrap:wrap;margin:8px 0;">
<div style="width:130px;"><div style="height:80px;background:#F2F2E8;border:1px solid #C9C1B7;"></div><div style="font-size:11px;padding-top:4px;"><code>--color-cream</code><br>#F2F2E8</div></div>
<div style="width:130px;"><div style="height:80px;background:#1A1A1A;"></div><div style="font-size:11px;padding-top:4px;"><code>--color-charcoal</code><br>#1A1A1A</div></div>
<div style="width:130px;"><div style="height:80px;background:#C4A882;"></div><div style="font-size:11px;padding-top:4px;"><code>--color-wood</code><br>#C4A882</div></div>
<div style="width:130px;"><div style="height:80px;background:#C9C1B7;"></div><div style="font-size:11px;padding-top:4px;"><code>--color-sand</code><br>#C9C1B7</div></div>
</div>

**Accent & CTA**

<div style="display:flex;flex-wrap:wrap;margin:8px 0;">
<div style="width:130px;"><div style="height:80px;background:#B39E5D;"></div><div style="font-size:11px;padding-top:4px;"><code>--color-gold</code><br>#B39E5D</div></div>
<div style="width:130px;"><div style="height:80px;background:#F7E6D2;border:1px solid #C9C1B7;"></div><div style="font-size:11px;padding-top:4px;"><code>--color-warm-cream</code><br>#F7E6D2</div></div>
<div style="width:130px;"><div style="height:80px;background:#5D5A40;"></div><div style="font-size:11px;padding-top:4px;"><code>--color-gold-olive</code><br>#5D5A40</div></div>
</div>

**Neutrals & Text** — warm brown scale: muted labels, dividers, pale provenance text

<div style="display:flex;flex-wrap:wrap;margin:8px 0;">
<div style="width:130px;"><div style="height:80px;background:#746F66;"></div><div style="font-size:11px;padding-top:4px;"><code>--color-brown</code><br>#746F66</div></div>
<div style="width:130px;"><div style="height:80px;background:#625E55;"></div><div style="font-size:11px;padding-top:4px;"><code>--color-brown-dark</code><br>#625E55</div></div>
<div style="width:130px;"><div style="height:80px;background:#C9C1B7;"></div><div style="font-size:11px;padding-top:4px;"><code>--color-sand</code><br>#C9C1B7</div></div>
<div style="width:130px;"><div style="height:80px;background:#141414;"></div><div style="font-size:11px;padding-top:4px;"><code>--color-black</code><br>#141414</div></div>
<div style="width:130px;"><div style="height:80px;background:#1C1006;"></div><div style="font-size:11px;padding-top:4px;"><code>--charcoal-deep</code><br>#1C1006</div></div>
</div>

| Token | Value | Usage |
|---|---|---|
| `--color-cream` | `#F2F2E8` | Primary background — warm off-white, dominant |
| `--color-charcoal` | `#1A1A1A` | Dark sections, footer background |
| `--color-wood` | `#C4A882` | Wood tan surface — warm product/material zones |
| `--color-sand` | `#C9C1B7` | Provenance / metadata labels, hairline borders |
| `--color-gold` | `#B39E5D` | Accent — primary CTA button, earthy, muted |
| `--color-warm-cream` | `#F7E6D2` | Headings on dark backgrounds |
| `--color-gold-olive` | `#5D5A40` | Deep olive-gold — rare dark accent |
| `--color-brown` | `#746F66` | Secondary text, dividers, footer labels |
| `--color-brown-dark` | `#625E55` | Dimmer text |
| `--color-black` | `#141414` | Primary body text |
| `--color-charcoal-deep` | `#1C1006` | Deepest brown-black — overlays (`rgba(28,16,6,.34)`), text on accent |
| `--color-white` | `#FFFFFF` | Photography interiors only |

**Semantic aliases**（程式碼實際引用層，都指向上表）：
`--color-bg`/`--color-surface` → cream · `--color-bg-dark`/`--color-surface-dark` → charcoal ·
`--color-accent` → gold · `--color-divider` → brown · `--color-text-primary` → black ·
`--color-text-secondary` → brown · `--color-text-dim` → brown-dark · `--color-text-pale` → sand ·
`--color-text-warm` → warm-cream · `--color-text-on-dark` → cream · `--color-overlay-dark` → charcoal-deep 34%

> [!warning] No gradients. No drop shadows.
> Sections alternate between cream and near-black — dramatic rhythm without gradients.

> [!note] Figma variables 對照
> Figma 工作檔的 Primitives 把 `#1A1A1A` / `#141414` 統一成 `ink/900 #151515`；官網程式碼維持上表原值。改 Figma 用 `#151515`，寫網站 CSS 用上表。詳見 [[Claude Skills/personal-skills/yuwu-design-system/SKILL|SKILL.md]] 第 1 節。

### Typography

| Typeface | Role | Sizes | Source |
|---|---|---|---|
| **Prociono** | Display, headings, product labels | 64, 32, 24, 22, 18, 12, 8px | Google Fonts |
| **Megrim** | Logo mark only — `YU·WU` | 60px (footer), 20px (nav) | Google Fonts |
| **Work Sans** | UI, nav, buttons, body, labels | 32, 18, 14, 12, 10px | Google Fonts |
| **Noto Sans TC** | Chinese text | 14px | Google Fonts |

**Key rules**
- Letter spacing on display headings: 8px (wide), 2px (subtitle), 1px (Prociono body), −0.03em (tight Prociono numbers)
- Line height: 1.88 (Prociono body), 2.15 (Work Sans), fixed 64px for hero
- Megrim is used **EXCLUSIVELY** for `YU·WU` — never for body copy or headings

> [!info] 字型預覽說明
> 下方樣本要在本機安裝 **Work Sans、Prociono、Megrim**（皆 Google Fonts 免費）才會顯示真字型，否則以系統字型代替；字級與字距仍照規範呈現。

**UI Type — Work Sans** — nav, buttons, body, labels

<div style="background:#F2F2E8;color:#141414;padding:28px 32px;margin:8px 0;font-family:'Work Sans','Noto Sans TC',sans-serif;">
<div style="display:flex;align-items:baseline;gap:24px;margin-bottom:18px;"><span style="width:90px;flex-shrink:0;font-size:11px;color:#746F66;">32 / 400</span><span style="font-size:32px;">Explore New Arrivals</span></div>
<div style="display:flex;align-items:baseline;gap:24px;margin-bottom:16px;"><span style="width:90px;flex-shrink:0;font-size:11px;color:#746F66;">18 / 400</span><span style="font-size:18px;">view product · EMAIL US · Film the Form</span></div>
<div style="display:flex;align-items:baseline;gap:24px;margin-bottom:16px;"><span style="width:90px;flex-shrink:0;font-size:11px;color:#746F66;">14 / 400</span><span style="font-size:14px;">shop · our direction · contact</span></div>
<div style="display:flex;align-items:baseline;gap:24px;margin-bottom:16px;"><span style="width:90px;flex-shrink:0;font-size:11px;color:#746F66;">14 / 600</span><span style="font-size:14px;font-weight:600;">Active nav link</span></div>
<div style="display:flex;align-items:baseline;gap:24px;margin-bottom:16px;"><span style="width:90px;flex-shrink:0;font-size:11px;color:#746F66;">12 / caps</span><span style="font-size:12px;letter-spacing:2px;">SHOP&nbsp;&nbsp;&nbsp;CUSTOMER&nbsp;&nbsp;&nbsp;COMPANY&nbsp;&nbsp;&nbsp;CONNECT</span></div>
<div style="display:flex;align-items:baseline;gap:24px;"><span style="width:90px;flex-shrink:0;font-size:11px;color:#746F66;">14 / dim</span><span style="font-size:14px;color:#625E55;">In step with nature · © 2026 Yu·Wu</span></div>
</div>

**Display Type — Prociono** — serif scale for hero, section heads, product labels, item numbers

<div style="background:#F2F2E8;color:#141414;padding:28px 32px;margin:8px 0;font-family:'Prociono',Georgia,serif;">
<div style="display:flex;align-items:baseline;gap:24px;margin-bottom:20px;"><span style="width:110px;flex-shrink:0;font-size:11px;color:#746F66;font-family:'Work Sans',sans-serif;">64 · 8px ls</span><span style="font-size:64px;letter-spacing:8px;line-height:1;">In step</span></div>
<div style="display:flex;align-items:baseline;gap:24px;margin-bottom:20px;"><span style="width:110px;flex-shrink:0;font-size:11px;color:#746F66;font-family:'Work Sans',sans-serif;">32 · 8px ls</span><span style="font-size:32px;letter-spacing:8px;">Two materials</span></div>
<div style="display:flex;align-items:baseline;gap:24px;margin-bottom:20px;"><span style="width:110px;flex-shrink:0;font-size:11px;color:#746F66;font-family:'Work Sans',sans-serif;">24 · 2px ls</span><span style="font-size:24px;letter-spacing:2px;">letting each object become</span></div>
<div style="display:flex;align-items:baseline;gap:24px;margin-bottom:20px;"><span style="width:110px;flex-shrink:0;font-size:11px;color:#746F66;font-family:'Work Sans',sans-serif;">22 · −0.03em</span><span style="font-size:22px;letter-spacing:-0.03em;">1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5</span></div>
<div style="display:flex;align-items:baseline;gap:24px;margin-bottom:20px;"><span style="width:110px;flex-shrink:0;font-size:11px;color:#746F66;font-family:'Work Sans',sans-serif;">12 · −0.03em</span><span style="font-size:12px;letter-spacing:-0.03em;">"Ascent" High Table · NT$ 9000 · By Enquiry</span></div>
<div style="display:flex;align-items:baseline;gap:24px;"><span style="width:110px;flex-shrink:0;font-size:11px;color:#746F66;font-family:'Work Sans',sans-serif;">8 · −0.03em</span><span style="font-size:8px;letter-spacing:-0.03em;color:#746F66;">Reworked · 1960s Singer · Found · Iron + Wood</span></div>
</div>

**Logo Type — Megrim** — decorative geometric, `YU·WU` brand mark only, never for body copy

<div style="display:flex;flex-wrap:wrap;gap:0;margin:8px 0;">
<div style="flex:2;min-width:220px;background:#F2F2E8;color:#141414;padding:40px 24px;text-align:center;"><div style="font-family:'Megrim',sans-serif;font-size:60px;">YU·WU</div><div style="font-size:11px;color:#746F66;margin-top:16px;font-family:'Work Sans',sans-serif;">Footer mark · 60px</div></div>
<div style="flex:2;min-width:220px;background:#1A1A1A;color:#F2F2E8;padding:40px 24px;text-align:center;"><div style="font-family:'Megrim',sans-serif;font-size:60px;">YU·WU</div><div style="font-size:11px;color:#746F66;margin-top:16px;font-family:'Work Sans',sans-serif;">On dark · 60px</div></div>
<div style="flex:1;min-width:140px;background:#F2F2E8;color:#141414;padding:40px 24px;text-align:center;"><div style="font-family:'Megrim',sans-serif;font-size:20px;margin-top:24px;">YU·WU</div><div style="font-size:11px;color:#746F66;margin-top:28px;font-family:'Work Sans',sans-serif;">Nav · 20px</div></div>
</div>

### Spacing Scale

4px 基底、13 級（`--space-N` = N × 4px；`--space-28` 例外訂為 100px）：

<div style="background:#F2F2E8;color:#141414;padding:24px 28px;margin:8px 0;">
<div style="display:flex;align-items:center;gap:16px;margin-bottom:8px;"><div style="width:4px;height:14px;background:#B39E5D;"></div><span style="font-size:12px;"><code>--space-1</code> · 4px</span></div>
<div style="display:flex;align-items:center;gap:16px;margin-bottom:8px;"><div style="width:8px;height:14px;background:#B39E5D;"></div><span style="font-size:12px;"><code>--space-2</code> · 8px</span></div>
<div style="display:flex;align-items:center;gap:16px;margin-bottom:8px;"><div style="width:12px;height:14px;background:#B39E5D;"></div><span style="font-size:12px;"><code>--space-3</code> · 12px</span></div>
<div style="display:flex;align-items:center;gap:16px;margin-bottom:8px;"><div style="width:16px;height:14px;background:#B39E5D;"></div><span style="font-size:12px;"><code>--space-4</code> · 16px</span></div>
<div style="display:flex;align-items:center;gap:16px;margin-bottom:8px;"><div style="width:20px;height:14px;background:#B39E5D;"></div><span style="font-size:12px;"><code>--space-5</code> · 20px</span></div>
<div style="display:flex;align-items:center;gap:16px;margin-bottom:8px;"><div style="width:24px;height:14px;background:#B39E5D;"></div><span style="font-size:12px;"><code>--space-6</code> · 24px</span></div>
<div style="display:flex;align-items:center;gap:16px;margin-bottom:8px;"><div style="width:32px;height:14px;background:#B39E5D;"></div><span style="font-size:12px;"><code>--space-8</code> · 32px</span></div>
<div style="display:flex;align-items:center;gap:16px;margin-bottom:8px;"><div style="width:40px;height:14px;background:#B39E5D;"></div><span style="font-size:12px;"><code>--space-10</code> · 40px · button padding</span></div>
<div style="display:flex;align-items:center;gap:16px;margin-bottom:8px;"><div style="width:48px;height:14px;background:#B39E5D;"></div><span style="font-size:12px;"><code>--space-12</code> · 48px · content padding</span></div>
<div style="display:flex;align-items:center;gap:16px;margin-bottom:8px;"><div style="width:64px;height:14px;background:#B39E5D;"></div><span style="font-size:12px;"><code>--space-16</code> · 64px</span></div>
<div style="display:flex;align-items:center;gap:16px;margin-bottom:8px;"><div style="width:80px;height:14px;background:#B39E5D;"></div><span style="font-size:12px;"><code>--space-20</code> · 80px</span></div>
<div style="display:flex;align-items:center;gap:16px;margin-bottom:8px;"><div style="width:96px;height:14px;background:#B39E5D;"></div><span style="font-size:12px;"><code>--space-24</code> · 96px</span></div>
<div style="display:flex;align-items:center;gap:16px;"><div style="width:100px;height:14px;background:#B39E5D;"></div><span style="font-size:12px;"><code>--space-28</code> · 100px · section vertical padding</span></div>
</div>

### Layout

- Max content width: **1440px** centered
- Horizontal padding: **48px** (`--space-12`)
- Section vertical padding: **100px** (`--space-28`)
- Nav height: **62px** · Button height: **62px**（水平 padding `--space-10` 40px）
- Product card: **413 × 552px**

### Border radius

> [!important] 0px everywhere
> Cards, buttons, images — all square corners. A deliberate, non-negotiable brand signal: handcrafted, honest, no softening.

### Backgrounds & sections

Alternating solid sections — no gradients, no patterns:
1. Cream `#F2F2E8` — hero, materials, about sections
2. Near-black `#1A1A1A` — new arrivals, footer, contact

Hero images: full-bleed photography, muted/desaturated palette. Studio photography uses concrete-plaster walls as background.

### Photography style

<p style="font-size:12px;letter-spacing:1.5px;color:#746F66;">GREY CONCRETE · WARM WOOD · DESATURATED · STUDIO NATURAL LIGHT</p>

> [!quote] Photography rules
> - Grey concrete / plaster wall backgrounds — cool, neutral
> - Warm wood surfaces as secondary ground
> - Desaturated, slightly underexposed
> - No white backgrounds, no cut-out objects, no drop shadows
> - Warm subject tones (wood, iron, brass) against cool walls
> - Objects grounded — never floating

### Buttons

<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;background:#1A1A1A;padding:24px;margin:8px 0;">
<span style="display:inline-block;background:#B39E5D;color:#1A1A1A;padding:12px 28px;font-size:13px;">primary</span>
<span style="display:inline-block;background:#F2F2E8;color:#141414;padding:12px 28px;font-size:13px;">secondary</span>
<span style="display:inline-block;background:transparent;color:#F2F2E8;padding:12px 28px;font-size:13px;box-shadow:inset 0 0 0 1px #F2F2E8;">outline</span>
</div>
<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;background:#F2F2E8;padding:24px;margin:8px 0;">
<span style="display:inline-block;background:transparent;color:#141414;padding:12px 28px;font-size:13px;box-shadow:inset 0 0 0 1px #141414;">outline-dark</span>
</div>

| Variant        | Background                       | Text           | Usage                |     |
| -------------- | -------------------------------- | -------------- | -------------------- | --- |
| `primary`      | `#B39E5D` gold                   | Dark `#1A1A1A` | Main CTA             |     |
| `secondary`    | `#F2F2E8` cream                  | Dark `#141414` | On dark backgrounds  |     |
| `outline`      | Transparent + cream inset border | Cream          | On dark backgrounds  |     |
| `outline-dark` | Transparent + dark inset border  | Dark           | On light backgrounds |     |

All buttons: 62px height, 40px padding, 0px radius, Work Sans 18px.

### Dividers

1px horizontal lines in warm brown `#746F66`. Between contact/info rows. No decorative rules — function only.

### Cards

Portrait ratio 413×552px. Cream background. Zero border radius. Zero shadow. Item number (Prociono 22px) top-right. Product image in a 276×411 centered crop. Name + price (Prociono 12px) bottom.

### Animation & hover states

- Link hover: opacity decrease (0.66 for underlined nav links)
- Button hover: `opacity: 0.88`, transition `0.2s ease`
- Card hover: `opacity: 0.88` when clickable
- No transforms, no slides, no bounces
- Calm, unhurried transitions

### Shadows

None. No drop shadows or box shadows (except inset borders on buttons).

---

## Iconography

Only one icon in use: the **Threads logo** SVG (`assets/icon-threads.svg`, `assets/icon-threads-sm.svg`). Appears at 18×18px with `opacity: 0.59` in the footer.

No icon library. No icon font. No CDN icon set. The visual language is purely typographic and photographic.

---

## Components

| Component | File | Purpose |
|---|---|---|
| `Button` | `components/core/Button.jsx` | CTA — 4 variants |
| `Divider` | `components/core/Divider.jsx` | 1px separator |
| `Nav` | `components/core/Nav.jsx` | Top navigation bar |
| `Tag` | `components/core/Tag.jsx` | Metadata label |
| `ProductCard` | `components/core/ProductCard.jsx` | Portrait product tile |
| `Footer` | `components/core/Footer.jsx` | Site footer |

### UI Kit — YUWU Website

`ui_kits/website/index.html` — interactive clickable prototype of the full site. Pages: **Homepage** · **Shop** · **Our Direction** · **Contact**.

---

## File Index

```
/
├── styles.css                          ← Global entry point (@import-only)
├── readme.md                           ← Full system doc
├── SKILL.md                            ← Agent skill definition
│
├── tokens/
│   ├── fonts.css                       ← Google Fonts @import
│   ├── colors.css                      ← Color custom properties
│   ├── typography.css                  ← Font families, sizes, tracking, leading
│   └── spacing.css                     ← Spacing scale, layout, radius, sizes
│
├── assets/                             ← Hero, product, material, studio photos + Threads icon
│
├── components/core/                    ← Button · Divider · Nav · Tag · ProductCard · Footer
│
├── guidelines/                         ← Colour, type, spacing, photography, voice cards
│
└── ui_kits/website/                    ← Interactive website prototype (Home/Shop/Direction/Contact)
```

---

## Related

- [[Claude Skills/personal-skills/yuwu-design-system/SKILL|yuwu-design-system SKILL.md]] — agent 使用規範、Figma variables 建置狀態
- [[YUWU Website_claude design_0710.html|YUWU Website]] — standalone offline prototype（vault 根目錄）
- Namespace (compiled bundle): `YUWUDesignSystem_019e1c`
