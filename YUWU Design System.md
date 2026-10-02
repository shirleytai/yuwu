---
title: YUWU Design System
aliases:
  - 禹物再製所
  - YU·WU
tags:
  - design-system
  - brand
  - yuwu
brand: YUWU (禹物再製所)
website: https://yu-wu.studio
updated: 2026-07-12
---

# YUWU Design System (禹物再製所)

> [!abstract] What this is
> The complete brand + design-system reference for **YUWU (禹物再製所)**, a Taiwanese salvaged-object art studio in Tainan. Colours, typography, layout, components, voice, and photography rules — everything needed to design on-brand.

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
> **Background** `#F2F2E8` cream · **Dark** `#1A1A1A` · **Accent/CTA** `#B39E5D` gold
> **Text** `#141414` on cream, `#F2F2E8` on dark · **Muted** `#746F66`
> **Fonts** Prociono (display) · Megrim (`YU·WU` logo ONLY) · Work Sans (UI/body)
> **Non-negotiables** 0px radius · no gradients · no shadows · nav lowercase · footer ALL CAPS · no emoji

---

## Content Fundamentals

### Tone of voice

YUWU writes in English for international/design-minded audiences, with Traditional Chinese (繁體) used sparingly for local context.

- **Poetic, precise, unhurried.** Never sales-oriented. Never urgent. The writing breathes.
- **Nature-rooted.** Metaphors from materials, time, and decay. "Rust is time's handwriting on metal."
- **Wabi-sabi spirit.** Imperfection as beauty. Patina as value. Cracks as character.
- **First-person plural.** "We don't restore old things." "We let the cracks stay."
- **No emoji.** No exclamation marks. No urgency-driven calls to action.

> [!example] Voice
> ✓ "Rust is time's handwriting on metal — we clear the loose flakes but keep the deep red-brown beneath, then seal it in beeswax."
> ✓ "We let the cracks stay, let the rust stay, and give them a new use so they can step into today's life."
> ✓ "letting each object become a life of its own."
> ✗ "Shop now for amazing deals! 🌿 Limited time offer!"

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

| Token | Value | Usage |
|---|---|---|
| `--color-cream` | `#F2F2E8` | Primary background — warm off-white, dominant |
| `--color-charcoal` | `#1A1A1A` | Dark sections, footer background |
| `--color-gold` | `#B39E5D` | Primary CTA button — earthy, muted |
| `--color-warm-cream` | `#F7E6D2` | Headings on dark backgrounds |
| `--color-brown` | `#746F66` | Secondary text, dividers, footer labels |
| `--color-brown-dark` | `#625E55` | Dimmer text |
| `--color-sand` | `#C9C1B7` | Provenance / metadata labels |
| `--color-black` | `#141414` | Primary body text |

> [!warning] No gradients. No drop shadows.
> Sections alternate between cream and near-black — dramatic rhythm without gradients.

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

### Layout

- Max content width: **1440px** centered
- Horizontal padding: **48px** (`--content-padding`)
- Section vertical padding: **100px** (`--section-padding`)
- Nav height: **62px**
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

- Grey concrete / plaster wall backgrounds — cool, neutral
- Warm wood surfaces as secondary ground
- Desaturated, slightly underexposed
- No white backgrounds, no cut-out objects, no drop shadows
- Warm subject tones (wood, iron, brass) against cool walls
- Objects grounded — never floating

### Buttons

| Variant | Background | Text | Usage |
|---|---|---|---|
| `primary` | `#B39E5D` gold | Dark `#1A1A1A` | Main CTA |
| `secondary` | `#F2F2E8` cream | Dark `#141414` | On dark backgrounds |
| `outline` | Transparent + cream inset border | Cream | On dark backgrounds |
| `outline-dark` | Transparent + dark inset border | Dark | On light backgrounds |

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

- [[YUWU Website]] — standalone offline prototype
- Namespace (compiled bundle): `YUWUDesignSystem_019e1c`
