---
sidebar_position: 3
---
# 1.2 Linter y formateo
Mantener sintaxis y estandares de codificacion

Generalmente se utilizan formateadores de codigo y linters para prevenir errores
:::info[My tip]
Se recomienda utilizar algun tipo de linter y/o formateador de codigo. Esto es asumiendo que utilizas eslint y prettier
:::
- ```js title=".eslintrc.js"
  module.exports = {
    root: true,
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
  };
  ```
- ```bash title=".eslintignore"
  node_modules
  __tests__
  jest-setup.js
  ```
- ```js title=".prettierrc.js"
  module.exports = {
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    tabWidth: 2,
  };
  ```
- ```json title="settings.json"
  {
    "editor.rulers": [80],
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true,
    "editor.formatOnType": true,
    "breadcrumbs.enabled": false,
    "editor.stickyScroll.enabled": true,
    "editor.guides.bracketPairs": true,
    "editor.bracketPairColorization.enabled": true,
    "editor.linkedEditing": true,
    "editor.cursorBlinking": "expand",
    "editor.cursorStyle": "line",
    "editor.cursorSmoothCaretAnimation": "on",
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.organizeImports": "always"
    },
    "json.schemaDownload.enable": true
  }
  ```
