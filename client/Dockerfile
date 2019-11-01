# base image

FROM node:10.16.3-alpine 

ENV NODE_VERSION 10.16.3
# ENV YARN_VERSION 1.17.3
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:${NPM_CONFIG_PREFIX}/bin
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

ENV PORT 3000

EXPOSE 3000

# start app
CMD ["npm", "start"]