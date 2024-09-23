FROM --platform=linux/amd64 node:lts-alpine

WORKDIR /home/node/app

COPY package*.json ./

# USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 9550

CMD [ "node", "server.js" ] 