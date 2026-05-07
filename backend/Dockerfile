FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY backend/package.json ./
COPY backend/pnpm-lock.yaml ./

RUN pnpm install

COPY backend/. .

EXPOSE 3000

CMD ["pnpm", "start"]