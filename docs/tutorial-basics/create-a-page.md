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

Este comando creara una carpeta con el nombre: **nameModule** en la carpeta de @modules/, incluye su carpeta de dominio, aplicacion e infrasestructura con el repositorio especificado (firebase por defecto)

Adicionalmente tambien creara las vistas necesarias para manejar el CRUD, incluye 3 vistas: Listar todos los elementos, Ver el detalle de un elemento, Formulario para crear o editar elemento 