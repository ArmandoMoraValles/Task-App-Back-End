# Task App back-end
## Requisitos
- NodeJs 14.x o superior
- Mysql 8.0 

## Configuración del entorno de desarrollo
### Clonar el repositorio

``` git clone <urlDelRepositorio> ```

### Entrar al repositorio

``` cd Task-App-Back-End ```

### Instalar todos los paquetes o módulos

``` npm i ``` o ``` npm install ``` usa el que te parezca mas comodo

### Configuración de la base de datos en el entorno local
Es indispensable tener una base de datos MySQL en el local host.

Posteriormente en el archivo database.sql encontrarás las consultas necesarias para crear la base de datos, es recomendable utilizar Xampp para hacer uso del sistema de gestión de bases de datos MySQL que viene incluido

en el archivo Database > connection.js está todo configurado para establecer la conexión con la base de datos por lo que esto debería ser suficiente para tener el proyecto listo en tu entorno local

### Configuracion de la base de datos en el entorno local a traves de docker 
Crear el contenedor de Docker 

``` docker run -p 3306:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=yes --name task-app-database -d mysql:8.0.32 ```

Ingresa en el servidor de MySQL alojado en el servidor 

``` docker exec -it task-app-database mysql -u root ``` 

Copia, pega y ejecuta las consultas necesarias para crear la base de datos que se encuentran en el archivo database.sql


## Como ejecutar las pruebas
Aún no existen pruebas (pero lo harán, talvez)

## Creado con
- NodeJS
- Express
- MySql

## Version
0.0.1
