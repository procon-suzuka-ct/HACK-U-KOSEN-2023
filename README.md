# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


## ブランチのルール
mainブランチはリリース用のブランチとします、その下につくるdevブランチを開発用ブランチとして、そこから更に各々のブランチを作成してください。

ブランチの命名規則は`dev/ユーザー名`としてください。例:`dev/ukai`

## プルリクのルール
プルリクはdevブランチに対して行ってください。コンフリクトが起こった場合はdiscordで連絡してください。ukaiがなんとかします。

## コミットメッセージのルール
コミットメッセージは英語でお願いします。また、コミットメッセージは以下のようにしてください。

```
[コミットの種類の接頭辞]: コミットの内容
```

| 種類             | 接頭辞 |
|----------------| --- |
| 新規機能           | feat: |
| 機能アップデート       | update: |
| バグ修正           | fix: |
| ドキュメントの変更      | docs: |
| リファクタリング       | refactor: |
| ファイル削除・パッケージ削除 | remove: |
| ファイル追加・パッケージ追加 |add:|