FROM node:alpine

WORKDIR /usr/src/app/api

COPY package*.json ./

RUN npm install -g nodemon
RUN npm install

EXPOSE 3080

CMD ["nodemon", "./server.js", "3080"]