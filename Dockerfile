FROM node:18.16.0

WORKDIR /app
COPY . /app/

EXPOSE 5000

RUN npm install
ENTRYPOINT [ "node", "index.js" ]