# Spécifier une version chiffrée
FROM node:10.16.3-alpine 

# Set user !!!! IMPORTANT
# Installer une version récente chiffrée de npm pour éviter les mises à jour accidentelles qui peuvent impacter le fonctionement
# RUN addgroup -S appgroup && adduser -S --shell /bin/false app -G appgroup && npm install --global npm@6.9.0
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:${NPM_CONFIG_PREFIX}/bin

RUN mkdir -p /usr/src/app
RUN chown node /usr/src/app
USER node

WORKDIR /usr/src/app

# install dependencies
RUN npm install --global npm@6.9.0

COPY package*.json ./

RUN npm cache clean --force && npm install --only=production

COPY . /usr/src/app

ENV PORT 3000

EXPOSE 3000

CMD [ "node", "index.js" ]