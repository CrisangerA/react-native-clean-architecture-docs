# Throubleshot


error: node_modules/react-native/Libraries/Debugging/DebuggingOverlayRegistry.js: /Users/alejandro/Documents/Projects/TOOLS/apps/ReactNativeCleanArchTemplate/node_modules/react-native/Libraries/Debugging/DebuggingOverlayRegistry.js: Class private methods are not enabled. Please add `@babel/plugin-transform-private-methods` to your configuration.

```bash
bun add -D @babel/plugin-transform-private-methods
```

```js title="babel.config.js"
module.exports = {
  ...
  plugins: [
    ['@babel/plugin-transform-private-methods', { loose: true }], // Copy this line
  ],
  ...
};
```