---
sidebar_position: 2
---

# Getting Started
Esta guia parte del echo de que iniciaste el proyecto de la siguiente forma [Get Started Without a Framework](https://reactnative.dev/docs/getting-started-without-a-framework), se utilizan las siguientes versiones:
```bash
npx @react-native-community/cli@15.0.1 init AwesomeProject --version 0.78.0
```
## Script automaticamente
El siguiente script automatiza todos los pasos que se deben hacer manualmente. El comando `init` automatiza todo el paso 1 de configuracion y el comando `scaffold` automatiza todo el paso 2 y 3.

### 1. Clonar repositorio
Clonar repositorio [template](https://github.com/CrisangerA/react-native-clean-architecture) junto al proyecto con el que quieres trabajar
```bash
git clone git@github.com:CrisangerA/react-native-clean-architecture.git
```

```bash
cd AwesomeProject
```

### 2. Extraer script
Extrae el script `rnca.sh` del repositorio y copialo dentro de la carpeta de tu proyecto
```bash
cp ../react-native-clean-architecture/rnca.sh .
```

### 3. Inicializar plantilla
1. Ejecutar script
```bash
./rnca.sh init --name AwesomeProject
```

2. Despues de inicializar el proyecto comprueba que se ejecuta correctamente.
```bash
bun start
```
2.1 Compilar para en Android
```bash
bun android
```
2.2 Compilar para en iOS. Te recomiendo que antes de ejecutar en ios abras el proyecto .xcworkspace con Xcode y selecciones un grupo para la firma de la aplicacion en **Signing & Capabilities -> Signin -> Team**.
```bash
bun ios
```

3. Una vez que compruebes que tu aplicacion se ejecuta tanto en iOS como en Android puedes continuar con el comando:
```bash
./rnca.sh scaffold
```
Este comando agregara la plantilla base al proyecto. Es equivalente a terminar la configuración manual en el punto 5.
Para ejecutar la app nuevamente es necesario que completes la configuración adicional.

### Configuración adicional
#### Firebase y GCloud
Crear un nuevo proyecto de firebase o utiliza uno existente. En la consola de Gcloud asegurate de seleccionar el mismo proyecto de firebase.

Te recomiendo seguir los siguientes pasos:
1. Crear proyecto de firebase.
2. Agregar aplicación de iOS y Android.
- Solo en **Firebase** ya que en el codigo lo hace el `script`
- (No descargar aún google-services.json, GoogleService-Info.plist).

3. Configurar autenticación en Gcloud. **Android** y **iOS**
- En la consola de [Gcloud](https://console.cloud.google.com/apis/credentials) en **Apis y servicios -> Credenciales ->** agrega una nueva credencial de cliente OAuth para Android y iOS. A veces firebase crea automaticamente la de iOS.

4. Habilitar autenticación con Google.
- En Firebase **Autenticación -> Metodos de acceso ->** habilitar el proveedor de autenticación de Google.

5. Descargar archivos de configuración.
- Android -> android/app/google-services.json
- iOS -> agregar desde Xcode ios/GoogleService-Info.plist.

6. Agregar el scheme de iOS. 
- En Xcode. YourAppName **Info -> URL Types ->** Agregar URL Scheme.
- El esquema esta en la consola de Google.

7. Agregar las credenciales en codigo `src/config/secure-store.json`.
- Para android ve al archivo google-services.json **client -> oauth_client -> client_id**. Copia client_id donde client_type sea igual a 3.

:::warning

Guardar estos datos de forma segura. Para ejemplos practicos se hace un mock en el archivo `src/config/secure-store.json` desde donde se pueden establecer los secretos

:::

Finalmente ejecuta nuevamente la aplicación con toda la plantilla implementada.
```bash
bun start
```
Compilar para en Android
```bash
bun android
```
Compilar para en iOS
```bash
bun ios
```


## Manualmente
Paso a paso:
1. [Copiar archivos de configuracion inicial](#1-archivos-de-configuracion)
2. [Actualizar package.json](#2-actualizar-packagejson)
3. [Instalar dependencias y preparar git hooks](#3-instalar-dependencias-y-preparar-git-hooks)
4. [Instalar iconos en iOS `react-native-vector-icons`](#4-instalar-iconos-en-ios-react-native-vector-icons)
5. [Configurar Podfile para utilizar firebase en iOS](#5-configurar-podfile-para-utilizar-firebase-en-ios)
6. [Instalar dependencias iOS.](#6-instalar-dependencias-ios)
7. [Ejecutar la aplicacion](#7-ejecutar-la-aplicacion)

### 1. Configuración

#### 1. Archivos de configuracion
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
mkdir src
cp -r ../react-native-clean-architecture/src/config ./src
```

#### 2. Actualizar package.json
```json title="package.json"
name: "NameOfYourApplication",
```

#### 3. instalar dependencias y preparar git hooks
```bash
bun install && bun prepare
```

#### 4. Instalar iconos en iOS `react-native-vector-icons`
```bash
npx rnvi-update-plist package.json ios/[Your-App-Name]/Info.plist
```

#### 5. Configurar Podfile para utilizar firebase en iOS
```swift title="Podfile.lock"
use_frameworks! :linkage => :static
$RNFirebaseAsStaticFramework = true
```

#### 6. Instalar dependencias iOS.
```bash
bun pod-cocoa
```
```bash
bun pod-install
```

#### 7. Ejecutar la aplicacion
```bash
bun start
```
Compilar para en Android
```bash
bun android
```
Compilar para en iOS
```bash
bun ios
```

### 2. Scaffold base
```bash
cp -r ../react-native-clean-architecture/.husky ./
cp -r ../react-native-clean-architecture/App.tsx ./
cp -r ../react-native-clean-architecture/src/components ./src
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

### 4. Firebase en iOS
Agrega las siguientes lineas para tu aplicación de iOS
```swift title="AppDelegate.swift"
import Firebase
FirebaseApp.configure()
```

### 5. Firebase en Android
Agrega las siguientes lineas para tu aplicacion de Android
En las dependencias agrega
```grovy title="build.gradle"
classpath 'com.google.gms:google-services:4.4.2'
```
Al final agrega
```grovy title="app/build.gradle" 
apply plugin: 'com.google.gms.google-services'
```

### 6. Configuración adicional
Si hiciste toda la configuración manual el ultimo paso es [configurar firebase y gcloud](#configuración-adicional)