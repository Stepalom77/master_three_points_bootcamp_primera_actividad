FROM node:16.16.0-alpine3.16

WORKDIR /best_buy_api

RUN npm install i npm@latest -g

RUN npm install pm2 -g

COPY package*.json ./

RUN npm install 

USER node

COPY . .

EXPOSE 7000

CMD ["node", "server.js"]