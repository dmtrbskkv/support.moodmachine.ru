FROM node:lts
WORKDIR /app

COPY ./app/package.json ./
COPY ./app/package-lock.json ./
RUN npm install

# Gutsby CLI
RUN npm install -g gatsby-cli
