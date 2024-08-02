@echo off
echo Instalando dependências...
call npm install --legacy-peer-deps

echo Iniciando o servidor json-server...
start cmd /k "npx json-server --watch db.json --port 3000"

echo Iniciando o projeto Expo...
call npx expo start --go -c

pause