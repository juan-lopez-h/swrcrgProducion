WORKDIR /app

COPY backend/package.json backend/pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY backend/src ./src
COPY backend/server.js ./

EXPOSE 8080

CMD ["pnpm", "start"]