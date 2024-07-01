# Homura Webnovels API

Homura Webnovels é uma API para uma plataforma online de leitura de webnovels. Esta documentação descreve os endpoints disponíveis para autenticação, gerenciamento de capítulos, comentários, usuários e webnovels.

## Índice

- [Instalação](#instalação)
- [Autenticação](#autenticação)
  - [Registrar](#registrar)
  - [Login](#login)
- [Capítulos](#capítulos)
  - [Criar Capítulo](#criar-capítulo)
  - [Obter Capítulo por ID](#obter-capítulo-por-id)
  - [Obter Todos os Capítulos](#obter-todos-os-capítulos)
  - [Atualizar Capítulo por ID](#atualizar-capítulo-por-id)
  - [Deletar Capítulo por ID](#deletar-capítulo-por-id)
- [Comentários](#comentários)
  - [Criar Comentário](#criar-comentário)
  - [Atualizar Comentário por ID](#atualizar-comentário-por-id)
  - [Deletar Comentário por ID](#deletar-comentário-por-id)
- [Usuários](#usuários)
  - [Listar Usuários](#listar-usuários)
- [Webnovels](#webnovels)
  - [Listar Webnovels](#listar-webnovels)
  - [Criar Webnovel](#criar-webnovel)
  - [Atualizar Webnovel por ID](#atualizar-webnovel-por-id)
  - [Deletar Webnovel por ID](#deletar-webnovel-por-id)

## Instalação
  **Requisitos**
  Node Runtime e NPM Instalados na Máquina
  **Processo**
  1- Abrir o diretório do projeto no terminal e executar npm install.
  2- Ainda no terminal, executar o comando node app.js
  3- Testar a API na interface Swagger, Postman ou qualquer outra plataforma.
## Autenticação

### Registrar

**POST /api/auth/signup**

Registra um novo usuário.


**Request Body:**
```json
{
 "username": "string",
 "password": "string",
 "role": "Autor | Leitor"
}
```
**Responses:**

- **201**: Usuário criado com sucesso.
- **400**: Erro na criação do usuário.

### Login

**POST /api/auth/login**

Autentica um usuário.

**Request Body:**

```json
{
 "username": "string",
 "password": "string"
}
```
**Responses:**

- **200**: Login bem-sucedido.
- **401**: Credenciais inválidas.

## Capítulos

### Criar Capítulo

**POST /api/chapters**

Cria um novo capítulo.

**Request Body:**
```json
{
 "title": "string",
 "content": "string",
 "webnovelId": "integer"
}
```
**Responses:**

- **201**: Capítulo criado com sucesso.
- **400**: Erro na criação do capítulo.

### Obter Capítulo por ID

**GET /api/chapters/{id}**

Obtém um capítulo pelo ID.

**Parameters:**

- `id`: integer (ID do capítulo)

**Responses:**

- **200**: Capítulo encontrado com sucesso.
- **404**: Capítulo não encontrado.

### Obter Todos os Capítulos

**GET /api/chapters**

Obtém todos os capítulos.

**Responses:**

- **200**: Lista de capítulos.
- **500**: Erro ao buscar capítulos.

### Atualizar Capítulo por ID

**PUT /api/chapters/{id}**

Atualiza um capítulo pelo ID.

**Parameters:**

- `id`: integer (ID do capítulo)

**Request Body:**
```json
{
 "title": "string",
 "content": "string"
}
```
**Responses:**

- **200**: Capítulo atualizado com sucesso.
- **404**: Capítulo não encontrado.
- **500**: Erro ao atualizar capítulo.

### Deletar Capítulo por ID

**DELETE /api/chapters/{id}**

Deleta um capítulo pelo ID.

**Parameters:**

- `id`: integer (ID do capítulo)

**Responses:**

- **200**: Capítulo deletado com sucesso.
- **404**: Capítulo não encontrado.
- **500**: Erro ao deletar capítulo.

## Comentários

### Criar Comentário

**POST /api/comments**

Cria um novo comentário.

**Request Body:**
```json
{
 "description": "string",
 "chapterId": "integer",
 "nome": "string"
}
```
**Responses:**

- **201**: Comentário criado com sucesso.
- **400**: Erro na criação do comentário.

### Atualizar Comentário por ID

**PUT /api/comments/{id}**

Atualiza um comentário pelo ID.

**Parameters:**

- `id`: integer (ID do comentário)

**Request Body:**
```json
{
 "description": "string",
 "nome": "string"
}
```
**Responses:**

- **200**: Comentário atualizado com sucesso.
- **404**: Comentário não encontrado.
- **500**: Erro ao atualizar comentário.

### Deletar Comentário por ID

**DELETE /api/comments/{id}**

Deleta um comentário pelo ID.

**Parameters:**

- `id`: integer (ID do comentário)

**Responses:**

- **200**: Comentário deletado com sucesso.
- **404**: Comentário não encontrado.
- **500**: Erro ao deletar comentário.

## Usuários

### Listar Usuários

**GET /api/users**

Lista todos os usuários.

**Responses:**

- **200**: Lista de usuários.
- **500**: Erro no servidor.

## Webnovels

### Listar Webnovels

**GET /api/webnovels**

Lista todas as webnovels.

**Responses:**

- **200**: Lista de webnovels.
- **500**: Erro no servidor.

### Criar Webnovel

**POST /api/webnovels**

Cria uma nova webnovel.

**Request Body:**
```json
{
 "title": "string",
 "description": "string"
}
```
**Responses:**

- **201**: Webnovel criada com sucesso.
- **400**: Erro na criação da webnovel.

### Atualizar Webnovel por ID

**PUT /api/webnovels/{id}**

Atualiza uma webnovel pelo ID.

**Parameters:**

- `id`: integer (ID da webnovel)

**Request Body:**
```json
{
 "title": "string",
 "description": "string"
}
```
**Responses:**

- **200**: Webnovel atualizada com sucesso.
- **404**: Webnovel não encontrada.
- **500**: Erro ao atualizar webnovel.

### Deletar Webnovel por ID

**DELETE /api/webnovels/{id}**

Deleta uma webnovel pelo ID.

**Parameters:**

- `id`: integer (ID da webnovel)

**Responses:**

- **200**: Webnovel deletada com sucesso.
- **404**: Webnovel não encontrada.
- **500**: Erro ao deletar webnovel.
- 

![1](https://github.com/GelsonCosta/HomuraNovelsAPI/assets/64416492/e6d295d4-7a33-455d-9b37-3b2f979ed6bc)  
**--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------**
![2](https://github.com/GelsonCosta/HomuraNovelsAPI/assets/64416492/72f52cb8-c852-42e5-b479-e45ae70ba867)
**--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------**
![3](https://github.com/GelsonCosta/HomuraNovelsAPI/assets/64416492/9940419d-a08a-4aca-af37-f9eb46a038d5)


**Desenvolvido por Gelson da Costa**
