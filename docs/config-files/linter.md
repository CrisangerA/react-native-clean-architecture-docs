---
sidebar_position: 3
---
# 1.3 Linter y formateo
Mantener sintaxis y estandares de codificacion

Generalmente se utilizan formateadores de codigo y linters para prevenir errores
:::info[My tip]
Se recomienda utilizar algun tipo de linter y/o formateador de codigo. Esto es asumiendo que utilizas eslint y prettier
:::
- ```js title=".eslintrc.js"
  module.exports = {
    root: true,
    extends: '@react-native',
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
