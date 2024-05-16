---
sidebar_position: 1
---

# Getting Started

Antes de comenzar a utilizar todos los componentes y utilidades de la plantilla es necesario que realize los pasos necesarios aqui descritos

:::info[My tip]

Configuración necesaria para utilizar los componentes de la plantilla

:::

## 1. Archivos de configuración

### 1.1 Importación con alias
Instalar dependencia necesaria:
```bash
bun add -D babel-plugin-module-resolver metro-react-native-babel-preset
```
Si aun no tienes esta configuración previa puedes leer la documentación oficial de react native en donde se indica paso a paso como agregar los alias. [Documentación](https://reactnative.dev/docs/typescript#using-custom-path-aliases-with-typescript)


- ```json title="tsconfig.json"
  "@components/*": ["./src/components/*"],
  "@modules/*": ["./src/modules/*"],
  "@config/*": ["./src/config/*"],
  "@navigation/*": ["./src/navigation/*"],
  "@screens/*": ["./src/screens/*"],
  "@assets/*": ["./src/assets/*"],
  "@utils/*": ["./src/modules/shared/domain/utils/*"]
  ```

- ```json title="babel.config.js"
  "@components": "./src/components",
  "@modules": "./src/modules",
  "@config": "./src/config",
  "@navigation": "./src/navigation",
  "@screens": "./src/screens",
  "@assets": "./src/assets",
  "@utils": ["./src/modules/shared/domain/utils"],
  ```

### 1.2 Scripts
Scripts generales que seran de uso en todo el ciclo de vida del software
- ```json title="package.json"
  "clean-android": "rm -rf android/build android/app/build && cd android && ./gradlew clean && cd ..",
  "clean-ios": "rm -rf ios/build ios/Pods ios/Podfile.lock",
  "clean-watch": "watchman watch-del-all && watchman shutdown-server",
  ```

### 1.3 Linter y formateo
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

---

## 2. Archivos necesarios

Para hacer uso de algunas funcionalidades y componentes son necesarias algunas utilidades basicas.

### 2.1 Configuración
Te recomendamos descargar todos los archivos de esta carpeta
- ./src/config
  - [constants.ts](https://reactnative.dev)
  - [api.routes.ts](https://reactnative.dev)
  - [local.store.ts](https://reactnative.dev)

### 2.2 Estilos
Te recomendamos descargar todos los archivos de esta carpeta
- ./src/theme
  - [index.ts](https://reactnative.dev/docs/speeding-ci-builds)
  - [common.ts](https://reactnative.dev)
  - [colors.ts](https://reactnative.dev)
  - [fonts.ts](https://reactnative.dev)
  - [responsive.ts](https://reactnative.dev)

### 2.3 Componentes
Puede descargar la carpeta completa o archivo por archivo segun le convenga. [Descargar carpeta completa](https://reactnative.dev/docs/speeding-ci-builds)
- ./src/components
  - [index.ts](https://reactnative.dev/docs/speeding-ci-builds)
  - ./src/components/core
    - [index.ts](https://reactnative.dev)
    - [responsive.ts](https://reactnative.dev)

### 2.4 Modulos
Puede descargar la carpeta completa o archivo por archivo segun le convenga. [Descargar carpeta completa](https://reactnative.dev/docs/speeding-ci-builds)
- ./src/modules/share
  - ./src/modules/share/application
    - [index.ts](https://reactnative.dev/docs/speeding-ci-builds)
  - ./src/modules/share/domain
    - [index.ts](https://reactnative.dev)
  - ./src/modules/share/infrastructure
    - [responsive.ts](https://reactnative.dev)

---

## 3. Empezar a desarrollar
Con los archivos agregados anteriormente podremos continuar haciendo uso de todos los componentes sin temor a que algo no funcione

### Dependencias necesarias
```bash
  bun add -D babel-plugin-module-resolver metro-react-native-babel-preset
```

:::info[My tip]
Para agilizar el tiempo de desarrollo se recomienda utilizar la libreria react-native-clean-arch para hacer uso de los siguientes scripts
:::
### Scripts
Para agilizar su desarrollo le recomendamos utilizar el CLI para la creacion de modulos y pantallas