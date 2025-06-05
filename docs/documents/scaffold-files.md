---
sidebar_position: 2
---

# Scaffold

## 📂 `src/components`

Este directorio contiene los componentes reutilizables de la aplicación. Los componentes están organizados en subcarpetas según su propósito, como componentes básicos (`core`), formularios (`form`), y diseño de layout (`layout`).

---

### 📂 `core`

Esta carpeta contiene componentes básicos y reutilizables que forman la base de la interfaz de usuario.

#### Archivos:

- **`Avatar.tsx`**  
  Componente para mostrar un avatar de usuario. Puede aceptar una imagen de perfil y configuraciones como tamaño.

- **`Button.tsx`**  
  Componente reutilizable para botones. Soporta diferentes estilos y tipos de botones (primario, secundario, deshabilitado, etc.).

- **`Margin.tsx`**  
  Componente para agregar márgenes dinámicos alrededor de otros componentes. Permite configurar márgenes individuales (superior, inferior, izquierdo, derecho) o generales (vertical, horizontal).

- **`Text.tsx`**  
  Componente para mostrar texto con soporte para diferentes fuentes, tamaños y estilos definidos en el tema.

- **`TextInput.tsx`**  
  Componente reutilizable para entradas de texto. Soporta validaciones, estilos personalizados y diferentes tipos de entradas.

- **`index.ts`**  
  Archivo de exportación central que facilita la importación de los componentes básicos (`Avatar`, `Button`, `Margin`, `Text`, `TextInput`) desde esta carpeta.

---

### 📂 `form`

Esta carpeta está destinada a componentes relacionados con formularios. Actualmente, no contiene archivos, pero puede incluir componentes como validadores, campos de entrada avanzados, o formularios completos en el futuro.

---

### 📂 `layout`

Esta carpeta contiene componentes relacionados con el diseño y la estructura de la interfaz de usuario.

#### Archivos:

- **`BaseLayout.tsx`**  
  Componente de diseño base que envuelve las pantallas principales de la aplicación. Puede incluir configuraciones comunes como estilos de fondo, paddings, o encabezados.

- **`Loading.tsx`**  
  Componente para mostrar un indicador de carga. Útil para pantallas o secciones que requieren esperar datos o procesos.

- **`index.ts`**  
  Archivo de exportación central que facilita la importación de los componentes de diseño (`BaseLayout`, `Loading`) desde esta carpeta.

---

## 📂 `src/theme`

El directorio `src/theme` contiene configuraciones relacionadas con el diseño visual de la aplicación. Aquí se definen aspectos como la paleta de colores, tipografías, medidas comunes y estilos globales. Este enfoque permite mantener una apariencia consistente en toda la aplicación y facilita la personalización del diseño.

---
#### Archivos:

- **colors.ts**: Defines the application's color palette. It includes base colors, semantic colors (error, warning, info, success), neutral colors (background, text, border), and a grayscale. It also exports `APP_COLORS` which are specific color configurations for UI elements like buttons and inputs.
- **fonts.ts**: Defines the font families (`regular`, `bold`, `light`, `medium`) and font sizes for various text elements used throughout the application. It uses a `normalize` function for responsive font scaling.
- **index.ts**: This is the main entry point for the `theme` module. It re-exports all core theme elements like fonts, responsive utilities, colors, and component styles, making them easily accessible from a single import.
- **responsive.ts**: Contains utility functions for creating responsive UIs. It includes functions for scaling dimensions (`horizontalScale`, `verticalScale`, `moderateScale`), normalizing font sizes (`normalize`), and calculating width/height percentages (`wp`, `hp`) based on screen dimensions.

### 📂 `components`

#### Archivos:
Este directorio contiene los estilos de los componentes de core, form y layout

- **avatar.ts**: Defines styles for avatar components, including container and image styles for a `profile` avatar type.
- **button.ts**: Defines styles for different button types (`primary`, `secondary`, `outline`, `disabled`). It includes base styles for the button container and text, and then extends them for each specific button type.
- **common.ts**: Provides common utility styles that can be reused across the application, such as styles for centering content, creating rows, adding padding, and margins.
- **index.ts**: Acts as an entry point for the `components` styles, re-exporting all component-specific styles and defining shared style types like `ContainerTextStyle` and `ContainerImageStyle`.
- **text-input.ts**: Defines styles for text input fields, including `primary`, `error`, and `disabled` states. It provides base styles for the input container and specific styles for different states.
- **text.ts**: Defines a comprehensive set of text styles based on different typographic scales (Display, H1-H3, Body L/M/S, Caption, Overline) and font weights (Regular, Medium, Bold). It re-exports font families and sizes from `fonts.ts`.

---

## 📂 `src/config`

- **`i18n`**: This directory likely contains internationalization and localization files, enabling the app to support multiple languages.
- **`secure-store.json`**: This file stores sensitive configuration data, such as API keys or client IDs, specifically the `webClientId` and `iosClientId` for Google Sign-In.
- **`storage.ts`**: This file configures and exports `MMKV` for fast, persistent key-value storage. It includes a custom `StateStorage` adapter for use with state management libraries like Zustand, and a `mmkvReviver` function to correctly parse date strings from storage.

---

## 📂 `src/containers`

Este directorio contiene los contenedores de alto nivel que envuelven la aplicación y proporcionan funcionalidades base.

#### Archivos:

#### AppContainer.tsx
Un contenedor principal que proporciona la configuración base de la aplicación:
- Configura React Query para el manejo de estado y caché
- Implementa SafeArea para manejar correctamente los notches y bordes de pantalla
- Configura GestureHandler para el manejo de gestos
- Establece la barra de estado
- Define estilos base para el contenedor raíz

Componentes y configuraciones importantes:
- `QueryClientProvider`: Para gestión de estado y caché
- `SafeAreaProvider`: Para manejo seguro de áreas de pantalla
- `GestureHandlerRootView`: Para soporte de gestos
- `StatusBar`: Para configuración de la barra de estado

#### SecureContainer.tsx
Un contenedor de seguridad que implementa protecciones básicas para la aplicación:
- Utiliza `JailMonkey` para detectar si el dispositivo está rooteado/jailbroken
- Bloquea el acceso a la aplicación en dispositivos comprometidos
- Muestra un mensaje de advertencia si el dispositivo está rooteado

Funcionalidades:
- Verificación de seguridad del dispositivo
- Prevención de acceso en dispositivos no seguros
- Renderizado condicional basado en el estado de seguridad del dispositivo