
FROM node:8.9.4-alpine

# create application dir
RUN         mkdir -p /usr/src/app
WORKDIR     /usr/src/app

# copy application and install dependencies
COPY        . .
RUN         npm install

EXPOSE      8080

CMD         ["npm", "start"]
