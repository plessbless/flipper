FROM node:14

WORKDIR /flipper
ADD . .
RUN npm install

CMD ["npm", "start"]