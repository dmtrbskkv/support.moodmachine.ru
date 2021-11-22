FROM node:lts-buster

# Gutsby CLI
RUN yarn global add gatsby-cli

WORKDIR /app
ADD ./app/package.json ./
ADD ./app/package-lock.json ./
RUN yarn

#COPY ./app/package.json /app
#COPY ./app/package-lock.json /app
#RUN npm install


