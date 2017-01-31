# Introducción a unit testing en JS y PHP

## PHP Unit testing con PHPUnit

### Preparación del entorno

Usaremos composer para gestionar las librerías PHP.

Una vez instalado composer, instalar las dependencias PHP del proyecto con el comando:

```
composer install
```

Si se quiere utilizar phpunit desde la línea de comandos (recomendado), 
se debe instalar phpunit framework en global con el comando: 

```
composer global require "phpunit/phpunit=5.5.*"
```

### Ficheros de configuración

* `phpunit.xml` Importante indicar los directorios sujetos de los tests (en whitelist), la ruta 
de los tests y la ruta del autoloader que genera composer (vendor/autoload.php).
* `composer.json` Importante indicar en el campo autoload la convención de nombres de namespaces 
que vamos a usar y la(s) carpeta(s) asociadas. 

### Configuración básica PHPUnit y code coverage en PHPStorm 

* Run > Edit configurations
* Añadir una configuración PHPUnit y nombrarlo
* Marcar "Use alternative configuration file" y seleccionar `./phpunit.xml` como fichero de configuración

Para correr los tests ahora sólo será necesario hacer click en Run (Shift+F10). 

Si se quiere, además, ejecutarlos con análisis de code coverage, hacer click en el botón de más a la derecha:
"Run ??? with Coverage".

### Correr phpunit y code coverage desde la línea de comandos

Para, por ejemplo, correr todos los tests de la carpeta ./tests se puede utilizar el comando:

``` 
phpunit tests
```

Si se quiere generar el análisis de code coverage en formato html (recomendado):

```
phpunit --coverage-html=./coverage tests
```

## JS Unit testing con Jasmine
 
### Preparación del entorno

Usaremos node y npm para gestionar las librerías JS.

Una vez instalado node y npm, instalar las dependencias JS del proyecto con el comando:

```
npm install
```

Si se quiere utilizar jasmine desde la línea de comandos (recomendado), se debe instalar en global con el comando: 

```
npm install -g jasmine
```

También se recomienda instalar la herramienta de análisis de code coverage en global:

```
npm install -g istanbul
```

### Ficheros de configuración

Los ficheros de configuración ya están pregenerados en este repositorio. Si no lo estuvieran se podrían generar
rápidamente con el comando:

```
jasmine init
```

* `./spec/support/jasmine.json` Indicamos la carpeta de tests (spec files)


### Correr jasmine e istanbul (code coverage) desde la línea de comandos

Para, por ejemplo, correr todos los tests de la carpeta ./spec se puede utilizar el comando:

``` 
jasmine
```

Si se quiere generar el análisis de code coverage en formato html (recomendado):

```
istanbul cover -x \"**/spec/**\" node_modules/jasmine/bin/jasmine.js
```

Alternativamente se pueden preparar estos comandos como scripts en package.json y correrlos a través de npm.
Por ejemplo, en este repositorio están preparados para poder ser ejecutados, respectivamente, del siguiente modo:

```
npm run test
npm run coverage
```
