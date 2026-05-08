# Automação de Testes E2E com Cypress

## Sobre o projeto

Este projeto foi desenvolvido com o objetivo de praticar e demonstrar habilidades em automação de testes end-to-end utilizando o *Cypress*. 
Os testes simulam o comportamento real do usuário em um fluxo de navegação e compras, cobrindo as principais funcionalidades disponíveis na aplicação.
O projeto utiliza o padrão Page Object Model (POM) para melhorar a organização, reutilização e manutenção dos testes automatizados.

---

## Tecnologias/práticas utilizadas

- JavaScript
- Cypress
- Node.js
- Page Object Model (POM)

---

## Estrutura do projeto

cypress/

├── e2e/             # Testes automatizados
├── fixtures/        # Dados mockados
├── support/         # Comandos customizados e configurações
├── pages/           
    ├── auth/        # Páginas de autenticação
    ├── components   # Componentes reutilizáveis
    ├──  ...         # Demais páginas da aplicação

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

- Cadastro e login de usuário

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

- A funcionalidade de carrinho ainda não está disponível na aplicação utilizada para os testes, portanto não foi incluída na automação do projeto.

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