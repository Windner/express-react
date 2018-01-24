FROM node:8.4.0

RUN mkdir /src

RUN npm install express-generator -g 

RUN npm install nodemon -g 

WORKDIR /src

ADD package.json /src/package.json

RUN npm install

ADD / /src

ADD nodemon.json /src/nodemon.json

EXPOSE  8080

CMD npm run dev
