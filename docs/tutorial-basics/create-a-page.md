---
sidebar_position: 2
---

# Crear un CRUD completo
La opcion de *crud* en el **CLI** se encarga de construir todo el scaffold necesario, incluye su respectiva carpeta logia y su carpeta de UI. Ambas ubicadas donde corresponde según la [definición inicial](../intro.md#11-importación-con-alias):
```
- /raiz_proyecto/src/modules/nombre_modulo -> @modules
- /raiz_proyecto/src/screens/nombre_modulo -> @screens
```

Para crear un nuevo crud completo nos apoyaremos del **CLI** utilizando el siguiente comando:
```bash
rnca crud nameModule -i|--infra fetch|firebase|local
```

Este comando se encargara de crear todo el codigo necesario para un nuevo modulo. Salida del comando:

- src/modules/moduleName
  - application
  - domain
  - infrastrucure
- src/screens/moduleName
  - ListView
  - Detail
  - Form

Adicionalmente tambien creara las vistas necesarias para manejar el CRUD, incluye 3 vistas: Listar todos los elementos, Ver el detalle de un elemento, Formulario para crear o editar elemento 