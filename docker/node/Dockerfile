FROM node:lts-slim
WORKDIR /app

# Gutsby CLI
RUN npm install -g gatsby-cli

COPY app/package.json /app
COPY app/package-lock.json /app
RUN npm install


