# ePaycoTest
ePaycoTest


## Instalación

``` bash
# clonar el repositorio
$ git clone https://github.com/coreui/coreui-free-react-admin-template.git ePaycoTest

# ir al directorio de la app
$ cd ePaycoTest

# Se uso yarn como manejador de paquetes
# instalar dependencias
$ yarn install
```

### Uso basico

``` bash
# servidor de desarrollo con hot reload at http://localhost:3000
$ yarn start
```

Navegar a [http://localhost:3000](http://localhost:3000). La aplicacion se actualizara automaticamente si se hace algún cambio al código fuente.

### Construcción

correr `build` para realizar la conestrucción del proyecto. los archivos de la misma se guardaran en el directorio `build/`.

```bash
# construir el proyecto con minificación
$ yarn run build
```

## Que se incluye

```
CoreUI-React#v2.0.0
├── public/          #static files
│   ├── assets/      #assets
│   └── index.html   #html template
│
├── src/             #project root
│   ├── assets/      #assets source
│   ├── components/  #components source
│   ├── containers/  #container source
│   ├── scss/        #user scss/css source
│   ├── services/    #api services source
│   ├── views/       #views(screens) source
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── _nav.js      #sidebar config
│   └── routes.js    #routes config
│
└── package.json
```
