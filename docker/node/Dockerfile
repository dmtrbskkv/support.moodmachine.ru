FROM node:lts
WORKDIR /app

COPY ./app/package.json ./
RUN npm install

# Gutsby CLI
RUN npm install -g gatsby-cli
