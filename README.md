<p align="center">
<img src="https://cdn.simpleicons.org/angular/DD0031" height="40" alt="angularjs logo"/><img width="12" />
<a href="#" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/></a>
<a href="#" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="50" height="50"/></a>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" height="50" alt="bootstrap logo"/><img width="12" />
<a href="#" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg" alt="gh" width="100" height="60"/></a><img width="12"/>
<a href="#" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/phpmyadmin/phpmyadmin-ar21.svg" alt="phpmyadmin" width="100" height="40"/></a>
<a href="#" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg" alt="mdb" width="60" height="50"/></a><img width="12" />
<a href="#" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" alt="vscode" width="40" height="50"/></a>



# <u>Angular CRUD con Node.js y Express</u>

Este es un ejemplo de una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) construida con Angular para el frontend y Node.js con Express para el backend. La aplicación también utiliza FullCalendar, Map, Chart.js, nodemon y Sequelize.

concoimientos:
``` 
- HTML
- TypeScript
- Bootstrap 5: Sistema de columnas + validaciones
- SCSS
- node.js
- phpMyAdmin
- mariaDB
``` 

## <u>Instalación</u>

#### Instala npm (Node Package Manager), necesitas instalar Node.js en tu sistema, ya que npm viene incluido con Node.js. Aquí tienes los pasos para instalar npm:

Descarga e instala Node.js: Ve al sitio web oficial de Node.js en https://nodejs.org/ y descarga el instalador adecuado para tu sistema operativo. Sigue las instrucciones de instalación proporcionadas en el sitio web para completar la instalación de Node.js.

Verifica la instalación: Después de instalar Node.js, puedes verificar si npm se ha instalado correctamente abriendo una terminal o símbolo del sistema y escribiendo el siguiente comando:

``` 
npm --version
``` 

#### Instala Angular CLI globalmente: Después de instalar Node.js y npm, abre una terminal o símbolo del sistema y ejecuta el siguiente comando para instalar Angular CLI globalmente en tu sistema:
``` 
npm install -g @angular/cli
``` 
Verifica la instalación: Una vez completada la instalación, puedes verificar si Angular CLI se ha instalado correctamente ejecutando el siguiente comando:
```
ng --version
```

### <u>Backend (Node.js con Express)</u>

<p align="center">
<a href="#" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg" alt="gh" width="100" height="50"/></a>
  <img width="12" />
</p>

   


 Clona este repositorio en tu máquina local:

```
git clone https://github.com/Victoriamanzano/icrud.git
```
 Navega hacia el directorio del backend:

```
 cd crud/backend
```
Instala las dependencias utilizando npm:

```
 npm install
```

Configura la base de datos en el archivo config/config.json según tu entorno de desarrollo.

Ejecuta las migraciones de Sequelize para configurar la base de datos:

```
 npx sequelize-cli db:migrate

 npm start  
```

### <u>Frontend (Angular)</u>
<p align="center">
<img  src="https://cdn.simpleicons.org/angular/DD0031" height="50" alt="angularjs logo"/>
</p>


Navega hacia el directorio del frontend:

```
 cd crud/frontend
```
Instala las dependencias utilizando npm:

```
 npm install
```
Inicia la aplicación Angular:

```
 ng serve
```

✨ Abre tu navegador web y navega hacia  http://localhost:4200/ para ver la aplicación en acción ✨
 <hr>

Componentes
La aplicación cuenta con los siguientes componentes:

### <u>Home</u>
Este es el componente de inicio de la aplicación. Proporciona una introducción y enlaces a otras secciones de la aplicación.

### <u>CRUD</u>
El componente CRUD permite realizar operaciones básicas de creación, lectura, actualización y eliminación de datos. Proporciona una interfaz de usuario para interactuar con los datos del backend.

### <u>FullCalendar</u>
El componente FullCalendar muestra un calendario interactivo que puede utilizarse para programar eventos o visualizar datos relacionados con fechas.

### <u>Map</u>
El componente Map integra un mapa interactivo que muestra datos geoespaciales o información basada en ubicaciones de puntos información e interés.

### <u>Chart.js</u>
El componente Chart.js utiliza la biblioteca Chart.js para mostrar visualizaciones de datos en forma de gráficos y diagramas.

### <u>Base de Datos</u>
La aplicación utiliza una base de datos creada con phpMyAdmin y MariaDB. Asegúrate de tener un entorno de base de datos adecuado configurado según las necesidades de tu aplicación.

![crud1](https://github.com/Victoriamanzano/iCrud/assets/141257786/f001175b-adb7-45cc-8b8c-71a5c7be910a)

<br>
<p align="center">
<span style="font-size:larger;"><u>Contribución</u></span>
</p>
<p align="center">
Si deseas contribuir a este proyecto, siéntete libre de hacer un fork del repositorio, realizar tus cambios y enviar un pull request.
</p>

<p align="center">
 ¡Gracias por tu interés en mi aplicación!
</p>

<p align="center">
<img src="https://cdn.simpleicons.org/angular/DD0031" height="40" alt="angularjs logo"/><img width="12" />
<a href="#" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/></a>
<a href="#" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="50" height="50"/></a>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" height="50" alt="bootstrap logo"/><img width="12" />
<a href="#" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg" alt="gh" width="100" height="60"/></a><img width="12"/>
<a href="#" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/phpmyadmin/phpmyadmin-ar21.svg" alt="phpmyadmin" width="100" height="40"/></a>
<a href="#" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg" alt="mdb" width="60" height="50"/></a><img width="12" />
<a href="#" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" alt="vscode" width="40" height="50"/></a>

<p align="center">
 Victoria Manzano.
</p>
