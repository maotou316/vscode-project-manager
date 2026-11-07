> **這是修改版分支（fork）**，源自 Alessandro Fragnani 的 [Project Manager](https://github.com/alefragnani/vscode-project-manager)，由 maotou316 於 2026-11-07 修改。新增在「我的最愛」檢視中以拖放方式指派標籤的功能。這不是官方發行版，若此分支有任何問題，請[在此](https://github.com/maotou316/vscode-project-manager/issues)回報。
> 
> 本分支與原版共用命令與設定，因此請勿同時啟用兩者。若要保留您的專案，請從原版擴充功能的儲存資料夾複製 `projects.json`，或將 `projectManager.projectsLocation` 指向該資料夾。

<p align="center">
  <br />
  <a title="深入瞭解 Project Manager" href="https://github.com/alefragnani/vscode-project-manager"><img src="https://raw.githubusercontent.com/alefragnani/vscode-project-manager/master/images/vscode-project-manager-logo-readme.png" alt="Project Manager Logo" width="70%" /></a>
</p>

繁體中文 | [简体中文](README.zh-CN.md) | [English](https://github.com/alefragnani/vscode-project-manager#readme)

# Project Manager 13.1 新功能

* 改進**標籤**支援
* 改進**自動偵測專案**支援
* 再度完全開源
* 新增**設定檔**支援
* 在側邊欄醒目標示目前專案
* 已發佈至 **Open VSX**
* 新增**快速入門／逐步導覽**
* 使用**標籤**整理您的專案
* 新增**虛擬工作區**支援
* 新增**工作區信任**支援

# 贊助

**Project Manager（專案管理員）** 是為 **Visual Studio Code** 所開發的擴充功能。若您覺得好用，歡迎贊助。

<table align="center" width="60%" border="0">
  <tr>
    <td>
      <a title="Paypal" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=EP57F3B6FXKTU&lc=US&item_name=Alessandro%20Fragnani&item_number=vscode%20extensions&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted"><img src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"/></a>
    </td>
    <td>
      <a title="GitHub Sponsors" href="https://github.com/sponsors/alefragnani"><img src="https://raw.githubusercontent.com/alefragnani/oss-resources/master/images/button-become-a-sponsor-rounded-small.png"/></a>
    </td>
    <td>
      <a title="Patreon" href="https://www.patreon.com/alefragnani"><img src="https://raw.githubusercontent.com/alefragnani/oss-resources/master/images/button-become-a-patron-rounded-small.png"/></a>
    </td>
  </tr>
</table>

# Project Manager

它能讓您輕鬆存取**專案**，無論專案位於何處。_再也不會錯過重要的專案_。

您可以自行定義**專案**（也稱為**我的最愛**），或選擇自動偵測 **Git**、**Mercurial** 或 **SVN** 存放庫、**VSCode** 資料夾，或**任何**其他資料夾。

以下是 **Project Manager** 提供的部分功能：

* 將任何資料夾或工作區儲存為**專案**
* 自動偵測 **Git**、**Mercurial** 或 **SVN** 存放庫
* 使用**標籤**整理專案
* 在目前視窗或新視窗開啟專案
* 辨識_已刪除／已重新命名_的專案
* 以**狀態列**顯示目前專案
* 專屬的**側邊欄**

# 功能

## 可用命令

* `Project Manager: Save Project` 將目前的資料夾／工作區儲存為新專案
* `Project Manager: Edit Project` 手動編輯您的專案（`projects.json`）
* `Project Manager: List Projects to Open` 列出所有已儲存／已偵測的專案，並選擇一個
* `Project Manager: List Projects to Open in New Window` 列出所有已儲存／已偵測的專案，並選擇一個在新視窗開啟
* `Project Manager: Filter Projects by Tag` 依所選標籤篩選我的最愛專案

## 管理您的專案

### 儲存專案

您可以隨時將目前的資料夾／工作區儲存為**專案**，只需輸入名稱即可。

![Save](docs/images/project-manager-save.png)

> 它會_自動_建議名稱給您 :)

### 編輯專案

為了更方便自訂專案清單，您可以直接在 **Code** 內編輯 `projects.json` 檔案。只要執行 `Project Manager: Edit Projects`，就會開啟 `projects.json` 檔案。就是這麼簡單：

```json
[
    {
        "name": "Pascal MI",
        "rootPath": "c:\\PascalProjects\\pascal-menu-insight",
        "tags": [],
        "enabled": true,
        "profile": "Delphi"
    },
    {
        "name": "Bookmarks",
        "rootPath": "$home\\Documents\\GitHub\\vscode-bookmarks",
        "tags": [
            "Personal",
            "VS Code"
        ],
        "enabled": true,
        "profile": "VSCode"
    },
    {
        "name": "Numbered Bookmarks",
        "rootPath": "~\\Documents\\GitHub\\vscode-numbered-bookmarks",
        "tags": [
            "Personal",
            "VS Code"
        ],
        "enabled": false,
        "profile": "VSCode"
    }
]
```

> 定義任何路徑時，您都可以使用 `~` 或 `$home`，它會被取代為您的家目錄（HOME）資料夾。

> 請確保 JSON 檔案格式正確。否則 **Project Manager** 將無法開啟，並會出現如下的錯誤訊息。此時，請使用「開啟檔案」（`Open File`）按鈕來修正。

![Corrupted](docs/images/project-manager-edit-corrupted-projectsJson.png)

## 存取

### 列出要開啟的專案

顯示您的專案，並選擇一個開啟。

### 列出要在新視窗開啟的專案

與**列出專案**相同，但一律在**新視窗**開啟。

## 偏好鍵盤操作的使用者

如果您偏好使用鍵盤，並且習慣_類似 Vim_ 的鍵盤導覽，可以用自己的快速鍵在專案清單中移動。

只要使用 `when` 子句 `"inProjectManagerList"`，例如：

```json
    {
        "key": "cmd+j",
        "command": "workbench.action.quickOpenSelectNext",
        "when": "inProjectManagerList && isMac"
    },
    {
        "key": "cmd+shift+j",
        "command": "workbench.action.quickOpenSelectPrevious",
        "when": "inProjectManagerList && isMac"
    },
    {
        "key": "ctrl+j",
        "command": "workbench.action.quickOpenSelectNext",
        "when": "inProjectManagerList && (isWindows || isLinux)"
    },
    {
        "key": "ctrl+shift+j",
        "command": "workbench.action.quickOpenSelectPrevious",
        "when": "inProjectManagerList && (isWindows || isLinux)"
    }
```

## 搭配遠端使用

本擴充功能支援 [Remote Development](https://code.visualstudio.com/docs/remote/remote-overview) 情境，您可以依需求選擇使用方式。

### 我會連線到遠端，但大部分工作在本機

這是_一般_情境，因此您不需要做任何特別設定，擴充功能即可使用，開箱即用。

在本機安裝時，您可以將任何 Container、SSH、WSL 或 Codespaces 專案儲存為我的最愛。每一種都有專屬圖示以便辨識，選取後 VS Code 會自動開啟該遠端。

_就是這麼順利_

### 但如果我大部分工作都在遠端

如果您平常連線到遠端（例如 SSH/WSL），並希望將我的最愛專案儲存在該遠端，或能自動偵測位於該遠端的存放庫，就必須在遠端啟用／安裝此擴充功能。

只要將以下內容加入您的 `User Settings`（使用者設定）即可。

```json
    "remote.extensionKind": {
        "alefragnani.project-manager": [
            "workspace"
        ]
    },
```

> 更多詳細資訊請參閱 [VS Code 說明文件](https://code.visualstudio.com/docs/remote/containers#_advanced-forcing-an-extension-to-run-locally-or-remotely)

## 可用設定

您可以選擇專案的排序方式

* `Saved`：依儲存專案的順序
* `Name`：依您為專案輸入的名稱
* `Path`：依專案的完整路徑
* `Recent`：依最近使用的專案

```json
    "projectManager.sortList": "Name"
```

![List](docs/images/project-manager-list-sort-by-name.png)

* 選擇專案清單是否依_類型_分組（**我的最愛**、**Git**、**Mercurial**、**SVN** 與 **VS Code**）。

```json
    "projectManager.groupList": true
```

* 是否從清單中移除目前專案？（預設為 `false`）

```json
    "projectManager.removeCurrentProjectFromList": true
```

* 是否在專案清單中辨識_無效路徑_？（預設為 `true`）

```json 
    "projectManager.checkInvalidPathsBeforeListing": false
```

* 是否支援 `baseFolders` 中的符號連結？（預設為 `false`）

```json 
    "projectManager.supportSymlinksOnBaseFolders": true
```

* 偵測到同名專案時，是否顯示上層資料夾資訊？（預設為 `false`）

```json 
    "projectManager.showParentFolderInfoOnDuplicates": true
```

* 透過完整路徑篩選專案（預設為 `false`）

```json 
    "projectManager.filterOnFullPath": true
```

* 自訂專案檔案（`projects.json`）位置

如果您打算在 **Stable** 與 **Insider** 安裝之間_共用_專案，或將設定儲存在不同位置（雲端服務），可以為 `projects.json` 檔案指定_替代_位置（資料夾路徑）。

```json
    "projectManager.projectsLocation": "C:\\Users\\myUser\\AppData\\Roaming\\Code\\User"
```

> 定義資料夾路徑時，您可以使用 `~` 或 `$home`，它會被取代為您的家目錄（HOME）資料夾。

* 自動偵測專案（**Git** ![git](docs/images/ico_git_branch.png), **Mercurial** ![git](docs/images/ico_git_branch.png), **SVN** ![svn](docs/images/ico_svn.png) and **VSCode** ![vscode](docs/images/ico_file_code.png))

```json
    "projectManager.git.baseFolders": [
        "c:\\Projects\\code",
        "d:\\MoreProjects\\code-*",
        "$home\\personal-coding"
    ]
```
> 指定要搜尋專案的資料夾或 [glob 模式](https://code.visualstudio.com/docs/editor/glob-patterns)

```json
    "projectManager.git.ignoredFolders": [
        "node_modules", 
        "out", 
        "typings", 
        "test",
        "fork*"
    ],
```
> 指定搜尋專案時要忽略的資料夾或 [glob 模式](https://code.visualstudio.com/docs/editor/glob-patterns)

```json
    "projectManager.git.maxDepthRecursion": 4
```
> 定義搜尋專案的遞迴深度

* 將基底資料夾本身排除於自動偵測的專案清單之外（預設為 `false`）

```json
    "projectManager.any.excludeBaseFoldersFromResults": true
```
> 啟用後，`projectManager.any.baseFolders` 中設定的 **Any** 基底資料夾本身不會被視為專案，只會回傳其符合條件的子資料夾。

* 是否忽略位於其他專案內的專案？（預設為 `false`）

```json 
    "projectManager.ignoreProjectsWithinProjects": true
```

* 快取自動偵測到的專案（預設為 `true`）

```json 
    "projectManager.cacheProjectsBetweenSessions": false
```

* 在狀態列顯示專案名稱（預設為 `true`）

```json 
    "projectManager.showProjectNameInStatusBar": true
```

* 點擊狀態列時在_新視窗_開啟專案（預設為 `false`）

```json 
    "projectManager.openInNewWindowWhenClickingInStatusBar": true
```

* 指定當目前視窗為空時，`New Window` 命令是否改在目前視窗開啟專案（預設為 `always`）

  * `always`：每當呼叫「在新視窗開啟」命令時，若目前視窗為空，就在目前視窗開啟
  * `onlyUsingCommandPalette`：僅在使用命令選擇區時，才在目前視窗開啟
  * `onlyUsingSideBar`：僅在使用側邊欄時，才在目前視窗開啟
  * `never`：維持現行行為，「在新視窗開啟」命令一律在新視窗開啟

```json 
    "projectManager.openInCurrentWindowIfEmpty": "always"
```

* 指定可用來整理專案的標籤清單_（預設為 `Personal` 與 `Work`）_

```json
    "projectManager.tags": [
        "Personal", 
        "Work",
        "VS Code",
        "Learning"
    ]
```

* 控制「我的最愛」檢視中標籤群組的展開或收合方式，以及是否記住其狀態（預設為 `startExpanded`）

  * `alwaysExpanded`：標籤群組一律展開
  * `alwaysCollapsed`：標籤群組一律收合
  * `startExpanded`：標籤群組初始為展開，並記住您上次的展開／收合狀態
  * `startCollapsed`：標籤群組初始為收合，並記住您上次的展開／收合狀態

```json
    "projectManager.tags.collapseItems": "startExpanded"
```

* 顯示專案目前的 Git 分支名稱（預設為 `"never"`）

```json
    "projectManager.git.showBranchName": "never"
```

可用的值：
- `"never"`：一律不顯示 Git 分支名稱
- `"onlyInSideBar"`：僅在側邊欄顯示 Git 分支名稱
- `"onlyInCommandPalette"`：僅在命令選擇區顯示 Git 分支名稱
- `"always"`：在所有位置顯示 Git 分支名稱


## 可用顏色

* 選擇在側邊欄醒目標示目前專案的前景色
```json
    "workbench.colorCustomizations": {
      "projectManager.sideBar.currentProjectHighlightForeground": "#e13015"  
    }
```

## 側邊欄

**Project Manager** 擴充功能有專屬的**側邊欄**，提供多種命令以提升您的工作效率。

![Side Bar](docs/images/vscode-project-manager-side-bar.png)

### 專案標籤：檢視與篩選

自 v12.3 起，您可以使用**標籤**整理專案。

您可以定義自訂標籤（透過 `projectManager.tags` 設定）、為每個專案指定多個**標籤**，並依**標籤**篩選專案。

在**我的最愛**檢視中，以標籤方式檢視時，您也可以將專案拖放到某個標籤上，為該專案加上此標籤，其原有的其他標籤會保留。

![Side Bar](docs/images/vscode-project-manager-side-bar-tags.gif)

## 擴充功能 API

如果您是擴充功能開發者，並想與 **Project Manager** 擴充功能互動，可以使用其公開 API。

首先，必須在 `package.json` 檔案中加入 `extensionDependencies` 欄位：

```json
  "extensionDependencies": [
    "alefragnani.project-manager"
  ],
```

接著，在原始碼中以 `vscode.extensions.getExtension("alefragnani.project-manager")` 取得擴充功能實例，即可使用該擴充功能公開的方法。

```ts
import { ProjectManagerPublicApi } from './api/projectManager/api';

async function useProjectManagerApi() {
    const projectManagerApi = <ProjectManagerPublicApi>vscode.extensions.getExtension('alefragnani.project-manager')?.exports;

    await projectManagerApi.saveProject("My Project", "/path/to/project", ["work"], "Default");
}
```

其介面合約定義於 [/api/api.d.ts](/api/api.d.ts)。

> 更多詳細資訊請參閱 [VS Code Extension API 參考文件](https://code.visualstudio.com/api/references/vscode-api#extensions)

## 安裝與設定

請依照官方文件進行：

- [安裝擴充功能](https://code.visualstudio.com/docs/editor/extension-gallery)
- [修改其設定](https://code.visualstudio.com/docs/getstarted/settings)

# 授權

[GPL-3.0 with VS Code Extension Host API Exception](LICENSE.md) &copy; Alessandro Fragnani
