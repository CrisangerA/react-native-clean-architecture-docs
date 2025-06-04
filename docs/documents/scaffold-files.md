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

### 📂 `components`
Este directorio contiene los estilos de los componentes de core, form y layout

#### Archivos:
- **`Button.tsx`**  
  Componente reutilizable para botones. Soporta diferentes estilos y tipos de botones (primario, secundario, deshabilitado, etc.).

- **`colors.js`** 
  Este archivo define la paleta de colores utilizada en la aplicación. Contiene colores primarios, secundarios, de fondo, de texto y otros colores específicos para el diseño. Facilita la reutilización de colores en los estilos de los componentes.

- **`fonts.js`**
  Archivo que define las configuraciones relacionadas con las fuentes tipográficas. Incluye nombres de fuentes, tamaños, pesos y estilos. Permite mantener una tipografía consistente en toda la aplicación.

- **`metrics.js`**
  Este archivo contiene medidas comunes utilizadas en la aplicación. Define valores para márgenes, paddings, bordes y tamaños de componentes. Facilita la reutilización de medidas y asegura consistencia en el diseño.
---

## 📂 `src/config`
## 📂 `src/containers`