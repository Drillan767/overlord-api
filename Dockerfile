FROM node:16-alpine

COPY . /usr/src/

WORKDIR /usr/src/

ENV NODE_ENV=production

RUN yarn install
RUN yarn build

CMD ["npm", "start"]
EXPOSE 1337
