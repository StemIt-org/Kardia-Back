# StemIT x Kardia Backend

## Instructivo para consumir información del backend 

_________________

### Instalar dependencias

`npm i`

_________________

### Comandos del proyecto

    Usar por primera vez      npm run init

    Arranque normal           npm run startdev

    Reset de DB               npm run reset-db 

_________________

## Rutas

#### Por GET
* "/"               Proxima ruta de home

* "/users"          Devuelve un json con todos los usuarios

* "/login"          Proxima ruta del formulario de login

* "/posts/"         Devuelve un json con todas las publicaciones, su clasificación e imágenes que incluye 

* "/posts/create"   Próxima ruta de formulario para crear publicaciones 

* "/posts/:id"      Devuelve una publicación específica filtrada por el id de la url, incluyendo tipo e imágenes

#### Por POST

>       
> "/posts/create"   Creará una publicación al recibir por body un formulario tal que:
>
> - Configuración de formulario: **enctype="multipart/form-data"**
> - Campos con name **title** y **body** en formato string
> - Campo **images** para los archivos
> - Campo **postTypeId** con valores entre 1, 2 o 3. Se interpretaran ==> 1 como Evento, 2 como Noticia Kardia y 3 como Noticia deportes
> - Campo opcional: **dateEnd** con salida YYYY-MM-DD
>

>       
> "/login"   Creará una publicación al recibir por body un formulario tal que:
> - Debe recibir por body dos parámetros: **email** y **password**.
> - En caso de ser válidas las credenciales retornará un token en formato JSON.
>

>       
> "/getuser"   Creará una publicación al recibir por body un formulario tal que:
> - En los headers debe recibir el token que se obtuvo anteriormente con el nombre **authorization**.
> - En caso de validarse el token retornarà un JSON con los datos del usuario.
>

#### Por PUT

>       
> "/posts/:id"   Donde :id es el id de la publicación, al recibir por body un formulario tal que:
>
> - Configuración de formulario: **enctype="multipart/form-data"**
> - Campos con name **title** y **body** en formato string
> - Campo **images** para los archivos. En ese caso no es obligatorio.
> - Campo **postTypeId** con valores entre 1, 2 o 3. Se interpretaran ==> 1 como Evento, 2 como Noticia Kardia y 3 como Noticia deportes
> - Campo opcional: **dateEnd** con salida YYYY-MM-DD
>        

_________________

## Arrancar el proyecto
    npm run startdev        
