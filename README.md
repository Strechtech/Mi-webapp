# Comenzando con Create React App

Este proyecto fue iniciado con [Create React App](https://github.com/facebook/create-react-app).

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Ejecuta la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

La página se recargará cuando realices cambios.\
También puedes ver cualquier error de lint en la consola.

### `npm test`

Lanza el corredor de pruebas en modo interactivo de observación.\
Consulta la sección sobre [ejecución de pruebas](https://facebook.github.io/create-react-app/docs/running-tests) para obtener más información.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Agrupa correctamente React en modo de producción y optimiza la construcción para obtener el mejor rendimiento.

La construcción se minimiza y los nombres de archivo incluyen los hashes.\
¡Tu aplicación está lista para ser implementada!

Consulta la sección sobre [implementación](https://facebook.github.io/create-react-app/docs/deployment) para obtener más información.

### `npm run eject`

**Nota: esta es una operación unidireccional. ¡Una vez que haces `eject`, no puedes volver atrás!**

Si no estás satisfecho con la herramienta de construcción y las opciones de configuración, puedes `eject` en cualquier momento. Este comando eliminará la única dependencia de construcción de tu proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (webpack, Babel, ESLint, etc.) directamente en tu proyecto para que tengas control total sobre ellos. Todos los comandos excepto `eject` seguirán funcionando, pero apuntarán a los scripts copiados para que puedas modificarlos. En este punto, estás por tu cuenta.

No es necesario que uses `eject` nunca. El conjunto de características seleccionadas es adecuado para implementaciones pequeñas y medianas, y no deberías sentirte obligado a usar esta función. Sin embargo, entendemos que esta herramienta no sería útil si no pudieras personalizarla cuando estés listo para hacerlo.

## Más Información

Puedes obtener más información en la [documentación de Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, consulta la [documentación de React](https://reactjs.org/).

### División de Código

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Análisis del Tamaño del Paquete

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Creación de una Aplicación Web Progresiva

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Configuración Avanzada

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Implementación

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)



### `npm run build` falla al minimizar

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




## Configuracion de la pagina Web-Rect:
Para la configuracion del desarrollo web se ha planificado usar el acceso mediante rutas para que sea mucho mas comodo la navegacion entre pestañas 

##   `npm install react-router-dom`



## Instalacion de la firebase:
Para la seccion de Acceso se ha configurado mediante autenticacion de usuarios al insertar un correo y una contraseña que pueden generar en la seccion de registrar.
Deberemos de abrir nuestra direccion de nuestro archivo y ejecutar estos comando atravez de un terminal cmd o el propio de Visual Studio.
## `npm install -g firebase-tools`
## `firebase login`-----> al ejecutar este comando deberemos ingresar a nuestra cuenta de firebase y dar aceptar a todos los permisos. 
## `firebase init`
Una vez ejecutado nuestro comando se nos deplegara un menu y deberemos de aceptar con un yes o colocando la letra "Y", luego de esto se nos deplagara otras opciones
para esto sera necesario usar la tecla espacio para seleccionar las opciones, para la navegacion flechas de arriba o abajo y para aceptar nuestra opcion con la tecla
enter.
Para esto deberemos de seleccionar la opcion llamada "Firestore" en este se nos dara una serie de preguntas que deberemos de responder 

## Configuracion del Firebase:
Dentro de nuestro terminal una vez cargado previamente nuestros archivos deberemos de ejecutar el siguiente comando para la configuracion de nuestro firebase 
con la aplicacion web para la transferencia de informacion.

## `firebase apps:create`
En esta seccion se nos indicara para que cosa queremos crear el firebase para IOS, andorid o Web en este caso seleccionaremos para web y damos enter l


const firebaseConfig = {

  apiKey: "AIzaSyC3PQjRxoA4MTBmHq84Tky7-pmTUWzBjgQ",
  
  authDomain: "fir-auth-a00cb.firebaseapp.com",
  
  projectId: "fir-auth-a00cb",
  
  storageBucket: "fir-auth-a00cb.appspot.com",
  
  messagingSenderId: "538043423324",
  
  appId: "1:538043423324:web:53405f6d8e9e24e6592499"
};















