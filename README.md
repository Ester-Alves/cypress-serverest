# Automação de Testes E2E com Cypress

## Sobre o projeto

Este projeto foi desenvolvido com o objetivo de praticar e demonstrar habilidades em automação de testes end-to-end utilizando o *Cypress*.
Os testes simulam o comportamento real do usuário em um fluxo de navegação e compras, cobrindo as principais funcionalidades disponíveis na aplicação.

---

## Tecnologias utilizadas

- JavaScript
- Cypress
- Node.js

---

## Estrutura do projeto

cypress/

├── e2e/             # Testes automatizados

├── fixtures/        # Dados mockados

├── support/         # Comandos customizados e configurações


docs/

├── casos-de-teste-e2e.xlsx     # Documentação dos testes

---

## Como executar o projeto

### Pré-requisitos

- Node.js instalado

### Instalação

_bash_

npm install

### Executar os testes

_bash_

npx cypress open

ou modo headless

_bash_

npx cypress run

---

## Testes implementados

### Autenticação

- Login de usuário

### Navegação

- Acesso à lista de compras
- Retorno à página inicial

### Fluxo de Compras

- Adicionar produto pela página inicial
- Acessar lista de compras
- Limpar lista de compras
- Visualizar detalhes do produto
- Adicionar produto pela página de detalhes
- Navegação entre páginas

---

## Observações

- A funcionalidade de carrinho ainda está em desenvolvimento na aplicação e não faz parte dos testes automatizados neste momento.

---

## Casos de teste

Os casos de teste estão documentados no arquivo:

- docs/casos-de-teste-e2e.xlsx

---

## Objetivo

Praticar automação de testes, organização de cógido e boas práticas utilizando Cypress.

---

## Autor

Desenvolvido por Ester-Alves