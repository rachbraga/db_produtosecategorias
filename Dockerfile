FROM node:16-alpine

RUN apk update

ENV PORT=4040

EXPOSE 4040

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

USER node

CMD  ["npm","run", "dev"]