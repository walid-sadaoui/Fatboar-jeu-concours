# base image

FROM alpine:3.9

ENV NODE_VERSION 10.16.3
# ENV YARN_VERSION 1.17.3

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