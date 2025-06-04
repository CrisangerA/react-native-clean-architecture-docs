---
sidebar_position: 1
---

# Introduction

## Objetivo
El objetivo principal de esta guía es recopilar un conjunto de buenas prácticas para desarrollar aplicaciones móviles con React Native utilizando el CLI (sin Expo), siguiendo la metodología de arquitectura limpia (DDD) y los principios SOLID.

Esta guía quiere cubrir todo el ciclo de vida del desarrollo de la aplicación, incluyendo:
- Configuración del ambiente de desarrollo.
- Diseño del sistema y arquitectura Domain Driven Design (DDD)
- Pruebas unitarias y de integración (testing)
- Implementación y despliegue (CI/CD)

Incluye todos los recursos necesarios, como navegación, librerías universales open source, diseño adaptable (responsive) y manejo del estado. Todo esto está basado en mi experiencia personal, y los principios y patrones descritos pueden ser adaptados según las necesidades y casos de uso de cada desarrollador.

Para agilizar el desarrollo y evitar escribir código repetitivo (boilerplate), he creado una herramienta **CLI** que te ayudará con la creación de nuevos módulos y otras tareas.

## Recomendaciones
Te recomiendo seguir la guia de inicio en orden y de principio a fin:
- 1 . Archivos de configuración (core)
  - 1.1 [Importacion con alias](./config-files/alias.md)
  - 1.2 [Scripts](./config-files/scripts)
  - 1.3 [Linter y formateo](./config-files/linter.md)
- 2 . Archivos necesarios (utileria)
  - 2.1 [Configuración](./required-files/config.md)
  - 2.2 [Estilos](./required-files/styles.md)
  - 2.3 [Componentes](./required-files/components.md)
  - 2.4 [Modulo](./required-files/modules.md)


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
