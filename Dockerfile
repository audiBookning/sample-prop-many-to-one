FROM node:12.20.1

WORKDIR /app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

CMD ["nest", "start", "--watch"]