FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 8000

RUN yarn build

CMD node dist/index.js