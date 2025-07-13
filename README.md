# API de Perguntas e Respostas com IA

Backend para uma plataforma de perguntas e respostas em tempo real, potencializada com inteligência artificial do Google Gemini. Construído durante o evento NLW Agents da Rocketseat, o projeto inclui funcionalidades como **capturar perguntas por áudio** e geração de respostas inteligentes, com um setup simplificado via **Docker**.

## 💡 Tecnologias

- **Node.js com [Fastify](https://fastify.dev/)**: Um framework web de alta performance e baixa sobrecarga, ideal para construir APIs rápidas.
- **[TypeScript](https://www.typescriptlang.org/)**: Adiciona tipagem estática ao JavaScript, aumentando a segurança e a manutenibilidade do código.
- **[Drizzle ORM](https://orm.drizzle.team/)**: Um ORM "headless" e type-safe que permite interagir com o banco de dados de forma segura e intuitiva.
- **[Zod](https://zod.dev/)**: Usado para validação de schemas, garantindo que os dados que entram e saem da API estejam no formato correto.
- **[Google Gemini](https://ai.google.dev/gemini-api)**: Utilizado para geração de respostas inteligentes e transcrição de áudio, tornando a plataforma mais interativa e eficiente.
- **[Docker](https://www.docker.com/)**: Permite a criação de um ambiente de desenvolvimento e produção padronizado e isolado, simplificando o setup e o deploy da aplicação.

## 🚀 Como Executar o Projeto

Você pode executar o projeto localmente ou via Docker.

**1. Pré-requisitos:**
- Node.js (v18 ou superior)
- NPM ou um gerenciador de pacotes de sua preferência.
- Uma chave de API do Google Gemini.

**2. Instale as dependências:**
```bash
npm install
```

**3. Configure as variáveis de ambiente:**

Crie um arquivo `.env` na raiz do projeto (`server/`) a partir do exemplo `.env.example` e adicione sua chave de API do Google Gemini.


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

A API estará disponível em `http://localhost:3333`.

## 🐳 Setup com Docker

Esta configuração irá criar um container para a API e outro para o banco de dados PostgreSQL.

**1. Pré-requisitos:**
- Docker
- Docker Compose

**2. Inicie os containers:**

O comando abaixo irá construir a imagem da API e iniciar os serviços da API e do banco de dados em background. **Lembre-se de criar um arquivo `.env` com sua `GEMINI_API_KEY` para que o container da API tenha acesso.**
```bash
docker-compose up -d --build
```

**3. Execute as migrações do banco de dados:**

Com os containers em execução, execute o comando de migração dentro do container da API para criar as tabelas no banco de dados PostgreSQL.
```bash
docker-compose exec api npx drizzle-kit migrate
```

### Para parar todos os containers, execute `docker-compose down`.