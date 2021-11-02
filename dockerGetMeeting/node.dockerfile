FROM node

RUN apt-get update && apt-get install -y nasm
RUN apt-get install -y less vim

#CMD npm run watch
