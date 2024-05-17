---
sidebar_position: 1
---

# Getting Started

## Guia de desarrollo de aplicaciones profesionales con React Native

### Objetivo
La idea principal de esta guia es recopilar todo un conjunto de buenas practicas que se puedan aplicar al momento de desarrollar una aplicación con react native.

En esta guia te enseñare a desarrollar aplicaciones moviles con React Native bajo la metodologia de arquitectura limpia y principios SOLID.

Para agilizar el desarrollo y evitar escribir codigo repetitivo (boilerplate) he creado una herramienta **CLI** que te ayudara con la creación de nuevos módulos y demas.

:::tip[RNCA CLI]
CLI inspirado en las herramientas de desarrollo del ecosistema de .Net, en donde se puede especificar un DataSource (Modelo) del cual se quiere hacer todo un CRUD, el IDE VisualStudio se encarga de generar los archivos de la capa logica (API) y la capa visual (User Interface/Html5) y conectarlos entre si de tal forma que solo con un par de clics el desarrollador ya ha conseguido hacer un CRUD.
:::

### Recomendaciones
Te recomiendo seguir la guia de inicio en orden y de principio a fin:
- 1 [Archivos de configuración (core)](./config-files/alias.md)
  - 1.1 [Importacion con alias](./config-files/alias.md)
  - 1.2 [Scripts](./config-files/alias.md)
  - 1.3 [Linter y formateo](./config-files/alias.md)
- 2 [Archivos necesarios (utileria)](./required-files/config.md)
  - 2.1 [Configuración](./required-files/config.md)
  - 2.2 [Estilos](./required-files/config.md)
  - 2.3 [Componentes](./required-files/config.md)
  - 2.4 [Modulo](./required-files/config.md)

:::info[Archivos necesarios (utileria)]

Puede que no llegues a necesitar cada uno de los archivos aqui mencionados. En la página de cada carpeta se especifica cuales son requeridos o cuales se pueden descargar bajo demanda. Por el contrario **todos** los *archivos de configuración (core)* son necesarios

:::

### Aclaraciones (a tener en cuenta)
Antes de comenzar quiero aclarar que esta guia es diseñada bajo mi experiencia personal. Los principios y patrones aqui descritos pueden ser utilizados por cada uno segun su necesidad y caso de uso.

Si no tienes idea o conocimiendo de lo que es Clean Architecture te recomiendo primero ilustrarte en el tema para saber si es lo mejor para tu desarrollo. Recursos a cerca de clean architecture:
- [The Clean Architecture — Beginner’s Guide](https://betterprogramming.pub/the-clean-architecture-beginners-guide-e4b7058c1165)
- [Mejora tu código aplicando Clean Architecture](https://www.youtube.com/watch?v=bdnpXzgj1oY)
- [Clean Architecture: La mejor forma de escalar y mantener tu código](https://www.youtube.com/watch?v=y3MWfPDmVqo)
