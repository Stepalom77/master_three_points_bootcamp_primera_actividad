# Primera actividad del master Three Points School
Crear una API sencilla con Node.js, conectada a una base de datos en MongoDB y dockerizarla con Docker.

## Proyecto: API de lenguajes de programación

# Cómo usar este proyecto

1. Clonar el repositorio.
2. Abrir el proyecto en un IDE.
3. Instalar los paquetes ejecutando npm install en la terminal.
4. Para correr el proyecto en localhost, ejecutar docker-compose en la terminal.

# Rutas de la API

1. GET 'http://localhost:2000/api/v1/lenguaje'
Esta ruta devuelve todos los lenguajes de programación creados.

2. GET 'http://localhost:2000/api/v1/lenguaje/:id'
Esta ruta devuelve el lenguaje de programación que tenga el id ingresado como parámetro.

3. POST 'http://localhost:2000/api/v1/lenguaje'
Esta ruta permite crear otro lenguaje de programación. Las columnas son las siguientes:
nombre: El nombre del lenguaje de programación. Tipo string.
tipo: El tipo de lenguaje de programación (interpretado o compilado). Tipo string.
año: Año que el lenguaje de programación fue creado. Tipo number.

4. PUT 'http://localhost:2000/api/v1/lenguaje/:id'
Esta ruta permite modificar cualquiera de las columnas del lenguaje de programación que tenga el id ingresado como parámetro.

5. DELETE 'http://localhost:2000/api/v1/lenguaje/:id'
Esta ruta permite eliminar el lenguaje de programación que tenga el id ingresado como parámetro.