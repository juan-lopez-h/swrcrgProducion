FROM node:20-alpine

WORKDIR /app

RUN corepack enable

COPY backend/package.json backend/pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY backend/src ./src
COPY backend/server.js ./

EXPOSE 8080

CMD ["pnpm", "start"]