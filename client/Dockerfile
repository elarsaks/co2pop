FROM node:12-alpine
RUN apk update && apk upgrade
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN chown node:node /app
USER node
RUN npm install
COPY --chown=node . /app
EXPOSE 8080