# Primera actividad del master Three Points School
Crear una API sencilla con Node.js, conectada a una base de datos en MongoDB y dockerizarla con Docker.

## Proyecto: API de lenguajes de programación

# Cómo usar este proyecto

- Clonar el repositorio.
- Abrir el proyecto en un IDE.
- Instalar los paquetes ejecutando npm install en la terminal.
- Para correr el proyecto en localhost, ejecutar docker-compose up en la terminal.

# Rutas de la API

- GET 'http://localhost:2000/api/v1/lenguaje'
Esta ruta devuelve todos los lenguajes de programación creados.

- GET 'http://localhost:2000/api/v1/lenguaje/:id'
Esta ruta devuelve el lenguaje de programación que tenga el id ingresado como parámetro.

- POST 'http://localhost:2000/api/v1/lenguaje'
Esta ruta permite crear otro lenguaje de programación. Las columnas son las siguientes:
nombre: El nombre del lenguaje de programación. Tipo string.
tipo: El tipo de lenguaje de programación (interpretado o compilado). Tipo string.
año: Año que el lenguaje de programación fue creado. Tipo number.

- PUT 'http://localhost:2000/api/v1/lenguaje/:id'
Esta ruta permite modificar cualquiera de las columnas del lenguaje de programación que tenga el id ingresado como parámetro.

- DELETE 'http://localhost:2000/api/v1/lenguaje/:id'
Esta ruta permite eliminar el lenguaje de programación que tenga el id ingresado como parámetro.