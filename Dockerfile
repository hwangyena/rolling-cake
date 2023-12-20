FROM node:18-alpine

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .
RUN npx prisma generate
RUN yarn build

EXPOSE 3000
CMD yarn start