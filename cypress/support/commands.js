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

Cypress.Commands.add('validarUrl', (url) => {
    cy.url().should('include', url)
})