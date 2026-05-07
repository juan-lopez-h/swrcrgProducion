FROM node:20-slim

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9.12.0 --activate

COPY backend/package.json backend/pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY backend/src ./src
COPY backend/server.js ./

EXPOSE 8080

CMD ["pnpm", "start"]