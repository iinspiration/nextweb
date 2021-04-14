FROM node:15.2.1-alpine

ENV TZ=Asia/Bangkok

WORKDIR /home/node/app
COPY . .

RUN yarn install
RUN yarn build

CMD [ "yarn", "start" ]

EXPOSE 3000
