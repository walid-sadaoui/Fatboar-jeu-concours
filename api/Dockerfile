FROM node:10.16.3-alpine 

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:${NPM_CONFIG_PREFIX}/bin

RUN mkdir -p /usr/src/app \
    && chown node /usr/src/app \
    && apk add --no-cache python make g++
    
USER node

WORKDIR /usr/src/app

RUN npm install --global npm@6.9.0

COPY package*.json ./

RUN npm cache clean --force && npm install --only=production

COPY . /usr/src/app

ENV PORT 3000

EXPOSE 3000

CMD [ "node", "./bin/www" ]

# TODO Multistage Build