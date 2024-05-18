
FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "pnpm-lock.yaml*", "prisma", "tsconfig.json", "./"]
RUN npm install -g pnpm
RUN npm install -g typescript
RUN pnpm install --frozen-lockfile
RUN pnpm run build
COPY . .
EXPOSE 5010
RUN chown -R node /usr/src/app
RUN ls -la
USER node
CMD ["pnpm", "start"]
