FROM php:8.0-fpm

RUN apt-get update
RUN apt-get -y install unzip zip vim
RUN docker-php-ext-install bcmath

RUN docker-php-ext-install pdo_mysql

# Required by maatwebsite/excel
RUN apt-get -y install libzip-dev
RUN docker-php-ext-install zip

# Required by GD
RUN apt-get install zlib1g-dev libpng-dev --yes --quiet
# Required to use Illuminate\Http\Testing\FileFactory::image() when doing unit tests
RUN docker-php-ext-install gd

# A la hora de hacer una instalción de una versión de xdebug hay q poner la versión exacta.. en este caso  3.1.1
RUN pecl install xdebug-3.1.1
RUN docker-php-ext-enable xdebug

RUN curl -sS https://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin/composer

RUN apt-get -y install less

RUN  usermod -u 1000 www-data && groupmod -g 1000 www-data
