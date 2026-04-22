/// <reference types="cypress" />

describe('login', () => {

  beforeEach(function () {
    cy.createUser().then((user) => {
      this.user = user
    })
  })

  it('login com sucesso', function () {
    cy.login(this.user.email, this.user.password)
    cy.get('[data-testid="logout"]')
      .should('be.visible')
  })

  it('exibe erro com email não cadastrado', function () {
    cy.login('teste@ester.com', this.user.password)
    cy.contains('span', 'Email e/ou senha inválidos')
      .should('be.visible')

  })

  it('exibe erro com email inválido', function () {
    cy.login('ester@c', this.user.password)
    cy.contains('span', 'Email deve ser um email válido')
      .should('be.visible')

  })

  it('exibe erro com senha incorreta', function () {
    cy.login(this.user.email, '54321')
    cy.contains('span', 'Email e/ou senha inválidos')
      .should('be.visible')

  })

  it('exibe erro com email em branco', function () {
    cy.login('', this.user.password)
    cy.contains('span', 'Email é obrigatório')
      .should('be.visible')

  })

  it('exibe erro com senha em branco', function () {
    cy.login(this.user.email, '')
    cy.contains('span', 'Password é obrigatório')
      .should('be.visible')

  })

})