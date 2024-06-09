---
sidebar_position: 4
---
# 2.4 Modulos
Puede descargar la carpeta completa o archivo por archivo segun le convenga. [Descargar carpeta completa](https://reactnative.dev/docs/speeding-ci-builds)

Instala las dependencias de el modulo shared segun tus necesidades:
```bash
bun add axios zustand @react-native-firebase/analytics @react-native-firebase/crashlytics @react-native-firebase/firestore
```

- ./src/modules/share/application *-> Agregar si utilizas CLI*
  - [hooks.ts](https://github.com/CrisangerA/react_native_clean_architecture_template/tree/main/src/modules/shared/application) *-> Opcional* Conjunto de hooks para diferentes funciones
- ./src/modules/share/domain *-> Agregar si utilizas CLI*
  - [model.ts](https://github.com/CrisangerA/react_native_clean_architecture_template/tree/main/src/modules/shared/domain/model) -> Modelos genericos para algunos componentes
  - [utils.ts](https://github.com/CrisangerA/react_native_clean_architecture_template/tree/main/src/modules/shared/domain/utils) -> Conjunto de utilerias (formatters/adapters/transformers)
- ./src/modules/share/infrastructure *-> Agregar si utilizas CLI*
  - [fetch.repository.ts](https://github.com/CrisangerA/react_native_clean_architecture_template/blob/main/src/modules/shared/infrastructure/fetch.service.ts) -> Acceso a la red mediante fetch
  - [axios.repository.ts](https://github.com/CrisangerA/react_native_clean_architecture_template/blob/main/src/modules/shared/infrastructure/axios.service.ts) -> Acceso a la red mediante axios
