FROM node:16-alpine

COPY . /usr/src/

WORKDIR /usr/src/

RUN yarn install
RUN yarn build

CMD ["yarn", "start"]
EXPOSE 1337
