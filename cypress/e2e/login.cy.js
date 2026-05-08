/// <reference types="cypress" />
import loginPage from "../pages/auth/loginPage"

describe('login', () => {

  beforeEach(function () {
    cy.createUser().then((user) => {
      this.user = user
    })
    loginPage.acessarPagina()
  })

  it('login com sucesso', function () {
    loginPage.fazerLogin(this.user.email, this.user.password)
    cy.get('[data-testid="logout"]')
      .should('be.visible')
  })

  it('exibe erro com email não cadastrado', function () {
    loginPage.fazerLogin('teste@ester.com', this.user.password)
    cy.contains('span', 'Email e/ou senha inválidos')
      .should('be.visible')
  })

  it('exibe erro com email inválido', function () {
    loginPage.fazerLogin('ester@c', this.user.password)
    cy.contains('span', 'Email deve ser um email válido')
      .should('be.visible')
  })

  it('exibe erro com senha incorreta', function () {
    loginPage.fazerLogin(this.user.email, '54321')
    cy.contains('span', 'Email e/ou senha inválidos')
      .should('be.visible')
  })

  it('exibe erro com email em branco', function () {
    loginPage.fazerLogin('', this.user.password)
    cy.contains('span', 'Email é obrigatório')
      .should('be.visible')
  })

  it('exibe erro com senha em branco', function () {
    loginPage.fazerLogin(this.user.email, '')
    cy.contains('span', 'Password é obrigatório')
      .should('be.visible')
  })
})