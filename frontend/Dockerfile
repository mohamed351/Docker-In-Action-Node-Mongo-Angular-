FROM node:12
WORKDIR /app
COPY package.json .
RUN npm install
COPY  .  .
EXPOSE 8500
CMD [ "npm","start" ]