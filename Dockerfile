FROM node:14-slim as build

ENV APP_SERVER_ROOT /app

WORKDIR $APP_SERVER_ROOT

RUN apt-get update && apt-get install python make -y

COPY ./project/package*.json ./

RUN npm install -g @angular/cli

RUN npm install

COPY [ \
    "./project", \
    "./" \
    ]

RUN ng build --prod

EXPOSE 80

FROM nginx:1.17.1-alpine

ENV APP_SERVER_ROOT /app

COPY --from=build $APP_SERVER_ROOT/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build $APP_SERVER_ROOT/dist/socialprofile /usr/share/nginx/html