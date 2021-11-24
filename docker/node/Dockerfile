FROM node:lts-alpine

WORKDIR /home/node/app

# Gutsby CLI
RUN npm i -g gatsby-cli

# Install packages
USER node
RUN addgroup --gid 1000 node
RUN adduser --disabled-password --gecos '' --uid 1000 --gid 1000 node
COPY ./app/package.json /home/node/app
COPY ./app/package-lock.json /home/node/app
RUN npm install


