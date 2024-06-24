FROM node:alpine3.19

RUN mkdir -p /app

COPY . /app

RUN cd /app && npm install

CMD cd /app && npm start