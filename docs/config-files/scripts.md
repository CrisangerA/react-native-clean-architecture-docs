---
sidebar_position: 2
---
# 1.2 Scripts
Scripts que te van a ayudar a agilizar el escribir codigo

Scripts generales que seran de uso en todo el ciclo de vida del software
- ```json title="package.json"
  "clean-android": "rm -rf android/build android/app/build && cd android && ./gradlew clean && cd ..",
  "clean-ios": "rm -rf ios/build ios/Pods ios/Podfile.lock",
  "clean-watch": "watchman watch-del-all && watchman shutdown-server",
  ```
