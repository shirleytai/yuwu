---
name: yuwu-design-system
description: 禹物（YU·WU）官網的 design system 規範與 Figma 建置指南。 當使用者要為禹物官網設計新頁面、製作新元件、寫前端 CSS/HTML/React、 檢查設計稿是否符合品牌規範，或需要查詢禹物的色彩、字體、間距 tokens 時， 必須使用此技能。適用情境：「幫禹物做一個新頁面」、「這個顏色對嗎」、 「照禹物的風格做」、「繼續建 Figma design system」、「輸出 CSS variables」。 只要任務涉及禹物官網的視覺規範，無論中英文都應觸發此技能。
---

# 禹物（YU·WU）Design System

舊物修復工作室「禹物再製所」官網的設計系統。
來源檔案：[Figma — 禹物官網（原稿）](https://www.figma.com/design/Mver8UMolEHrTgELQR5E94/%E7%A6%B9%E7%89%A9%E5%AE%98%E7%B6%B2?node-id=28-501)（node `28:501`，2026-07-06 掃描）。
**工作檔（design system 建置於此）**：[Figma — 禹物官網（付費帳號複本）](https://www.figma.com/design/dPDjpmrAzWC32MdSoXKm6n/%E7%A6%B9%E7%89%A9%E5%AE%98%E7%B6%B2)。

## 設計哲學

**侘寂（wabi-sabi）× 修復敘事**。米白紙感底、墨黑對比、暖灰輔助；
襯線英文標題傳達手工感，大量留白，直角無圓角（radius = 0），
攝影以自然光、材質特寫為主。「不掩飾裂痕，讓修補成為裝飾」。

---

## 1. Color Tokens

### Primitives（原始值，不直接使用）

| Token | Hex | 說明 |
|-------|-----|------|
| `cream/100` | `#F2F2E8` | 米白紙感，全站底色 |
| `peach/200` | `#F7E6D2` | 蜜桃暖色，年輪插圖／點綴 |
| `sand/300` | `#C9C1B7` | 沙褐，邊框與弱化元素 |
| `stone/500` | `#746F66` | 暖灰，次要文字 |
| `stone/700` | `#625E55` | 深暖灰，第三層文字 |
| `slate/600` | `#475161` | 冷灰藍,少量 icon 用 |
| `espresso/900` | `#1C1006` | 深咖啡，accent 上的文字 |
| `ink/900` | `#151515` | 墨黑（已統一 `#1A1A1A`、`#141414` 等近似值）|
| `white/000` | `#FFFFFF` | 純白，僅照片區域內使用 |

### Semantic（實際引用這一層）

| Token | 指向 | CSS 變數 |
|-------|------|----------|
| `color/bg/page` | cream/100 | `var(--color-bg-page)` |
| `color/bg/inverse` | ink/900 | `var(--color-bg-inverse)` |
| `color/bg/accent` | peach/200 | `var(--color-bg-accent)` |
| `color/text/primary` | ink/900 | `var(--color-text-primary)` |
| `color/text/secondary` | stone/500 | `var(--color-text-secondary)` |
| `color/text/tertiary` | stone/700 | `var(--color-text-tertiary)` |
| `color/text/inverse` | cream/100 | `var(--color-text-inverse)` |
| `color/text/on-accent` | espresso/900 | `var(--color-text-on-accent)` |
| `color/border/default` | sand/300 | `var(--color-border-default)` |
| `color/border/strong` | ink/900 | `var(--color-border-strong)` |
| `color/icon/default` | ink/900 | `var(--color-icon-default)` |
| `color/icon/muted` | slate/600 | `var(--color-icon-muted)` |

規則：深色區塊（footer、商品輪播帶）用 `bg/inverse` + `text/inverse`；
永遠不要在 semantic 層之外直接用 hex。

## 2. Typography

四個字族，各司其職（皆為 Google Fonts）：

| 字族 | 角色 |
|------|------|
| **Prociono** | 襯線標題、商品編號、儀式感文字 |
| **Work Sans** | 英文內文、導覽、功能性文字 |
| **Megrim** | 僅限 YU·WU logo 標準字，別處禁用 |
| **Noto Sans CJK TC** | 中文內文 |

### Type Ramp（= Figma text styles）

| Style | 字體 | 大小/行高 | 字距 | 用途 |
|-------|------|----------|------|------|
| `Display/Hero` | Prociono Reg | 64/64px | +8px | Hero 大標（In step with nature）|
| `Heading/H2` | Prociono Reg | 32/40px | +2px | 區塊標題 |
| `Heading/H3` | Prociono Reg | 22/30px | +1px | 小節、卡片標題 |
| `Heading/H4` | Prociono Reg | 16/30px | +1px | 細項標題、欄位標籤 |
| `Heading/Subtitle Sans` | Work Sans SemiBold | 20/28px | +2% | 無襯線副標 |
| `Body/Large` | Work Sans Reg | 18/28px | 0 | 導言、重點段落 |
| `Body/Default` | Work Sans Reg | 14/16px | 0 | 標準內文 |
| `Body/Small` | Work Sans Reg | 12/16px | 0 | 註解、caption、footer |
| `Body/Serif Caption` | Prociono Reg | 12/188% | 0 | 商品編號、襯線小字 |
| `Body/CJK` | Noto Sans TC Med | 14/20px | 0 | 中文內文（Figma 雲端無 CJK 版，用 Noto Sans TC 替代）|
| `Brand/Logo` | Megrim Med | 60/215% | −3% | YU·WU 標準字 |

規則：標題層次靠**字級與留白**製造，不靠字重（標題一律 Regular）。

## 3. Spacing & Radius

| Token | 值 | | Token | 值 |
|-------|---|---|-------|---|
| `spacing/xs` | 4 | | `spacing/xl` | 32 |
| `spacing/sm` | 8 | | `spacing/2xl` | 48 |
| `spacing/md` | 16 | | `spacing/3xl` | 64 |
| `spacing/lg` | 24 | | `spacing/4xl` | 96 |

Radius 只有兩個：`radius/none = 0`（幾乎所有元素）、`radius/full = 999`（圓形頭像等）。
**這個品牌沒有圓角卡片** — 直角是刻意的。Section 上下留白至少 `3xl (64px)`。

## 4. 元件規格（Component Specs）

- **Button**：直角、無填色 outline（淺底）或米白字（深底）；Work Sans 14px；
  padding `md × sm`；hover 反轉底色與文字。變體軸：`Style=Light|Dark`、`State=Default|Hover`
- **Divider**：1px 實線 `border/default`；深色底上用 `text/inverse` 20% 透明度
- **Product Card**：白底照片 + `Body/Serif Caption` 編號 + `Heading/H3` 品名 + `text/secondary` 材質行；深色輪播帶上整張卡浮在 `bg/inverse` 上
- **Nav**：頂部細導覽，Work Sans 12–14px 小寫，項目間距 `xl`
- **Footer**:`bg/inverse` 底、多欄連結 `Body/Small`、右側 YU·WU 直式 logo

## 5. Figma 建置狀態（2026-07-06 更新）

建置已移到**付費帳號的工作檔** `dPDjpmrAzWC32MdSoXKm6n`（舊 Starter 檔 `Mver8UMolEHrTgELQR5E94` 裡也留有一套相同的 variables，之後以工作檔為準）。

✅ **工作檔已完成**：

- Variables 4 collections / 31 個（含 scopes 與 WEB code syntax）：
  `Primitives` `VariableCollectionId:7:103`（9 色）、`Color` `VariableCollectionId:7:113`（12 semantic）、
  `Spacing` `VariableCollectionId:7:126`（8）、`Radius` `VariableCollectionId:7:135`（2）
- Text styles 11 個（照上方 Type Ramp；`Body/CJK` 用 Noto Sans TC Medium）
- 文件頁 `DS / Color`（page `9:103`，主框 `9:105`）：Brand / Support 色卡牆、
  12 列 Semantic Tokens 表、Rules — 所有色塊與文字皆綁定 variables
- 文件頁 `DS / Typography`（page `9:104`，主框 `12:103`）：四字族樣本（含中文）、
  11 列 Type Ramp 對照表、Rules

⏸ **尚未建置**：

1. 元件：Button（Style=Light|Dark × State=Default|Hover）、Divider、Product Card — 全部綁定 variables
2. `DS / Cover` 封面頁與 Spacing 文件區
3. 回頭把原設計稿（Page 1 的 v.1 / v.2 sections）的硬編碼色彩／文字換綁到 variables 與 styles

繼續建置時：載入 `figma-use` 與 `figma-generate-library` 兩個 Figma skill，
用上面的 ID 續作，勿重建已存在的變數與樣式（先以名稱查重）。

## 6. CSS 輸出範本

```css
:root {
  --color-bg-page: #F2F2E8;
  --color-bg-inverse: #151515;
  --color-bg-accent: #F7E6D2;
  --color-text-primary: #151515;
  --color-text-secondary: #746F66;
  --color-text-tertiary: #625E55;
  --color-text-inverse: #F2F2E8;
  --color-text-on-accent: #1C1006;
  --color-border-default: #C9C1B7;
  --color-border-strong: #151515;
  --spacing-xs: 4px;  --spacing-sm: 8px;  --spacing-md: 16px;
  --spacing-lg: 24px; --spacing-xl: 32px; --spacing-2xl: 48px;
  --spacing-3xl: 64px; --spacing-4xl: 96px;
  --font-serif: "Prociono", serif;
  --font-sans: "Work Sans", sans-serif;
  --font-cjk: "Noto Sans TC", sans-serif;
  --font-logo: "Megrim", cursive;
}
```

## 相關

- 品牌文案與故事 → 用 `/yucreation-brain`
- 同風格電商版型 → 用 `/artisan-furniture-ecommerce-ui`
