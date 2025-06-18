---
sidebar_position: 1
---

# Introduction

**👾 Plantilla simple y minimalista que incluye sistema de estilos, sistema de diseño y componentes personalizables. Desarrollada con una estructura de arquitectura modular centrada en la mantenibilidad y escalabilidad.**

Este template te permite inicializar una nueva aplicacion de react native y te ahorra mucho tiempo en la configuracion inicial de la aplicacion con cosas que todas las aplicaciones suelen necesitar como son: componentes, estilos, formularios, validaciones, etc.

*Tambien incluye modulos base para usuario, autenticacion y navegacion para que sirvan como ejemplo de como trabajar con esta plantilla.*

![](../static/videos/rnca_preview_template_app.mov)

La plantilla incluye las siguientes dependencias:

```json
...
  "dependencies": {
    "@hookform/resolvers": "5.1.1",
    "@react-native-firebase/app": "22.2.0",
    "@react-native-firebase/auth": "22.2.0",
    "@react-native-firebase/firestore": "22.2.0",
    "@react-native-google-signin/google-signin": "14.0.0",
    "@react-native-vector-icons/material-design-icons": "12.0.0",
    "@react-navigation/bottom-tabs": "7.3.13",
    "@react-navigation/native": "7.1.9",
    "@react-navigation/native-stack": "7.3.13",
    "@tanstack/react-query": "5.77.2",
    "jail-monkey": "2.8.3",
    "react": "19.0.0",
    "react-hook-form": "7.57.0",
    "react-native": "0.78.0",
    "react-native-date-picker": "5.0.13",
    "react-native-gesture-handler": "2.25.0",
    "react-native-mmkv": "3.2.0",
    "react-native-reanimated": "3.18.0",
    "react-native-safe-area-context": "5.4.0",
    "react-native-screens": "4.10.0",
    "yup": "1.6.1",
    "zustand": "5.0.4"
  }
  ...
```
Puedes encontrar mas información sobre las dependencias en el [catalogo de librerias](./libs.md)

## Objetivo
El objetivo principal de esta guía es recopilar un conjunto de buenas prácticas para desarrollar aplicaciones móviles con React Native utilizando el CLI (sin Expo), siguiendo la metodología de arquitectura limpia (DDD) y los principios SOLID.

Esta guía quiere cubrir todo el ciclo de vida del desarrollo de la aplicación, incluyendo:
- Configuración del ambiente de desarrollo.
- Diseño del sistema y arquitectura Domain Driven Design (DDD)
- Pruebas unitarias y de integración (testing)
- Implementación y despliegue (CI/CD)

## Aclaraciones (a tener en cuenta)
- Si no tienes idea o conocimiendo de lo que es Clean Architecture te recomiendo primero ilustrarte en el tema para saber si es lo mejor para tu desarrollo. Recursos a cerca de clean architecture:
  - [The Clean Architecture — Beginner’s Guide](https://betterprogramming.pub/the-clean-architecture-beginners-guide-e4b7058c1165)
  - [Mejora tu código aplicando Clean Architecture](https://www.youtube.com/watch?v=bdnpXzgj1oY)
  - [Clean Architecture: La mejor forma de escalar y mantener tu código](https://www.youtube.com/watch?v=y3MWfPDmVqo)

:::info[React Native Cli]
Esta guia parte del echo de que iniciaste el proyecto de la siguiente forma [Get Started Without a Framework](https://reactnative.dev/docs/getting-started-without-a-framework), se utilizan las siguientes versiones:
```bash
npx @react-native-community/cli@15.0.1 init AwesomeProject --version 0.78.0
```
:::
