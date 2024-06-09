---
sidebar_position: 1
---
# Cómo iniciar con el CLI
Si quieres evitar agregar todos los archivos necesarios a mano el CLI te puede ayudar. Justo despues de que ejecutes el comando: *"npx @react-native-community/cli@latest init AwesomeProject"* para iniciar un nuevo proyecto instala la dependencia de desarrollo:
```bash
bun add -D react_native_clean_arch_cli
```
Ejecuta el comando:
```bash
npm link
```
Ejecuta el comando:
```bash
rnca init
```

---

Actualmente el cli te permite crear dos scaffold, para modulo y para crud. Ambos reciben parametros opcionales, a continuación te indico sus opciones y posibilidades:

:::tip[RNCA CLI]
CLI inspirado en las herramientas de desarrollo del ecosistema de .Net, en donde se puede especificar un DataSource (Modelo) del cual se quiere hacer todo un CRUD, el IDE VisualStudio se encarga de generar los archivos de la capa logica (API) y la capa visual (User Interface/Html5) y conectarlos entre si de tal forma que solo con un par de clics el desarrollador ya ha conseguido hacer un CRUD.
:::

## Opciones y argumentos

| Comando | Opciones                   | Description                           |
| ------- | -------------------------- | ------------------------------------- |
| module  | -i \| --infra              | Comando para crear un nuevo modulo    |
| crud    | -i \| --infra, -n \| --nav | Comando para crear un nuevo crud      |

- Argumentos para la opcion: *--infra*. Valor por defecto: **firebase**
  - axios: acceso a la data mediante lib axios
  ```bash
  rnca module -i axios
  ```
  - fetch: acceso a la data mediante API fetch
  ```bash
  rnca module --infra fetch
  ```
  - firebase: acceso a la data mediante cloud firestore
  - local: acceso a la data mediante almacenamiento local
- Argumentos para la opcion: *--nav*. Valor por defecto: **stack**
  - stack: navegacion con stack
  - tabs: navegacion con bottom-tabs
  - drawer: navegacion drawer

## Crear nuevo modulo
Comando para crear un nuevo modulo:
```bash
rnca module nameModule -i fetch
```

Este comando se encargara de crear todo el codigo necesario para un nuevo modulo. Salida del comando:

- src/modules/moduleName
  - application -> Casos de uso
  - domain -> Reglas de negocio
  - infrastrucure -> Acceso a datos

## Crear nuevo CRUD
Comando para crear un nuevo crud:
```bash
rnca crud nameModule -i fetch -n tabs
```

La opcion de *crud* en el **CLI** se encarga de construir todo el scaffold necesario, incluye su respectiva carpeta logia y su carpeta de UI. Ambas ubicadas donde corresponde según la [definición inicial](../intro.md#11-importación-con-alias):
```
- /raiz_proyecto/src/modules/nombre_modulo -> @modules
- /raiz_proyecto/src/screens/nombre_modulo -> @screens
```

Este comando se encargara de crear todo el codigo necesario para un nuevo modulo. Salida del comando:

- src/modules/moduleName
  - application -> Casos de uso
  - domain -> Reglas de negocio
  - infrastrucure -> Acceso a datos
- src/screens/moduleName
  - ListView -> Listar todos los elementos
  - Detail -> Ver el detalle de un elemento
  - Form ->Formulario para crear o editar elemento
