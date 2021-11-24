FROM node:lts-alpine

WORKDIR /home/node/app

# Gutsby CLI
RUN npm i -g gatsby-cli

# Install packages
USER node
COPY ./app/package.json /home/node/app
COPY ./app/package-lock.json /home/node/app
RUN npm install


