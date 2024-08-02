# Aplicativo de Streaming de Vídeos com React Native e Expo

## Descrição

Este projeto é um aplicativo de streaming de vídeos desenvolvido utilizando React Native e Expo. Ele permite aos usuários navegar por uma lista de vídeos, visualizar informações detalhadas sobre cada vídeo e reproduzi-los através de HLS (HTTP Live Streaming). Além disso, o aplicativo oferece funcionalidades como carregamento esqueleto, animações e a opção de curtir vídeos.

## Funcionalidades

- **Tela Inicial:** Exibe uma lista de vídeos obtidos de uma API simulada usando `json-server`. Cada item da lista apresenta uma miniatura e o título do vídeo. Ao selecionar um vídeo, o usuário é redirecionado para a tela de detalhes desse vídeo.

- **Tela de Detalhes do Vídeo:** Permite a reprodução do vídeo escolhido via HLS, além de exibir informações adicionais como título, descrição, número de visualizações e curtidas. Os usuários têm a opção de curtir ou descurtir vídeos, atualizando a contagem de curtidas conforme necessário. A contagem de visualizações é incrementada sempre que a tela de detalhes é acessada.

- **Carregamento Esqueleto:** Implementa esqueletos de carregamento para melhorar a experiência do usuário enquanto os dados estão sendo carregados.

- **Animações:** Inclui animações para transições entre telas e para a exibição da lista de vídeos, proporcionando uma navegação mais dinâmica e agradável.

## Requisitos

- **Expo CLI:** Ferramenta essencial para gerenciar e executar o aplicativo.
- **Node.js:** Necessário para gerenciar dependências e operar o `json-server`.
- **JSON Server:** Utilizado para simular a API backend que fornece os dados dos vídeos.
- **React Native:** Framework utilizado para desenvolver o aplicativo, compatível tanto com Android quanto com iOS.

## Instruções de Configuração

### Pré-requisitos

- Instalar o [Node.js](https://nodejs.org/)
- Instalar o [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Ter o [Git](https://git-scm.com/) instalado

### Configuração do Projeto

1. **Clonar o Repositório:**

   ```bash
   git clone <url-do-repositório>
   cd <diretório-do-projeto>
   ```

2. **Instalar as Dependências:**

   No Windows, execute o script `start_project.bat` através de um duplo clique ou via linha de comando. No macOS, utilize o terminal para executar o script `./start_project.sh`.

3. **Iniciar a Aplicação:**

   No Windows, dê um duplo clique em `start_project.bat`. No macOS, execute `./start_project.sh` no terminal. Esses scripts instalam as dependências necessárias, iniciam o servidor JSON e executam o projeto Expo.

## Instruções de Configuração Alternativa

Caso os scripts `start_project.bat` (para Windows) ou `start_project.sh` (para macOS) não funcionem, siga os passos abaixo para configurar e executar o projeto manualmente:

1. **Abra um Terminal ou Prompt de Comando.**

2. **Navegue até o diretório do projeto.** Use o comando `cd` seguido pelo caminho do diretório onde o projeto foi clonado. Por exemplo:

   ```bash
   cd caminho/para/o/diretorio/do/projeto
   ```

3. **Instale as dependências do projeto.** Execute o seguinte comando para instalar todas as dependências necessárias ao projeto, incluindo as dependências legadas que podem ser necessárias para resolver conflitos de versões:

   ```bash
   npm install --legacy-peer-deps
   ```

4. **Inicie o servidor json-server.** Este servidor será usado para simular a API backend que fornece os dados dos vídeos. Execute o seguinte comando para iniciar o servidor:

   ```bash
   npx json-server --watch db.json --port 3000
   ```

5. **Inicie o projeto Expo.** O Expo CLI será usado para iniciar o projeto e abrir o aplicativo no dispositivo ou emulador. Execute o seguinte comando para iniciar o projeto Expo:

   ```bash
   npx expo start --go -c
   ```

   - `--go`: Abre automaticamente o aplicativo no dispositivo conectado ou no emulador.
   - `-c`: Limpa o cache antes de iniciar o servidor Expo.

Após seguir esses passos, o projeto deve estar configurado e pronto para ser executado. Caso encontre algum problema durante a configuração, verifique se todas as dependências foram instaladas corretamente e se o servidor json-server está rodando corretamente.

## Uso

- **Tela Inicial:** Explore a lista de vídeos disponíveis.
- **Tela de Detalhes do Vídeo:** Assista aos vídeos, visualize informações detalhadas e interaja com a funcionalidade de curtir/descurtir.

## Scripts

- **Windows:** `start_project.bat`
- **macOS:** `start_project.sh`

Esses scripts automatizam o processo de instalação das dependências, inicialização do servidor JSON e execução do projeto Expo.

## Configuração da API

O projeto utiliza o `json-server` para simular uma API RESTful que serve os dados dos vídeos. O arquivo `db.json` contém os dados simulados dos vídeos, e o servidor é acessado em `http://localhost:3000` caso esteja utilizando o simulador, substitua o localhost pelo ipv4 de sua rede.

### Endpoints do JSON Server

- **GET /videos:** Retorna todos os vídeos disponíveis.
- **GET /videos/:id:** Obtém detalhes de um vídeo específico.
- **PATCH /videos/:id:** Atualiza as informações de um vídeo específico.

### Rodar o JSON Server Manualmente

Para iniciar o servidor JSON manualmente, execute:

```bash
npx json-server --watch db.json --port 3000
```

## Solução de Problemas

- **Problemas de Dependências:** Se encontrar dificuldades na instalação das dependências, tente usar o comando `npm install --legacy-peer-deps`.
- **Problemas ao Iniciar:** Verifique se o ambiente está corretamente configurado com Node.js e Expo CLI.
- **Simulador iOS:** Certifique-se de que o Xcode e o Simulador iOS estão instalados e configurados corretamente no macOS.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE). Consulte o arquivo LICENSE para mais detalhes.
