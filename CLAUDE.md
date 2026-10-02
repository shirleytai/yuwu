# 禹物 YU·WU 官網

禹物再製所的品牌官網。**這個 repo 是唯一的開發來源**——已不再使用 Claude Design，不要建議回 Claude Design 修改或匯出。

## 指令

- `npm run dev` — 本機開發（Vite）
- `npm run build` — 建置到 `dist/`；改完一定要跑，確認沒有錯誤
- `npm run preview` — 預覽建置結果（網址在 `/yuwu/` 底下）

## 部署

網站在 https://shirleytai.github.io/yuwu/（GitHub repo `shirleytai/yuwu`，公開）。push 到 `main` 會由 `.github/workflows/deploy.yml` 自動建置並部署，約 1–2 分鐘。

正式版的 base 路徑是 `/yuwu/`（見 `vite.config.js`），所以 JSX 裡的圖片一律用 `img('檔名')`（`src/asset.js`），不要寫死 `/images/...`；CSS 裡的 `url('/fonts/...')` Vite 會自動處理。

## 架構

React 18 + Vite 2，沒有 router，用 `page` state 切換頁面。

- `src/App.jsx` — 所有頁面：Home、Shop、ProductDetail、About、Journal、Contact、Room（推門進入的房間）、Footer
- `src/components/` — Header、ProductCard（ShoreHero 為舊的手繪海岸首圖，目前未使用）
- `src/data/content.js` — 商品、誌文章、商品故事（中英文）
- `src/styles.css` — 原版面樣式
- `src/design-system.css` — 品牌 tokens（色彩、字型、間距）與統一覆寫，載入順序在 styles.css 之後
- `public/images/` — 網站用圖；`public/fonts/` — 字型
- `source-assets/` — 原始照片、設計稿、舊 Claude Design 匯出（不進 git，只當素材庫）

雙語：所有文案用 `t(lang, 中文, English)`，兩種語言都要寫。

## 品牌規範

完整規範在 `YUWU Design System.md`，實作差異記錄在 `DESIGN-SYSTEM-IMPLEMENTATION.md`。新增或修改樣式時用 `design-system.css` 裡的 CSS variables，不要寫死色碼。也可使用 `yuwu-design-system` skill。

## 效能原則（曾因首圖過重造成卡頓與黑色殘影）

- 圖片一律轉 WebP（`cwebp -q 82`），寬度 ≤ 2000px，盡量 < 300KB；非首屏圖片加 `loading="lazy"`
- 首圖是單張靜態圖 `/images/hero-beach.webp`，不要再疊圖層
- 避免：無限循環動畫、`filter: blur`、`mix-blend-mode`、`backdrop-filter`、SVG 濾鏡動畫、捲動視差、大量 `will-change`、多張全螢幕疊圖
- 只播一次的進場動畫（transform / opacity）可以使用
