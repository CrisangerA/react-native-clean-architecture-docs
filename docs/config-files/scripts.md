---
sidebar_position: 2
---
# 1.2 Scripts
Agrega los siguientes scripts a tu package.json

- Limpiar node
- Limpiar ios
- Limpiar android
- Limpiar watchman

```json title="package.json"
{
  "scripts": {
    "clean-node": "rm -rf node_modules bun.lockb && bun install",
    "clean-ios": "rm -rf ios/build ios/Pods ios/Podfile.lock",
    "clean-android": "rm -rf android/build android/app/build && cd android && ./gradlew clean && cd ..",
    "clean-watch": "watchman watch-del-all && watchman shutdown-server"
  }
}
```