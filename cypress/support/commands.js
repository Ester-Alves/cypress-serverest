
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
