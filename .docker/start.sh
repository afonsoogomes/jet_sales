#!/bin/sh

echo "▶️ Rodando migrations..."
npm run migration:run

echo "🚀 Iniciando aplicação..."
node dist/app.js