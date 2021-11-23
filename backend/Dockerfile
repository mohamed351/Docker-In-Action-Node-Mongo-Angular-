FROM node:12
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV LISTENED_PORT=9500
EXPOSE ${LISTENED_PORT}
CMD ["npm", "start"]