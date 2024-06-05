# article-hub

這是一個簡單且靈活的文章管理服務，具有以下功能：

1. 根據第三方服務獲取資料並存入自己的資料庫。
2. 從自己的資料庫取用資料。

## 主要功能

### 1. 根據第三方服務獲取資料

使用 `articleService.ts`
從第三方服務獲取資料，管理資料商業邏輯，並存入自己的資料庫。

### 2. 可以靈活改變其 DB 實體

改變其 `db.ts` 的 db 實體。

## 執行

`bun run index.ts`

## 環境變數

- APIURL 預設 `http://localhost:5000/scrape`
- PORT 預設 `8080`

## 待處理事項

1. 容器化
