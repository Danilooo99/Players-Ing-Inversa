# DAW II - Gestión de la plantilla del Liverpool con Ingeniería Inversa

### Autor del proyecto

Danilo Rivero Pérez - Grado en Ingeniería Informática - DAW II.

### Descripción de la aplicación

A partir de una aplicación entregada, se ha hecho uso del proceso de ```Ingeniería Inversa``` y se ha llevado a cabo una aplicación que gestiona la plantilla de uno de los mejores clubes de fútbol de la Premier League (Inglaterra) como es el ```Liverpool F.C```. Los integrantes del equipo se guardan en una base de datos (```FireStore```) y además se ha hecho uso de la carga perezoza (```lazy load```) para mejorar el rendimiento de la aplicación. Con esta aplicación, se pueden crear nuevos integrantes de la plantilla del Liverpool, editar integrantes, eliminar integrantes y ver el listado de los integrantes de la plantilla. Hablamos de integrantes, debido a que la aplicación está implementada para que a parte de los ```jugadores``` de la plantilla del Liverpool, también se puedan gestionar sus ```fisioterapeutas```, ```médicos```, ```cuerpo técnico```, ```directivos``` y ```entrenadores```, ya que también forman parte de la plantilla del equipo. Para la realización de este proyecto se ha usado [Angular](https://angular.io/) y para maquetar el diseño del proyecto, se ha usado [Bootstrap](https://getbootstrap.com/). Además, se ha hecho uso de una base de datos de Firebase como es [FireStore](https://cloud.google.com/firestore?hl=es-419). Finalmente, podrá acceder a la documentación de la aplicación original [aquí]().

Las funcionalidades de la aplicación son:

- Permite ```listar``` todos los integrantes de la plantilla del Liverpool (Jugadores, Entrenador, Cuerpo técnico, Fisio, Médico y Directivos).
- Permite ```crear``` nuevos integrantes para la plantilla del Liverpool (Jugadores, Entrenador, Cuerpo técnico, Fisio, Médico y Directivos).
- Permite ```editar``` integrantes de la plantilla del Liverpool (Jugadores, Entrenador, Cuerpo técnico, Fisio, Médico y Directivos).
- Permite ```eliminar``` integrantes de la plantilla del Liverpool (Jugadores, Entrenador, Cuerpo técnico, Fisio, Médico y Directivos).
- La aplicación cuenta con un ```inicio de sesión```.



### Credenciales para iniciar sesión

Las credenciales para acceder como administrador a la aplicación son:

**Usuario**: admin@gmail.com
<br />
**Contraseña**: admindaw2


### Documentación de la aplicación original

Como ya se ha comentado previamente, para la realización de esta aplicación se ha hecho uso del proceso de Ingeniería inversa a partir de una aplicación entregada. Podrá ver la documentación de la aplicación original en la carpeta ```documentacion``` de este mismo proyecto. También, podrá acceder a esta documentación haciendo clic [aquí]().


### Ejecutar el proyecto

Para ejecutar este proyecto en ***local*** se deben seguir los siguientes pasos:

  1. Ejecutar en la terminal desde la ruta del proyecto, el comando: ```mpm install``` para instalar todas las dependencias del proyecto en Angular.
  2. Ejecutar desde la terminal, el servidor local con el comando: ```ng serve --open```
  3. Se abrirá en un navegador el proyecto realizado a través de la URL ```localhost:nºpuerto```
  
### Hosting de alojamiento del proyecto

Podrá ver el proyecto de la gestión de la plantilla del Liverpool realizado haciendo uso de Ingeniería inversa [aquí](https://ing-inversa-players.netlify.app).

## Tecnologías utilizadas en el Proyecto

| Tecnologías                                                           | Descripción                               |
| --------------------------------------------------------------------- | ----------------------------------------- |
| **[Angular](https://angular.io/)**                                    | Framework de JavaScript                   |
| **[TypeScript](https://www.typescriptlang.org/)**                     | Superset de Javascript con tipado         |
| **[Bootstrap](https://getbootstrap.com/)**                            | Librería de diseño                        |
| **[Firebase](https://console.firebase.google.com/)**                  | Base de datos de documentos de Google     |
