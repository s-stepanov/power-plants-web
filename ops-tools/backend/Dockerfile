FROM node:12 AS builder
WORKDIR /app
COPY ./backend/package.json ./
RUN npm install
COPY ./backend .
RUN npm run build


FROM node:12-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
