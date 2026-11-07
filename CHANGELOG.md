## [13.1.4] - 2026-11-07
### 新增
- 在「我的最愛」的標籤檢視中，可把專案拖放到標籤上來加入該標籤（自 13.1.2 起提供）

### 變更
- 新功能頁面、README、更新記錄、設定說明與介面文字全面改用台灣繁體中文
- 把 `vscode-whats-new` 子模組改為 repo 內的一般目錄，以便翻譯其頁面

### 修正
- 修正中文介面下，手動編輯專案清單的按鈕沒有反應的問題
- 修正導覽教學的檔案路徑大小寫，避免在區分大小寫的系統上找不到檔案
- 新功能頁面的舊 Issue 與 PR 連結改回指向原作者的存放庫

## [13.1.3] - 2026-11-07
### 變更
- 擴充功能 ID 改為 `maotou316.project-manager-maotou`，因為 VS Code Marketplace 要求擴充功能名稱必須唯一

## [13.1.2] - 2026-11-07
### 新增
- 以 `maotou316.project-manager` 發佈分支版本，基於 Alessandro Fragnani 的 Project Manager 13.1.1
- 在我的最愛檢視中，可將專案拖放到標籤上
- `projectManager.tags` 中尚未被任何專案使用的標籤，也會列在標籤檢視中

## [13.1.1] - 2026-03-31
### 內部
- 發佈到 open-vsx 失敗（issue [#920](https://github.com/alefragnani/vscode-project-manager/issues/920)）

## [13.1.0] - 2026-03-31
### 新增
- 自動偵測 VS Code 工作區（issue [#334](https://github.com/alefragnani/vscode-project-manager/issues/334)）
- 儲存專案時可新增標籤（issue [#551](https://github.com/alefragnani/vscode-project-manager/issues/551)）
- 標籤檢視中的標籤可摺疊（issue [#867](https://github.com/alefragnani/vscode-project-manager/issues/867)）
- 在標籤檢視中隱藏沒有標籤的專案（感謝 @AlanQtten PR [#874](https://github.com/alefragnani/vscode-project-manager/pull/874)）
- 自動偵測支援符號連結（symlinks）（issue [#655](https://github.com/alefragnani/vscode-project-manager/issues/655)）
- `baseFolders` 設定支援 glob 模式（issue [#309](https://github.com/alefragnani/vscode-project-manager/issues/309)）
- 自動偵測的專案可排除基底資料夾（issue [#828](https://github.com/alefragnani/vscode-project-manager/issues/828)）

### 變更
- 在 README 中加入鍵盤導覽的按鍵繫結（感謝 @zobweyt PR [#839](https://github.com/alefragnani/vscode-project-manager/pull/839)）
- 更新翻譯／在地化的參考資料（issue [#854](https://github.com/alefragnani/vscode-project-manager/issues/854)）

### 修正
- 路徑使用 `~` 或 `$HOME` 時，側邊欄未醒目提示目前的專案（issue [#892](https://github.com/alefragnani/vscode-project-manager/issues/892)）
- `baseFolders` 設定在路徑中使用 `~` 時無法運作（issue [#663](https://github.com/alefragnani/vscode-project-manager/issues/663)）

### 內部
- 資安警示：js-yaml（dependabot [PR #850](https://github.com/alefragnani/vscode-project-manager/pull/850)）
- 資安警示：webpack（dependabot [PR #895](https://github.com/alefragnani/vscode-project-manager/pull/895)）
- 資安警示：minimatch（dependabot [PR #900](https://github.com/alefragnani/vscode-project-manager/pull/900)）
- 資安警示：cross-spawn（dependabot [PR #904](https://github.com/alefragnani/vscode-project-manager/pull/904)）
- 資安警示：minimatch（dependabot [PR #906](https://github.com/alefragnani/vscode-project-manager/pull/906)）
- 資安警示：flatted（dependabot [PR #911](https://github.com/alefragnani/vscode-project-manager/pull/911)）
- 資安警示：picomatch（dependabot [PR #914](https://github.com/alefragnani/vscode-project-manager/pull/914)）
- 資安警示：brace-expansion（dependabot [PR #915](https://github.com/alefragnani/vscode-project-manager/pull/915)）
- 升級 Node.js 至 v22（PR [#910](https://github.com/alefragnani/vscode-project-manager/pull/910)）
- 升級 `vscode-whats-new` 至 2026 年 3 月版本（PR [#913](https://github.com/alefragnani/vscode-project-manager/pull/913)）


## [13.0.0] - 2025-12-17
### 新增
- 再度完全開放原始碼（issue [#498](https://github.com/alefragnani/vscode-project-manager/issues/498)）
- 在側邊欄中醒目提示目前的專案（issue [#299](https://github.com/alefragnani/vscode-project-manager/issues/299)）
- 歡迎檢視支援在地化（issue [#938](https://github.com/alefragnani/vscode-project-manager/issues/938)）
- `package.json` 格式錯誤的訊息支援強制回應訊息（Modal Message）（issue [#531](https://github.com/alefragnani/vscode-project-manager/issues/531)）
- 專案支援**設定檔**（Profile）（issue [#281](https://github.com/alefragnani/vscode-project-manager/issues/281)）
- **fr** 翻譯（感謝 @damsfx PR [#735](https://github.com/alefragnani/vscode-project-manager/issues/735)）
- **zh-tw** 與 **zh-cn** 翻譯（感謝 @Chakyiu PR [#734](https://github.com/alefragnani/vscode-project-manager/issues/734)）

### 變更
- 更新 `projectsLocation` 設定的說明（issue [#764](https://github.com/alefragnani/vscode-project-manager/issues/764)）
- **ru** 翻譯（PR [#841](https://github.com/alefragnani/vscode-project-manager/pull/841)）
- **uk** 翻譯（PR [#842](https://github.com/alefragnani/vscode-project-manager/pull/842)）
- **zh-cn** 翻譯（感謝 @Mister-Hope PR [#771](https://github.com/alefragnani/vscode-project-manager/issues/771)）

### 修正
- 依標籤篩選時未顯示我的最愛（issue [#557](https://github.com/alefragnani/vscode-project-manager/issues/557)）
- 遠端專案也遵守 `removeCurrentProjectFromList` 設定（issue [#381](https://github.com/alefragnani/vscode-project-manager/issues/381)）
- 修正細微的文法問題（感謝 @dphelan PR [#795](https://github.com/alefragnani/vscode-project-manager/issues/795)）
- 列舉值 `confirmSwitchOnActiveWindow` 的說明（感謝 @salim-b PR [#797](https://github.com/alefragnani/vscode-project-manager/issues/797)）

### 內部
- 資安警示：brace-expansion（dependabot [PR #832](https://github.com/alefragnani/vscode-project-manager/pull/832)）
- 資安警示：serialize-javascript（dependabot [PR #796](https://github.com/alefragnani/vscode-project-manager/pull/796)）
- 資安警示：webpack（dependabot [PR #761](https://github.com/alefragnani/vscode-project-manager/pull/761)）
- 資安警示：braces（dependabot [PR #746](https://github.com/alefragnani/vscode-project-manager/pull/746)）


## [12.8.0] - 2024-03-28
### 新增
- 發佈到 Open VSX（issue [#458](https://github.com/alefragnani/vscode-project-manager/issues/458)）
- 入門導覽／逐步引導（Getting Started/Walkthrough）（issue [#517](https://github.com/alefragnani/vscode-project-manager/issues/517)）
- **cs** 翻譯（issue [#720](https://github.com/alefragnani/vscode-project-manager/issues/720)）

### 變更
- 使用 Gitpod 時不顯示 What's New（issue [#724](https://github.com/alefragnani/vscode-project-manager/issues/724)）
- 安裝較低版本時不顯示 What's New（issue [#724](https://github.com/alefragnani/vscode-project-manager/issues/724)）

### 修正
- `baseFolders` 包含符號連結時啟用失敗（issue [#657](https://github.com/alefragnani/vscode-project-manager/issues/657)）
- 專案使用相對路徑時，狀態列消失（issue [#650](https://github.com/alefragnani/vscode-project-manager/issues/650)）
- 未開啟任何資料夾時嘗試儲存專案（issue [#683](https://github.com/alefragnani/vscode-project-manager/issues/683)）
- json 無效時擴充功能啟用的問題（issue [#687](https://github.com/alefragnani/vscode-project-manager/issues/687)）
- What's New 在網頁版中損壞（issue [#677](https://github.com/alefragnani/vscode-project-manager/issues/677)）

### 內部
- 在地化（l10n）支援（issue [#654](https://github.com/alefragnani/vscode-project-manager/issues/654)）
- 支援隱含啟用事件 API（Implicit Activation Events API）（issue [#659](https://github.com/alefragnani/vscode-project-manager/issues/659)）
- 資安警示：word-wrap（dependabot [PR #695](https://github.com/alefragnani/vscode-project-manager/pull/695)）
- 資安警示：webpack（dependabot [PR #680](https://github.com/alefragnani/vscode-project-manager/pull/680)）
- 資安警示：terser（dependabot [PR #624](https://github.com/alefragnani/vscode-project-manager/pull/624)）

## [12.7.0] - 2022-09-02
### 新增
- 改善 `List` 的效能（issue [#628](https://github.com/alefragnani/vscode-project-manager/issues/628)）
- 在活動列中篩選專案（issue [#213](https://github.com/alefragnani/vscode-project-manager/issues/213)）
- 重新命名專案時接受大小寫變更（感謝 @gdh1995 PR [#622](https://github.com/alefragnani/vscode-project-manager/issues/622)）

### 修正
- Linux 中 `File Manager` 的說明有誤（issue [#618](https://github.com/alefragnani/vscode-project-manager/issues/618)）
- `cache` 為 `false` 時，專案未被自動偵測（issue [#448](https://github.com/alefragnani/vscode-project-manager/issues/448)）

### 內部
- 改善擴充功能啟動速度（issue [#625](https://github.com/alefragnani/vscode-project-manager/issues/625)）

## [12.6.1] - 2022-07-17
### 內部
- 新增 GitHub Sponsors 支援（PR [#613](https://github.com/alefragnani/vscode-project-manager/pull/613)）

## [12.6.0] - 2022-05-21
### 新增
- 新增設定，可決定在同一視窗切換專案時是否要求確認（issue [#346](https://github.com/alefragnani/vscode-project-manager/issues/346)）
- 專案清單選擇器中新增 `Open in New Window` 按鈕（issue [#570](https://github.com/alefragnani/vscode-project-manager/issues/570)）
- 支援設定類別 API（Settings Categories API）（issue [#554](https://github.com/alefragnani/vscode-project-manager/issues/554)）

### 修正
- `openInCurrenWindowIfEmpty` 設定中的拼字錯誤（感謝 @apettenati [PR #587](https://github.com/alefragnani/vscode-project-manager/pull/587)）

## [12.5.0] - 2022-02-08
### 新增
- 新增設定，讓 `baseFolder` 設定支援符號連結（issue [#583](https://github.com/alefragnani/vscode-project-manager/issues/583)）
- 支援新的 MacOS 檔案選單 API（issue [#555](https://github.com/alefragnani/vscode-project-manager/issues/555)）
- 支援新的 `createStatusBarItem` API（issue [#521](https://github.com/alefragnani/vscode-project-manager/issues/521)）

### 變更
- 移除 `watchFile` 的間隔（issue [#575](https://github.com/alefragnani/vscode-project-manager/issues/575)）

### 內部
- Duckly 成為贊助者

## [12.4.0] - 2021-09-08
### 新增
- 我的最愛檢視新增 `View as` 選項（issue [#534](https://github.com/alefragnani/vscode-project-manager/issues/534)）
- 我的最愛檢視新增 `Sort by` 選項（issue [#484](https://github.com/alefragnani/vscode-project-manager/issues/484)）
- 新增設定，可在專案名稱重複（同名）時顯示上層資料夾（issue [#306](https://github.com/alefragnani/vscode-project-manager/issues/306)）

### 變更
- 側邊欄的提示文字改用 Markdown（issue [#540](https://github.com/alefragnani/vscode-project-manager/issues/540)）
- 側邊欄遵循 `sortList` 設定（issue [#366](https://github.com/alefragnani/vscode-project-manager/issues/366)）

### 修正
- README 中的錯字（感謝 @kant [PR #532](https://github.com/alefragnani/vscode-project-manager/pull/532)）

## [12.3.0] - 2021-07-11
### 新增
- 以**標籤**整理你的專案（issue [#50](https://github.com/alefragnani/vscode-project-manager/issues/50)）
- 新增在遠端開發中使用此擴充功能的說明（issue [#477](https://github.com/alefragnani/vscode-project-manager/issues/477)）
- 為每種遠端專案使用專屬圖示（issue [#483](https://github.com/alefragnani/vscode-project-manager/issues/483)）

## [12.2.0] - 2021-06-10
### 新增
- 支援**虛擬工作區**（Virtual Workspaces）（issue [#500](https://github.com/alefragnani/vscode-project-manager/issues/500)）
- 支援**工作區信任**（Workspace Trust）（issue [#499](https://github.com/alefragnani/vscode-project-manager/issues/499)）
- 支援位於遠端的 `.code-workspace` 專案（issue [#486](https://github.com/alefragnani/vscode-project-manager/issues/486)）

### 修正
- 使用 None 或 Seti 圖示主題時，我的最愛專案缺少資料夾圖示（issue [#496](https://github.com/alefragnani/vscode-project-manager/issues/496)）

### 內部
- 資安警示：lodash（dependabot [PR #503](https://github.com/alefragnani/vscode-project-manager/pull/503)）
- 資安警示：ssri（dependabot [PR #495](https://github.com/alefragnani/vscode-project-manager/pull/495)）

## [12.1.0] - 2021-04-02
### 新增
- 一律將 GitHub Codespaces 專案儲存為「遠端專案」（issue [#479](https://github.com/alefragnani/vscode-project-manager/issues/479)）

### 變更
- 若是由設定同步（Settings Sync）安裝，則不顯示歡迎訊息（issue [#459](https://github.com/alefragnani/vscode-project-manager/issues/459)）

### 修正
- 找不到 Mercurial 專案（issue [#438](https://github.com/alefragnani/vscode-project-manager/issues/438)）

### 內部
- 更新 whats-new 子模組 API（issue [#456](https://github.com/alefragnani/vscode-project-manager/issues/456)）
- 在 Readme 中加入徽章（issue [#359](https://github.com/alefragnani/vscode-project-manager/issues/359)）
- 資安警示：y18n（dependabot [PR #482](https://github.com/alefragnani/vscode-project-manager/pull/482)）
- 資安警示：elliptic（dependabot [PR #472](https://github.com/alefragnani/vscode-project-manager/pull/472)）

## [12.0.1] - 2020-11-23
### 修正
- 與非唯一命令衝突（issue [#441](https://github.com/alefragnani/vscode-project-manager/issues/441)）

## [12.0.0] - 2020-11-19
### 新增
- 側邊欄新增 `Open Settings` 命令（issue [#434](https://github.com/alefragnani/vscode-project-manager/issues/434)）
- 在側邊欄每個面板上串接「專案數量」（issue [#267](https://github.com/alefragnani/vscode-project-manager/issues/267)）
- 側邊欄的右鍵選單新增 `Reveal in Finder/Explorer` 命令（issue [#322](https://github.com/alefragnani/vscode-project-manager/issues/322)）
- 新增設定，可決定自動偵測的專案是否要忽略在其他專案內找到的專案（issue [#189](https://github.com/alefragnani/vscode-project-manager/issues/189)）

### 內部
- 使用 `vscode-ext-help-and-feedback` 套件（issue [#432](https://github.com/alefragnani/vscode-project-manager/issues/432)）

## [11.3.1] - 2020-10-16
### 內部
- 更新 CodeStream 贊助詳細資料

## [11.3.0] - 2020-09-06
### 新增
- `projectLocation` 設定支援 `$home` 與 `~`（波浪號）符號（issue [#384](https://github.com/alefragnani/vscode-project-manager/issues/384)）
- 任何與路徑相關的設定皆支援 `~`（波浪號）符號（issue [#414](https://github.com/alefragnani/vscode-project-manager/issues/414)）
- `ignoredFolders` 設定支援 `glob` 模式（issue [#278](https://github.com/alefragnani/vscode-project-manager/issues/278)）
- 在地化：**cs**（感謝 @Amereyeu [PR #412](https://github.com/alefragnani/vscode-project-manager/pull/412)）

## [11.2.0] - 2020-08-19
### 新增
- 設定 UI 支援字串陣列（issue [#410](https://github.com/alefragnani/vscode-project-manager/issues/410)）
- 使用新的遠端 codicon（issue [#396](https://github.com/alefragnani/vscode-project-manager/issues/396)）

### 修正
- 未選取 ThemeIcon 時，圖示行為怪異（issue [#392](https://github.com/alefragnani/vscode-project-manager/issues/392)）
- maxDepthRecursion 被多餘的結尾路徑分隔符號干擾（issue [#404](https://github.com/alefragnani/vscode-project-manager/issues/404)）
- 在地化：**zh-cn**（感謝 @loniceras [PR #403](https://github.com/alefragnani/vscode-project-manager/pull/403)）
- What's New 中的錯字（感謝 @geauxtigers [PR #390](https://github.com/alefragnani/vscode-project-manager/pull/390)）

## [11.1.0] - 2020-06-19
### 變更
- 內部命令不可自訂（issue [#388](https://github.com/alefragnani/vscode-project-manager/issues/388)）

### 修正
- 狀態列在遠端無法運作（issue [#379](https://github.com/alefragnani/vscode-project-manager/issues/379)）
- `Command Palette` 對遠端專案顯示「Path does not exists」（issue [#380](https://github.com/alefragnani/vscode-project-manager/issues/380)）
- 歡迎檢視中的 `Open Folder` 命令在 Windows 上無法運作（issue [#387](https://github.com/alefragnani/vscode-project-manager/issues/387)）

### 內部
- 從 TSLint 遷移到 ESLint（issue [#360](https://github.com/alefragnani/vscode-project-manager/issues/360)）
- 使用 `vscode-ext-codicons` 套件（issue [#386](https://github.com/alefragnani/vscode-project-manager/issues/386)）

## [11.0.1] - 2020-05-19
### 修正
- SSH 遠端專案出現 Path does not exists（issue [#375](https://github.com/alefragnani/vscode-project-manager/issues/375)）
- 側邊欄右鍵選單中的 `Open` 命令無法運作（issue [#376](https://github.com/alefragnani/vscode-project-manager/issues/376)）
- Windows 上的 Docker 遠端專案出現 Path does not exists（issue [#377](https://github.com/alefragnani/vscode-project-manager/issues/377)）

## [11.0.0] - 2020-05-14
### 新增
- 支援從本機安裝開啟**遠端專案**（issue [#345](https://github.com/alefragnani/vscode-project-manager/issues/345)）
- **側邊欄**歡迎訊息（issue [#353](https://github.com/alefragnani/vscode-project-manager/issues/353)）

### 內部
- 移除對 `vscode` 模組的相依（issue [#369](https://github.com/alefragnani/vscode-project-manager/issues/369)）

## [10.12.0] - 2020-04-25
### 新增
- 新增設定，可決定 `Open in New Window` 命令在目前視窗為空時，是否改在目前視窗開啟（issue [#188](https://github.com/alefragnani/vscode-project-manager/issues/188)）

### 修正
- README 中的錯字（感謝 @1st [PR #348](https://github.com/alefragnani/vscode-project-manager/pull/348)）
- README 中的錯字（issue [#337](https://github.com/alefragnani/vscode-project-manager/issues/337)）

## 內部
- 支援 VS Code 套件拆分（issue [#361](https://github.com/alefragnani/vscode-project-manager/issues/361)）
- 支援擴充功能檢視的右鍵選單（issue [#327](https://github.com/alefragnani/vscode-project-manager/issues/327)）

## [10.11.0] - 2020-03-06
### 新增
- 加強**遠端開發**的支援（issues [#323](https://github.com/alefragnani/vscode-project-manager/issues/323) 與（感謝 @egamma [PR #331](https://github.com/alefragnani/vscode-project-manager/pull/331)）
- 命令選擇區新增 `Add Project to Workspace` 命令（issues [#283](https://github.com/alefragnani/vscode-project-manager/issues/283)

## 內部
- 支援 **ThemeIcon**（issues [#326](https://github.com/alefragnani/vscode-project-manager/issues/326)

## [10.10.0] - 2020-01-25
### 新增
- 支援**遠端開發**（issues [#284](https://github.com/alefragnani/vscode-project-manager/issues/284) 與 [#318](https://github.com/alefragnani/vscode-project-manager/issues/318)）

## [10.9.1] - 2019-11-21
### 變更
- 更新 CodeStream 廣告與網址

## [10.9.0] - 2019-11-18
### 新增
- 在地化支援：**zn-ch** 中文（感謝 @L1cardo [PR #300](https://github.com/alefragnani/vscode-project-manager/pull/300)）
- 側邊欄新增 `Open in New Window` 滑鼠懸停命令

## [10.8.0] - 2019-09-25
### 新增
- 支援將**工作區**儲存為專案

## [10.7.0] - 2019-08-25
### 新增
- 新的側邊欄圖示，配合新的 VS Code 圖示風格

## [10.6.0] - 2019-07-28
### 新增
- 支援僅有_自動偵測_專案的情境
- 在地化支援：**pt-br**
- 側邊欄新增 `Save Button` 按鈕

## [10.5.2] - 2019-05-28
### 修正
- 資安警示：tar

## [10.5.1] - 2019-04-05
### 修正
- 棄用 `projectManager.treeview.visible` 設定。（issue [#265](https://github.com/alefragnani/vscode-project-manager/issues/265)）

## [10.5.0] - 2019-04-02
### 新增
- 更快的啟動速度（側邊欄）（issue [#264](https://github.com/alefragnani/vscode-project-manager/issues/264)）

## [10.4.0] - 2019-03-14
### 新增
- 支援 `GlobalStoragePath`（感謝 @Chuxel [PR #250](https://github.com/alefragnani/vscode-project-manager/pull/250)）
- 在地化支援：**ru**（感謝 @Inter-Net-Pro [PR #222](https://github.com/alefragnani/vscode-project-manager/pull/222)）

### 修正
- 由於 CSS API 變更，What's New 頁面在 VS Code 1.32 中損壞

## [10.3.2] - 2019-02-01
### 修正
- _全新安裝_時的錯誤（issue [Bookmarks #178](https://github.com/alefragnani/vscode-bookmarks/issues/178)）

## [10.3.1] - 2019-01-31
### 修正
- 更新 CodeStream 標誌

## [10.3.0] - 2019-01-17
### 變更
- **側邊欄**現在預設顯示，即使沒有任何專案（issue [#227](https://github.com/alefragnani/vscode-project-manager/issues/227)）

### 修正
- **側邊欄**中的專案排序不應區分大小寫（issue [#243](https://github.com/alefragnani/vscode-project-manager/issues/243)）

## [10.2.0] - 2019-01-06
### 新增
- 支援**可攜式模式**（Portable Mode）（感謝 @hcwhan [PR 204](https://github.com/alefragnani/vscode-project-manager/pull/204) 與 @TanShun [PR 242](https://github.com/alefragnani/vscode-project-manager/pull/242)）
- 側邊欄新增 `Disable Project` 命令（感謝 @tekerson [PR 226](https://github.com/alefragnani/vscode-project-manager/pull/226)）

## [10.1.0] - 2018-12-17
### 新增
- 側邊欄新增 `Add to Favorites` 命令（感謝 @ckaczor [PR 229](https://github.com/alefragnani/vscode-project-manager/pull/229)）
- 側邊欄為每一種自動偵測的專案新增 `Refresh Project` 命令（感謝 @ckaczor [PR 231](https://github.com/alefragnani/vscode-project-manager/pull/231)）

## [10.0.0] - 2018-11-28
### 新增
- What's New

## [9.1.0] - 2018-11-06
### 新增
- CodeStream 成為贊助者

## [9.0.1] - 2018-09-25
### 修正
- 避免安裝在不支援的 VSCode 版本中（issue [#198](https://github.com/alefragnani/vscode-project-manager/issues/198)）

## [9.0.0] - 2018-09-19
### 新增
- 支援將_任何資料夾_作為專案（issue [#137](https://github.com/alefragnani/vscode-project-manager/issues/137)）
- 重新整理進度改用新的通知 UI（NotificationUI）（issue [#174](https://github.com/alefragnani/vscode-project-manager/issues/174)）
- 新增安裝擴充功能與修改其設定的說明（issue [#176](https://github.com/alefragnani/vscode-project-manager/issues/176)）

## [8.1.0] - 2018-09-15
### 新增
- Patreon 按鈕

## [8.0.0] - 2018-07-04
### 新增
- Project Manager 側邊欄（issue [#183](https://github.com/alefragnani/vscode-project-manager/issues/183)）
- TreeView 中新增命令 `Add to Workspace`（issue [#161](https://github.com/alefragnani/vscode-project-manager/issues/161)）
- 新的版本編號方式，依據 `semver`

### 修正
- 未開啟資料夾時，`Save Project` 命令會發生錯誤（issue [#191](https://github.com/alefragnani/vscode-project-manager/issues/191)）

## [0.25.2 - 7.2.2] - 2018-04-23
### 修正
- 支援 _OSS_ 版本，使用正確的_使用者資料夾_來儲存專案（感謝 @Kurolox [PR 179](https://github.com/alefragnani/vscode-project-manager/pull/179)）

## [0.25.0 - 7.2.0] - 2018-03-18
### 新增
- 支援 _Mercurial_ 專案，與 VSCode、Git 和 SVN 類似（感謝 @lavir [PR 168](https://github.com/alefragnani/vscode-project-manager/pull/168)）

### 變更
- _依名稱排序_選項現在不區分大小寫（感謝 @lavir [PR 169](https://github.com/alefragnani/vscode-project-manager/pull/169)）

### 修正
- Readme 錯字（感謝 @gavinr [PR 171](https://github.com/alefragnani/vscode-project-manager/pull/171)）

## [0.24.1 - 7.1.1] - 2018-03-06
### 修正
- `Refresh Projects` 與專案自動偵測無法正確運作（issues [#157](https://github.com/alefragnani/vscode-project-manager/issues/157)、[#164](https://github.com/alefragnani/vscode-project-manager/issues/164)、[#167](https://github.com/alefragnani/vscode-project-manager/issues/167) 與 [#172](https://github.com/alefragnani/vscode-project-manager/issues/172)）

## [0.24.0 - 7.1.0] - 2018-02-03
### 新增
- 新增設定，可透過完整路徑篩選專案（感謝 @R3oLoN [PR #166](https://github.com/alefragnani/vscode-project-manager/pull/166)）

## [0.23.1 - 7.0.1] - 2017-12-14
### 修正
- 路徑現在與作業系統無關（issue [#152](https://github.com/alefragnani/vscode-project-manager/issues/152)）
- 偵測任何 `git`、`vscode` 或 `svn` 設定的變更（感謝 @jcw- [PR #150](https://github.com/alefragnani/vscode-project-manager/pull/150)）

## [0.23.0 - 7.0.0] - 2017-11-02
### 新增
- 支援多根工作區（Multi-root）（issue [#149](https://github.com/alefragnani/vscode-project-manager/issues/149)）

## [0.22.0 - 6.0.0] - 2017-10-27
### 新增
- 新增設定，可顯示 Treeview（issue [#143](https://github.com/alefragnani/vscode-project-manager/issues/143)）
- 新增設定，可從清單中移除目前的專案（感謝 @rockingskier [PR #146](https://github.com/alefragnani/vscode-project-manager/pull/146)）

### 變更
- 將 `.haxelib` 加入 `git.ignoredFolders`（感謝 @Gamma11 [PR #140](https://github.com/alefragnani/vscode-project-manager/pull/140)）

## [0.21.1 - 5.0.1] - 2017-09-08
### 修正
- 在 Treeview 中開啟_我的最愛_專案時發生錯誤（issue [#141](https://github.com/alefragnani/vscode-project-manager/issues/141)）

## [0.21.0 - 5.0.0] - 2017-09-07
### 新增
- 專案 Treeview（issue [#103](https://github.com/alefragnani/vscode-project-manager/issues/103)）

## [0.20.0 - 4.5.0] - 2017-08-26
### 新增
- 狀態列現在也會顯示自動偵測的專案（VSCode、Git 和 SVN）（issue [#116](https://github.com/alefragnani/vscode-project-manager/issues/116)）
- 專案清單支援鍵盤導覽（類似 Vim）（issue [#136](https://github.com/alefragnani/vscode-project-manager/issues/136)）

## [0.19.0 - 4.4.0] - 2017-08-03
### 新增
- 支援 _git-worktree_ 專案（issue [#134](https://github.com/alefragnani/vscode-project-manager/issues/134)）

## [0.18.1 - 4.3.1] - 2017-06-18
### 修正
- 狀態列在 MacOS 中有時不顯示（issue [#127](https://github.com/alefragnani/vscode-project-manager/issues/127)）

## [0.18.0 - 4.3.0] - 2017-05-25
### 新增
- 新增設定，可決定點擊狀態列時是否在新視窗中開啟專案
- 新增設定，可在列出專案前停用無效路徑的檢查

### 變更
- 原始碼移至 `src` 資料夾

## [0.17.0 - 4.2.0] - 2017-05-20
### 新增
- 在 `List Projects...` 命令中支援依類型將專案分組。

### 變更
- 移除 `projectManager.openInNewWindow` 設定，因為已有 `List Projects to Open in New Window` 命令。

## [0.16.0 - 4.1.0] - 2017-05-04
### 新增
- VSCode、Git 和 SVN 專案也支援跨平台的路徑定義（issue [#88](https://github.com/alefragnani/vscode-project-manager/issues/88)）

## [0.15.1 - 4.1.1] - 2017-04-27
### 新增
- 當 `User Settings` 中的 `baseFolder` 設定沒有變更時，避免_不必要_的快取刪除（issue [#111](https://github.com/alefragnani/vscode-project-manager/issues/111)）

## [0.15.0 - 4.1.0] - 2017-04-18
### 新增
- 專案現在會偵測_設定變更_，以更新 Git/VSCode/SVN 快取（issue [#110](https://github.com/alefragnani/vscode-project-manager/issues/110)）

## [0.14.0 - 4.0.0] - 2017-04-12
### 新增
- 專案現在會偵測_外部變更_，以更新快取（感謝 @likun7981 [PR #107](https://github.com/alefragnani/vscode-project-manager/pull/107)）

## [0.13.5 - 3.8.5] - 2017-03-18
### 修正
- 專案重複列出（感謝 @mlewand [PR #101](https://github.com/alefragnani/vscode-project-manager/pull/101)）

## [0.13.4 - 3.8.4] - 2017-05-08
### 修正
- `Delete Project` 無法運作（感謝 @mlewand [PR #100](https://github.com/alefragnani/vscode-project-manager/pull/100)）

## [0.13.3 - 3.8.3] - 2017-05-05
### 修正
- 擴充功能載入延遲（感謝 @Gama11 [PR #97](https://github.com/alefragnani/vscode-project-manager/pull/97)）

## [0.13.2 - 3.8.2] - 2017-02-01
### 修正
- 新儲存的專案在 macOS 與 Linux 中，狀態列無法運作（issue [#84](https://github.com/alefragnani/vscode-project-manager/issues/84)）

## [0.13.1 - 3.8.1] - 2017-01-28
### 修正
- 無效的 `projects.json` 檔案造成錯誤（issue [#82](https://github.com/alefragnani/vscode-project-manager/issues/82)）
- 未儲存任何專案時，專案不顯示（感謝 @samuelsuarez [PR #81](https://github.com/alefragnani/vscode-project-manager/pull/81)）
- 訊息中的錯字（感謝 @Gama11 [PR #83](https://github.com/alefragnani/vscode-project-manager/pull/83)）

### 變更
- 啟用 **TSLint**

## [0.13.0 - 3.8.0] - 2017-01-15
### 新增
- 同時列出 _Git_ 和 _SVN_ 專案
- 新增設定以支援 Git 和 SVN 專案（`baseFolders`、`maxDepthRecursion` 與 `ignoredFolders`）
- 新增設定，可快取 VSCode、Git 和 SVN 專案 

### 新增
- 新命令 `Refresh Projects`

### 變更
- 重構 `projects.json` 檔案，以支援未來的功能 

## [0.12.2 - 3.7.2] - 2016-11-06
### 修正
- 以新名稱儲存專案時，會讓狀態列重複顯示（issue [#69](https://github.com/alefragnani/vscode-project-manager/issues/69)）

## [0.12.1 - 3.7.1] - 2016-11-05
### 修正
- 篩選專案時，`path` 不應列入考量（issue [#67](https://github.com/alefragnani/vscode-project-manager/issues/67)）

## [0.12.0 - 3.7.0] - 2016-10-26
### 新增
- 在狀態列中顯示_專案名稱_（感謝 @BonDoQ）
- 新增設定，可在狀態列中顯示_專案名稱_ 
- 改善尚未儲存任何專案時的訊息（issue [#57](https://github.com/alefragnani/vscode-project-manager/issues/57)）

## [0.11.0 - 3.6.0] - 2016-10-19
### 新增
- 同時列出 _VS Code_ 專案
- 新增設定以支援 VS Code 專案（`baseFolders`、`maxDepthRecursion` 與 `ignoredFolders`）

## [0.10.0 - 3.5.0] - 2016-09-20
### 新增
- 新命令 `List Projects to Open in New Window`
- `sortList` 設定的註解現在會顯示可用的選項（issue [#52](https://github.com/alefragnani/vscode-project-manager/issues/52)）

### 變更
- 重新命名命令 `List Projects to Open`

## [0.9.2 - 3.4.2] - 2016-09-09
### 修正
- 專案名稱建議無法運作的暫時性修正（_穩定版_也包含）（issue [#51](https://github.com/alefragnani/vscode-project-manager/issues/51)）

## [0.9.1 - 3.4.1] - 2016-09-04
### 修正
- 儲存沒有名稱的專案（_Insider_ 版本）（issue [#42](https://github.com/alefragnani/vscode-project-manager/issues/42)）

## [0.9.0 - 3.4.0] - 2016-09-01
### 新增
- 新增另一個**排序**選項（`Recent`）

## [0.8.3 - 3.3.1] - 2016-08-03
### 修正
- Linux 支援損壞（issue [#39](https://github.com/alefragnani/vscode-project-manager/issues/39)）

## [0.8.2 - 3.3.0] - 2016-07-29
### 新增
- 擴充功能現在支援 **VSCode Insiders** 版本，並擁有自己的 `projects.json` 檔案。若想讓**穩定版**與 **Insider** 版本共用專案清單，請使用**新設定**。 
- 新增設定，可指定 `projects.json` 檔案所在的替代位置

### 修正
- 在_僅_安裝 **VSCode Insider** 版本的機器上無法運作（issue [#22](https://github.com/alefragnani/vscode-project-manager/issues/22)）

## [0.8.1 - 3.2.1] - 2016-07-27
### 修正
- 無法使用依_儲存時間_（Saved）排序（issue [#37](https://github.com/alefragnani/vscode-project-manager/issues/37)）

## [0.8.0 - 3.2.0] - 2016-07-14
### 新增
- 專案路徑支援 `$home` 變數（感謝 @efidiles）

## [0.7.1 - 3.1.1] - 2016-05-30
### 修正
- 未開啟資料夾時，List Projects 命令失敗（issue [#32](https://github.com/alefragnani/vscode-project-manager/issues/32)）

## [0.7.0 - 3.1.0] - 2016-05-17
### 新增
- 不在專案清單中顯示目前的資料夾／專案（issue [#28](https://github.com/alefragnani/vscode-project-manager/issues/28)）
- 在專案清單中標示_無效路徑_（issue [#30](https://github.com/alefragnani/vscode-project-manager/issues/30)）

## [0.6.0 - 3.0.0] - 2016-04-26
### 新增
- 使用新的原生 API 開啟資料夾 _（需要 VSCode 1.1.0 或更新版本）_

### 變更
- 移除 `projectManager.codePath` 與 `projectManager.useAlternativeMacOSXPath`，因為已不再需要。

### 修正
- 在專案清單中點擊或按下 Enter 無效（Linux / Mac）（issue [#27](https://github.com/alefragnani/vscode-project-manager/issues/27)）

## [0.5.5 - 2.0.5] - 2016-04-03
### 修正
- 在 Linux 中儲存專案無法運作（issue [#16](https://github.com/alefragnani/vscode-project-manager/issues/16)
- 更新 Readme，更清楚說明如何安裝與設定擴充功能

## [0.5.4 - 2.0.4] - 2016-03-14
### 修正
- 更新 Code 2 月版本後，Mac OS X 的操作說明（issue [#14](https://github.com/alefragnani/vscode-project-manager/issues/14) - 感謝 @satokaz、@janmarek 與 @csholmq）

## [0.5.3 - 2.0.3] - 2016-03-09
### 修正
- 儲存專案時使用了完整路徑（issue [#12](https://github.com/alefragnani/vscode-project-manager/issues/12)）

## [0.5.2 - 2.0.2] - 2016-02-24
### 修正
- 網路資料夾（UNC 表示法）無法切換專案（issue [#10](https://github.com/alefragnani/vscode-project-manager/issues/10)）

## [0.5.1 - 2.0.1] - 2016-02-11
### 修正
- Mac OS X 中專案切換無法運作的暫時性修正（issue [#7](https://github.com/alefragnani/vscode-project-manager/issues/7) - 感謝 @satokaz）

## [0.5.0 - 2.0.0] - 2016-02-10
### 新增
- `projects.json` 檔案現在會經過格式化（感謝 @cuth [PR #6](https://github.com/alefragnani/vscode-project-manager/pull/6)）

### 修正
- `List Projects` 的按鍵繫結無法正常運作（issue [#8](https://github.com/alefragnani/vscode-project-manager/issues/8)） 

## [0.4.0 - 1.3.0] - 2016-01-20
### 新增
- 新命令 `Edit Projects`

## [0.3.1 - 1.2.1] - 2016-01-18
### 修正
- 專案切換無法正常運作（issue [#5](https://github.com/alefragnani/vscode-project-manager/issues/5)）

## [0.3.0 - 1.2.0] - 2016-01-18
### 新增
- 新增設定，可指定 Code 路徑
- 新增設定，可決定選擇專案時是否開啟新視窗，或僅切換目前視窗

### 修正
- 專案路徑中的空格（issue [#3](https://github.com/alefragnani/vscode-project-manager/issues/3)）

## [0.2.0 - 1.1.0] - 2016-01-16
### 新增
* 更新授權條款

## [0.1.1 - 1.0.0] - 2016-01--6
* 首次發佈