FROM node:8-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

ENV NODE_ENV 'production'

RUN npm install

COPY --chown=node:node server/ server/

ENV NODE_PORT=${NODE_PORT:-'80'}

CMD ["npm", "run", "start"]