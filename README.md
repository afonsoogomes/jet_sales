# 🚀 Jet Sales

Projeto de integração com WhatsApp, fila de mensagens com RabbitMQ e persistência com PostgreSQL e Redis.

## 🛠️ Configuração do Ambiente

Para começar, copie os arquivos de variáveis de ambiente de exemplo:

    cp .env.example .env
    cp .env.postgres.example .env.postgres
    cp .env.rabbitmq.example .env.rabbitmq
    cp .env.redis.example .env.redis
    cp .env.redis-commander.example .env.redis-commander

> 💡 Esses arquivos contêm os parâmetros de conexão com os serviços necessários (PostgreSQL, Redis, RabbitMQ, etc).

### ✏️ Edite os arquivos conforme sua necessidade:

- **`.env`**: configurações da aplicação (porta, URLs, etc)
- **`.env.postgres`**: credenciais do banco de dados PostgreSQL
- **`.env.rabbitmq`**: credenciais do RabbitMQ
- **`.env.redis`**: configurações do Redis usado pela aplicação
- **`.env.redis-commander`**: configurações específicas do painel Redis Commander

## ▶️ Subindo o Projeto com Docker

Com o Docker e Docker Compose instalados, execute:

    docker-compose up -d

Esse comando irá:

- Construir a imagem do Node.js
- Subir os containers: app, banco de dados, Redis, RabbitMQ e Redis Commander

## 📷 QR Code

A leitura do QR Code pode ser acessada via rota:

    GET /whatsapp/qr-code

## ✉️ Envio de Mensagens

Para enviar uma mensagem via API, faça uma requisição `POST`:

    POST /whatsapp/send-message
    Content-Type: application/json

    {
      "phone": "5511999999999",
      "message": "Olá, tudo bem?"
    }

A mensagem será enfileirada via Bull, enviada ao RabbitMQ, processada e registrada no banco de dados.

## ✅ Testes

Rode os testes com:

    docker exec -it jet_sales_node_app npm run test

## 🧠 Tecnologias Utilizadas

- **Node.js** + **Express**
- **TypeScript**
- **TypeORM**
- **PostgreSQL**
- **RabbitMQ**
- **Redis + Bull**
- **Baileys**
- **Docker**
