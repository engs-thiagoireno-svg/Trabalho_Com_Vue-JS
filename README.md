# Hackathon Campo Real — Front-end em Vue.js

Site do **Hackathon Programação Campo Real** desenvolvido com **Vue.js 3 + Vue Router + Vite**.
Projeto da disciplina de Front-end, migrado de um site HTML/CSS estático para uma
aplicação baseada em componentes.

## Tecnologias

- Vue.js 3 (Composition API com `<script setup>`)
- Vue Router 4 (navegação entre páginas)
- Vite (build e servidor de desenvolvimento)
- HTML, CSS e JavaScript

## Funcionalidades

- **Navegação SPA** entre 4 páginas (Início, Cronograma, Palestrantes, Inscrição) com Vue Router
- **Contagem regressiva reativa** na página inicial
- **Busca/filtro** de palestrantes em tempo real
- **Formulário de inscrição** com validação de campos e **modal** de confirmação
- **Interface responsiva** (desktop, tablet e smartphone) com menu hambúrguer

## Diretivas do Vue utilizadas

- `v-for` — lista do cronograma, links do menu e cards dos palestrantes
- `v-if` / `v-else` — menu mobile, mensagens de erro, modal e resultado da busca
- `v-model` — campos do formulário e barra de busca
- `:class` (v-bind) — destaque de itens e estado de erro/menu aberto
- `@click` / `@submit.prevent` — interações e envio do formulário

## Como executar

Pré-requisito: [Node.js](https://nodejs.org) versão 20.19 ou superior.

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar em modo de desenvolvimento
npm run dev

# 3. Abrir no navegador o endereço mostrado no terminal (ex.: http://localhost:5173)
```

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Integrantes do grupo

- (Bruno Gabriel Roth, Thiago Ireno, Luis Antonio Komar )