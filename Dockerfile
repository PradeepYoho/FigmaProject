FROM node:22-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run dev

FROM nginx:1.25-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=dist /app/dist .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]