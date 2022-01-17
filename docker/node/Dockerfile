FROM node:14-alpine

WORKDIR /app
COPY ./app/package*.json ./
RUN mkdir node_modules && npm install


RUN npm install --global gatsby-cli
