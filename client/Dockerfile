# base image

FROM node:10.16.3-alpine 

ENV NODE_VERSION 10.16.3 as build
# ENV YARN_VERSION 1.17.3
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:${NPM_CONFIG_PREFIX}/bin
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts@3.0.1 -g
# Install `serve` to run the application.
RUN npm install -g serve
COPY . /app
ENV PORT 5000
# Tell Docker about the port we'll run on.
EXPOSE 5000
CMD npm run build && serve -s build

