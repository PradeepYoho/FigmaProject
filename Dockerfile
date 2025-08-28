FROM node:24-alpine3.21
WORKDIR /app
COPY package*.json .
COPY tsconfig*.json .
RUN npm install
COPY
Expose 5173
CMD [ "npm","run","dev" ]
