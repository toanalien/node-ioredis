FROM node:14.17.3

WORKDIR /usr/src/app

COPY package.json .
RUN yarn

COPY . .

CMD ["node", "main.js"]
