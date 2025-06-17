---
sidebar_position: 2
---

# Getting Started
Esta guia parte del echo de que iniciaste el proyecto de la siguiente forma [Get Started Without a Framework](https://reactnative.dev/docs/getting-started-without-a-framework), se utilizan las siguientes versiones:
```bash
npx @react-native-community/cli@15.0.1 init AwesomeProject --version 0.78.0
```

## Scaffold con autenticacion de firebase y navegacion
Esta sección contiene todos los archivos necesarios para el correcto funcionamiento de la aplicación.

### 1. Configuración
```bash
cp ../react-native-clean-architecture/package.json ./
cp ../react-native-clean-architecture/.prettierrc.js ./
cp ../react-native-clean-architecture/.eslintignore ./
cp ../react-native-clean-architecture/babel.config.js ./
cp ../react-native-clean-architecture/tsconfig.json ./
cp ../react-native-clean-architecture/ReactotronConfig.js ./
cp ../react-native-clean-architecture/index.js ./
cp -r ../react-native-clean-architecture/.trae ./
cp -r ../react-native-clean-architecture/.vscode ./
```
1. instalar dependencias y preparar git hooks
```bash
bun install && bun prepare
```
2. instalar iconos en iOS
```bash
npx rnvi-update-plist package.json ios/[Your-App-Name]/Info.plist
```
3. instalar dependencias iOS
```bash
bun pod-install
```
4. mantener el nombre que tenia el package.json
```json title="package.json"
name: "NameOfYourApplication",
```

TODO:
Para ejecutar requiere la configuracion de firebase ya que se necesitan los archivos de configuracion
mover a esta seccion la configuracion del firebase
Verificar que la aplicacion ejecuta correctamente en android y ios
Aqui se debe poder hacer la primera ejecucion de la aplicacion y debe aparecer la view de React Native por default.
TODO: Validar cuantas ejecuciones si 3 o 2 mejor.
Se supone que a este punto deberia poder ejecutar con todo instalado mostrando el landing de inicio de React Native ya que aun no se implementa ninguna libs

5. Ejecutar la aplicacion
```bash
bun start; bun android; bun ios
```

### 2. Scaffold base
```bash
cp -r ../react-native-clean-architecture/.husky ./
mkdir src
cp -r ../react-native-clean-architecture/App.tsx ./
cp -r ../react-native-clean-architecture/src/components ./src
cp -r ../react-native-clean-architecture/src/config ./src
cp -r ../react-native-clean-architecture/src/containers ./src
cp -r ../react-native-clean-architecture/src/theme ./src
```

### 3. Modulos
```bash
mkdir src/modules
cp -r ../react-native-clean-architecture/src/modules/authentication ./src/modules
cp -r ../react-native-clean-architecture/src/modules/navigation ./src/modules
cp -r ../react-native-clean-architecture/src/modules/user ./src/modules
```
Segunda ejecucion con la arquitectura base implementada
```bash
bun start; bun android; bun ios
```

## Establecer Firebase
Crear un nuevo proyecto de firebase o utiliza uno existente

### 4. Firebase en iOS
```swift title="Podfile.lock"
use_frameworks! :linkage => :static
$RNFirebaseAsStaticFramework = true
```

```swift title="AppDelegate.swift"
import Firebase
FirebaseApp.configure()
```

### 5. Firebase en Android
En las dependencias agrega
```grovy title="build.gradle"
classpath 'com.google.gms:google-services:4.4.2'
```
Al final agrega
```grovy title="app/build.gradle" 
apply plugin: 'com.google.gms.google-services'
```

## Establecer autenticacion OAuth
### 6. Credenciales GCloud
En la consola de [Gcloud](https://console.cloud.google.com/apis/credentials) en Apis y servicios -> Credenciales agrega una nueva credencial de cliente OAuth para Android y iOS. A veces firebase crea automaticamente la de iOS revisar si no lo hizo automaticamente
- 6.1 Obtener id de cliente Android
- 6.2 Obtener id de cliente y scheme iOS

> [!WARNING]
> Guardar estos datos de forma segura. Para ejemplos practicos se hace un mock en el archivo src/config/secure-store.json desde donde se pueden establecer los secretos


Tercera ejecucion con todo implementado
```bash
bun start; bun android; bun ios
```
