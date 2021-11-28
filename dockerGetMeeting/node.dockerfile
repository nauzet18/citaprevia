FROM node

RUN apt-get update && apt-get install -y nasm
RUN apt-get install -y less vim

RUN npm install vue
RUN npm install sass sass-loader

#CMD npm run watch
