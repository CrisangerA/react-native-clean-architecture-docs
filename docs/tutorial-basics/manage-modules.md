---
sidebar_position: 1
---
# Modulos
## Como trabajar los modulos de la aplicacion

## Nuevo modulo
Los modulos utilizan la siguiente estructura:
```js
mi-modulo/
│
├── application/                     # Contiene la lógica de aplicación que orquesta el flujo de datos
│   ├── hooks/                       # Hooks personalizados para la lógica de negocio
│   │   ├── index.ts
│   │   └── useHookName.ts
│   ├── mutations/                   # Mutaciones para modificar datos (usando React Query)
│   │   ├── index.ts
│   │   └── mi-modulo.mutations.ts
│   └── queries/                     # Consultas para obtener datos (usando React Query)
│       ├── index.ts
│       └── mi-modulo.queries.ts
│
├── domain/                          # Es el núcleo de la aplicación
│   ├── model/
│   │   ├── index.ts
│   │   └── mi-modulo.model.ts       # Tipos y entidades
│   └── repository/
│       ├── index.ts
│       └── mi-modulo.repository.ts  # Interfaces que establecen contratos para la capa de infraestructura
│
├── infrastructure/                  # Implementa las interfaces definidas en el dominio
│   ├── index.ts
│   ├── mi-modulo.service.ts         # Implementaciones concretas de los repositorios
│   └── mi-modulo-local.storage.ts   # Manejo de almacenamiento local
│
└── ui/
    ├── components/                  # Componentes específicos del módulo
    └── screens/                     # Pantallas o vistas completas
```

### Domain (Dominio)
Es el núcleo de la aplicación que contiene:

- Modelos de negocio (interfaces, tipos y entidades)
- Reglas de negocio
- Interfaces de repositorios (Esta capa es independiente de cualquier framework o tecnología externa)
- Transformación de datos entre capas (Adapters)
### Application (Aplicación)
Contiene la lógica de aplicación que orquesta el flujo de datos:

- Casos de uso
- Hooks personalizados
- Queries y mutations
### Infrastructure (Infraestructura)
Implementa las interfaces definidas en el dominio:

- Servicios externos (Firebase, Stripe, Apify, APIs)
- Almacenamiento local
- Implementaciones concretas de repositorios
- Configuraciones de servicios
### UI (Interfaz de Usuario)
Maneja la presentación y la interacción con el usuario:

- Componentes propios del modulo
- Pantallas
- Gestión del estado local de UI

## Estructura de proyecto
```js
mi-aplicacion/
│
├── android/
├── ios/
├── index.js
├── App.tsx
└── src/                              
    ├── components/                   # Contiene todos los componentes reutilizables en la aplicacion
    │   ├── core/
    │   ├── form/
    │   └── layout/
    │
    ├── config/                       # Mutaciones para modificar datos (usando React Query)
    │   ├── i18n/
    │   └── storage.ts
    │
    ├── containers/                   # Contenedores o wrappers de la aplicacion usualmente se inyectan en App.tsx
    │   ├── index.ts
    │   ├── SecureContainer.tsx
    │   └── AppContainer.tsx
    │
    ├── modules/                      # Modulos de la aplicacion
    │   ├── authentication/
    │   ├── navigation/
    │   └── user/
    │
    └── theme/                        # Estilos globales para toda la aplicacion
        ├── index.ts                  # Colores, fuentes, tamaños y utilidades para manejar el responsive
        └── components/               # Contiene los estilos para los componentes tanto core, form y layout
```