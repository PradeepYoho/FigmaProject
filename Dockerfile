FROM node:latest
WORKDIR /app
copy . .
RUN apt-get update && apt-get install -y && npm install
Expose 3000
CMD ["npm","run","dev"]
