FROM node:12-alpine
WORKDIR /app
COPY package.json /app

RUN npm install --no-optional

COPY . /app
CMD ["npm", "run", "start:dev"]
