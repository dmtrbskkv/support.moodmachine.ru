FROM node:lts

# Gutsby CLI
RUN npm install -g gatsby-cli

WORKDIR /app
COPY app/package.json /app
COPY app/package-lock.json /app
RUN npm install


