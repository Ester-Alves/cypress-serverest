
Cypress.Commands.add('login', (email, password) => {
    cy.visit('/')
    if (email) {
        cy.get('[data-testid="email"]').type(email)
    }
    if (password) {
        cy.get('[data-testid="senha"]').type(password)
    }
    cy.get('[data-testid="entrar"]').click()
})

Cypress.Commands.add('createUser', () => {
    const user = {
        administrador: 'false',
        email: `teste${Date.now()}@email.com`,
        nome: 'Ester',
        password: '123456'
    }

    return cy.request({
        method: 'POST',
        url: `${Cypress.env('apiUrl')}/usuarios`,
        body: user
    }).then((response) => {
        expect(response.status).to.eq(201)
        return user
    })
})

Cypress.Commands.add('cadastro', (name, email, password) => {
    cy.visit('/cadastrarusuarios')
    if (name) {
        cy.get('#nome').type(name)
    }
    if (email) {
        cy.get('#email').type(email)
    }
    if (password) {
        cy.get('#password').type(password)
    }
    cy.get('[data-testid="cadastrar"]').click()
})

Cypress.Commands.add('adicionaProdutoNaLista', (nomeProduto) => {
    cy.contains(nomeProduto)
        .parent()
        .find('button', '[data-testid="adicionarNaLista"]')
        .click()
    cy.contains(nomeProduto)
        .should('be.visible')
})

Cypress.Commands.add('adicionaProdutoNoDetalhe', (nomeProduto) => {
    cy.get('[data-testid="adicionarNaLista"]')
        .click()
    cy.contains(nomeProduto)
        .should('be.visible')
})

Cypress.Commands.add('acessaLista', () => {
    cy.get('[data-testid="lista-de-compras"]')
        .click()
    cy.contains('h1', 'Lista de Compras')
        .should('be.visible')
})

Cypress.Commands.add('acessaProduto', (nomeProduto) => {
    cy.contains(nomeProduto)
        .closest('.card')
        .contains('[data-testid="product-detail-link"]', 'Detalhes')
        .click()
    cy.contains(nomeProduto)
        .should('be.visible')
})

Cypress.Commands.add('voltaParaHome', () => {
    cy.get('body').then(($body) => {
        if ($body.find('[data-testid="paginaInicial"]').length) {
            cy.get('[data-testid="paginaInicial"]').click()
        } else {
            cy.get('[data-testid="voltarHome"]').click()
        }
    })
    cy.contains('h1', 'Serverest Store')
        .should('be.visible')
})



// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
