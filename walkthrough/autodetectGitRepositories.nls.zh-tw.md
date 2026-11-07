## 自動偵測 Git 存放庫

只要使用專案所在的資料夾定義 `baseFolders` 設定，擴充功能就會顯示其中所有的 Git 專案。如果需要忽略任何子資料夾，可以使用 `glob` 模式來達成

```json
    "projectManager.git.baseFolders": [
        "c:\\Projects\\code",
        "d:\\MoreProjects\\code-testing",
        "$home\\personal-coding"
    ]
```

```json
    "projectManager.git.ignoredFolders": [
        "node_modules",
        "out",
        "typings",
        "test"
        "fork*"
    ],
```
