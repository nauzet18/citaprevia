Una vez levantado el docker-compouse

docker-compose exec app bash
docker-compose exec database bash
docker-compose exec -u1000 app php artisan tinker

0º SI partimos de NADA. Esto crea un proyecto descargandoselo y haciendo el composer install, artisan key:generate, etc..
docker-compose exec -u1000 app  composer create-project laravel/laravel getmeeting


1º Instalar los paquetes de composer
docker-compose exec -u1000 app composer install

2º generar el app key
docker-compose exec -u1000 app php artisan key:generate

3º Añadir la BD
Esto es metiendome enel container database
mysql --max_allowed_packet=1073741824 -uroot -p"tezuan18" < backend_incidencias.sql

O creamos de 0 el esquema #OJO: Nunca me acuerdo de crear la BD
create database `portal_empleo_ayto`;

4º Ejecutar migraciones y seeders
docker-compose exec -u1000 app php artisan migrate
docker-compose exec -u1000 app php artisan db:seed
docker-compose exec -u1000 app php artisan storage:link

Por si se quiere ejecutar el npm desde el docker... pero no es necesario.. yo es q me peta en uno de los ordenadores
docker-compose run -u1000 nodejs npm run watch
docker-compose run -p 3000:3000 -p 3001:3001 -u1000 nodejs npm run watch

//Paquete para analizar el código, lo instalo como dependencia de desarrollo
docker-compose exec -u1000 app composer require nunomaduro/larastan --with-dependencies --dev
//Para lanzar el analisis
docker-compose exec -u1000 app ./vendor/bin/phpstan analyse

//--------------------

4º Cambios para la libería PDF wkhtmltopdf
cambiar en el .env de laravel
WKHTMLTOPDF_SYSTEM=wkhtmltopdf-amd64

Cambios en el php.ini
Poner sys_temp_dir, a una ruta donde pueda escribir php
sys_temp_dir = /var/www/storage/tmp

Poner memory_limit mas alto, por que composer require h4cc/wkhtmltopdf-amd64 requere bastante memoria.
memory_limit=3512M  (es un valor alto... )

Hace falta instalar la versión de 64bit de wkhtmltopdf-amd64, si no está ya en el composer
https://github.com/KnpLabs/snappy
docker-compose exec -u1000 app composer require h4cc/wkhtmltopdf-amd64 "0.12.3"


----------
Datos de acceso para portaldeempleo.inventiaplus.com
Usuario: portaldeempleoinventiaplus

ssh portaldeempleoinventiaplus@portaldeempleo.inventiaplus.com
talD3inventiaplusD3emp

Base de datos
esquema: portaempleo
usuario: porta_empleo
contraseña: bdPorta3mPl3



symlink ( string $target , string $link )

<?php
symlink ('portal_empleo_ayto/public/', 'www');


///----------- CAJON DESASTRE


Obtener todos los permisos definidos
Illuminate\Support\Facades\Gate::abilities()

currculum
docker-compose exec -u1000 app php artisan bl5:all currculums
docker-compose exec -u1000 app php artisan bl5:delete currculums

docker-compose exec -u1000 app php artisan bl5:all curricula
docker-compose exec -u1000 app php artisan bl5:delete curricula
curricula
curriculums


docker-compose exec -u1000 app php artisan bl5:all cvs

docker-compose exec -u1000 app php artisan bl5:all Categories
docker-compose exec -u1000 app php artisan bl5:delete Departments

docker-compose exec -u1000 app php artisan bl5:all tags


Al wordpress existente, añadirle la posibilidad de gestionar los demandandes de empleo.

acceso: http://empleo.inventiapush.com/wp-login.php?loggedout=true

User administrador: rafasce/scesce



docker-compose exec -u1000 app php artisan migrate:rollback

ssh inventiapush0@inventiapush.com
gFG995wH




docker-compose exec -u1000 app php artisan make:migration add_fields_to_cvs_table

----------

//Create controller
php artisan bl5:controller ArticlesController

//Create Model
php artisan bl5:model Article

//Create request
php artisan bl5:request ArticleRequest

//Create migrate
php artisan make:migration:schema create_articles_table --schema="name:string"


docker-compose exec -u1000 app php artisan bl5:model File
docker-compose exec -u1000 app php artisan bl5:request FileRequest
docker-compose exec -u1000 app php artisan make:migration create_filess_table




¿?
docker-compose run --rm -u1000 nodejs npm run dev



Ejecutar test con la depuraćión activa. para vscode esto para en los breackpoint
docker-compose exec -u1000 -e XDEBUG_SESSION=1 app php artisan test


Para depurar con el vscode, con el xdebug3 y como está configurado..
Necesito añadir en la petición.. la variable GET XDEBUG_SESSION=1
Por ejemplo la url así:
http://localhost/?XDEBUG_SESSION=1

¿Por q esto?, por q el launch del vscode, es un escuchador y necesita q algo lo dispare.
Tambien puede que sea por que : xdebug.start_with_request esta a valor por de defecto, q en el modo debug, es trigger
- Pues si, confirmado que si pongo: xdebug.start_with_request=yes   ya se para como quiero, simplemente poner el brekpoint y q pase por él, sin variable de sessión