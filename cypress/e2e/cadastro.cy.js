/// <reference types="cypress" />
import cadastroPage from "../pages/auth/cadastroPage"

describe('cadastro', () => {

    beforeEach(function () {
        cy.createUser().then((user) => {
            this.user = user
        })
        cadastroPage.acessarPagina()
    })

    it('cadastro de usuário com sucesso', () => {
        const user = {
            name: 'Ester',
            email: `teste${Date.now()}@email.com`,
            password: '654321'
        }
        cadastroPage.fazerCadastro(user.name, user.email, user.password)
        cy.contains('.alert-link', 'Cadastro realizado com sucesso')
            .should('be.visible')
    })

    it('não permite email já registrado', function () {
        cadastroPage.fazerCadastro(this.user.nome, this.user.email, this.user.password)
        cy.contains('span', 'Este email já está sendo usado')
            .should('be.visible')
    })

    it('exibe erro com nome em branco', function () {
        cadastroPage.fazerCadastro('', this.user.email, this.user.password)
        cy.contains('span', 'Nome é obrigatório')
            .should('be.visible')
    })

    it('exibe erro com email em branco', function () {
        cadastroPage.fazerCadastro(this.user.nome, '', this.user.password)
        cy.contains('span', 'Email é obrigatório')
            .should('be.visible')
    })

    it('exibe erro com senha em branco', function () {
        cadastroPage.fazerCadastro(this.user.nome, this.user.email, '')
        cy.contains('span', 'Password é obrigatório')
            .should('be.visible')
    })
})