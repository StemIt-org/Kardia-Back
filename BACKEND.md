# StemIT x Kardia Backend

## Instructivo para consumir información del backend 

_________________

### Instalar dependencias

`npm i`

_________________

### Generar base de datos

    npm run create-db        //Para generar la base de datos
    npm run migrate-db       //Para generar las tablas 
    npm run seed-db          //Para generar contenido de prueba en la base de datos

    npm run drop-db          //Para borrar la base de datos 

_________________

## Rutas

#### Generales
* "/"               Proxima ruta de home
* "/users"          Devuelve un json con todos los usuarios
* "/login"          Proxima ruta de login
* "/posts"          Devuelve un json con todas las publicaciones y su clasificación
* "/posts/types"    Devuelve un json con todas las categorías de publicación y sus post

#### Específicas
* "/posts/:id"      Devuelve una publicación específica filtrada por el id de la url

_________________

## Arrancar el proyecto
    npm run startdev        
