# API de Perguntas e Respostas

Backend para uma plataforma de perguntas e respostas em tempo real, construído durante o evento NLW Agents da Rocketseat.

## 💡 Tecnologias

- **Node.js com [Fastify](https://fastify.dev/)**: Um framework web de alta performance e baixa sobrecarga, ideal para construir APIs rápidas.
- **[TypeScript](https://www.typescriptlang.org/)**: Adiciona tipagem estática ao JavaScript, aumentando a segurança e a manutenibilidade do código.
- **[Drizzle ORM](https://orm.drizzle.team/)**: Um ORM "headless" e type-safe que permite interagir com o banco de dados de forma segura e intuitiva.
- **[Zod](https://zod.dev/)**: Usado para validação de schemas, garantindo que os dados que entram e saem da API estejam no formato correto.

## 🚀 Como Executar o Projeto

Você pode executar o projeto localmente ou via Docker.

**1. Pré-requisitos:**
- Node.js (v18 ou superior)
- NPM ou um gerenciador de pacotes de sua preferência.

**2. Instale as dependências:**
```bash
npm install
```

**3. Configure as variáveis de ambiente:**

Crie um arquivo `.env` na raiz do projeto (`server/`) a partir do exemplo `.env.example`

**4. Execute as migrações do banco de dados:**

Este comando criará as tabelas no banco de dados com base nos schemas definidos.
```bash
npx drizzle-kit migrate
```

**5. Inicie o servidor:**

O servidor irá iniciar em modo de desenvolvimento, reiniciando a cada alteração.
```bash
npm run dev
```

Pronto! A API estará disponível em `http://localhost:3333`.

## 🐳 Setup com Docker

Esta configuração irá criar um container para a API e outro para o banco de dados PostgreSQL.

**1. Pré-requisitos:**
- Docker
- Docker Compose

**2. Inicie os containers:**

O comando abaixo irá construir a imagem da API e iniciar os serviços da API e do banco de dados em background. Ele utilizará as variáveis de ambiente definidas em `.env.example`.
```bash
docker-compose up -d --build
```

**3. Execute as migrações do banco de dados:**

Com os containers em execução, execute o comando de migração dentro do container da API para criar as tabelas no banco de dados PostgreSQL.
```bash
docker-compose exec api npx drizzle-kit migrate
```

**4. Pronto!**

A API estará disponível em `http://localhost:3333`. Para parar todos os containers, execute `docker-compose down`.

## Endpoints da API

### Salas (`/rooms`)

*   **`POST /rooms`**: Cria uma nova sala.
    *   **Body**: `{ "name": "string", "description": "string" (opcional) }`
*   **`GET /rooms`**: Lista todas as salas com a contagem de perguntas.

### Perguntas (`/rooms/:roomId/questions`)

*   **`POST /rooms/:roomId/questions`**: Cria uma nova pergunta em uma sala específica.
    *   **Body**: `{ "question": "string" }`
*   **`GET /rooms/:roomId/questions`**: Lista todas as perguntas de uma sala.