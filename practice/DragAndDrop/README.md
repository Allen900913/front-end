# 拖放圖片專案

這是一個簡單的拖放圖片範例，展示了 HTML5 的 Drag and Drop API 使用方式。

## 功能特色

- ✨ 拖放圖片到指定區域
- 🎨 美觀的 UI 設計
- 📱 響應式設計（支援手機和平板）
- 🖱️ 雙擊清空功能
- 💫 流暢的動畫效果

## 檔案結構

```
DragAndDrop/
├── index.html      # 主頁面
├── style.css       # 樣式表
├── script.js       # JavaScript 邏輯
└── README.md       # 說明文件
```

## 使用方式

1. 將圖片檔案放在同一個資料夾：
   - luffy.png
   - nami.png
   - usopp.png
   - zoro.png
   - sanji.png
   - chopper.png
   - tshirt.png

2. 用瀏覽器開啟 `index.html`

3. 拖動圖片到虛線框內

4. 雙擊虛線框可以清空圖片

## 技術要點

### HTML5 Drag and Drop API

- `draggable="true"` - 讓元素可拖放
- `dragstart` - 開始拖放時觸發
- `dragend` - 結束拖放時觸發
- `dragover` - 拖放經過時觸發（需要 preventDefault）
- `drop` - 放下時觸發

### CSS 特效

- Grid 佈局
- 漸層背景
- 懸浮動畫
- 拖放狀態樣式

### JavaScript 功能

- 事件委派
- DataTransfer API
- 動態創建元素
- classList 操作

## 瀏覽器支援

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅

## 未來改進

- [ ] 添加多個拖放區域
- [ ] 支援圖片縮放
- [ ] 儲存拖放結果
- [ ] 撤銷/重做功能
- [ ] 匯出為圖片

## 授權

MIT License
