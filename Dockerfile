FROM node:16-alpine

WORKDIR /usr/app

COPY . .

RUN npm ci

RUN npm run builder

CMD ["npm", "start"]