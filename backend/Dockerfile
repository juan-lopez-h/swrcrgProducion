FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY backend/package.json backend/pnpm-lock.yaml ./

RUN pnpm install

COPY backend/src ./src
COPY backend/server.js ./

EXPOSE 8080

CMD ["pnpm", "start"]