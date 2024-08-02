#!/bin/bash
echo "Instalando dependências..."
npm install --legacy-peer-deps

echo "Iniciando o servidor json-server..."
npx json-server --watch db.json --port 3000 &

echo "Iniciando o projeto Expo no iOS..."
npx expo start --ios -c
