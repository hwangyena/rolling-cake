FROM node:18-alpine

COPY package.json .
COPY pnpm-lock.yaml .

RUN yarn

COPY . .
RUN npx prisma generate
RUN pnpm build

EXPOSE 3000
CMD pnpm start