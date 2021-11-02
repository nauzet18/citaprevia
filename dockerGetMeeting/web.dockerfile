FROM nginx

RUN apt-get update
RUN apt-get -y install vim less

RUN  usermod -u 1000 www-data && groupmod -g 1000 www-data