FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache git

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY start.sh ./
RUN chmod +x start.sh

CMD ["./start.sh"]