---
sidebar_position: 1
---

# 1.1 Importación con alias
Instalar dependencias necesarias:
```bash
bun add -D babel-plugin-module-resolver metro-react-native-babel-preset
```

Si aun no tienes esta configuración previa puedes leer la documentación oficial de react native en donde se indica paso a paso como agregar los alias. [Documentación](https://reactnative.dev/docs/typescript#using-custom-path-aliases-with-typescript)

- ```json title="tsconfig.json"
  {
    "compilerOptions": {
      "paths": {
        "@assets/*": ["./src/assets/*"],
        "@components/*": ["./src/components/*"],
        "@config/*": ["./src/config/*"],
        "@modules/*": ["./src/modules/*"],
        "@navigation/*": ["./src/navigation/*"],
        "@screens/*": ["./src/screens/*"],
        "@shared/*": ["./src/modules/shared/*"],
        "@utils/*": ["./src/modules/shared/domain/utils/*"],
      }
    },
    "extends": "@react-native/typescript-config/tsconfig.json",
    "exclude": ["node_modules", "**/Pods/**"]
  }
  ```

- ```js title="babel.config.js"
  module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@config': './src/config',
            '@modules': './src/modules',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@shared': ['./src/modules/shared'],
            '@utils': ['./src/modules/shared/domain/utils'],
          },
        },
      ],
    ],
  };
  ```
