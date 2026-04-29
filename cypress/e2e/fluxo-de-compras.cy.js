/// <reference types="cypress" />

describe('fluxo de compras', () => {

    beforeEach(function () {
        cy.createUser().then((user) => {
            this.user = user

            cy.login(user.email, user.password)
        })
        cy.get('[data-testid="logout"]')
            .should('be.visible')
    })

    it('adiciona produto na lista pela página inicial', function () {
        cy.adicionaProdutoNaLista('Samsung 60 polegadas')
    })

    it('acessa lista de compras', function () {
        cy.acessaLista()
    })

    it('limpa lista de compras', function () {
        cy.adicionaProdutoNaLista('Logitech MX Vertical')
        cy.get('[data-testid="limparLista"]')
            .click()
        cy.get('[data-testid="shopping-cart-empty-message"]')
            .should('be.visible')
    })

    it('da lista de compras retorna à página inicial', function () {
        cy.acessaLista()
        cy.voltaParaHome()
    })

    it('exibe detalhes do produto', function () {
        cy.acessaProduto('Logitech MX Vertica')
    })

    it('adiciona produto na lista pela página de detalhes', function () {
        cy.acessaProduto('Novo Produto da Lenovo')
        cy.adicionaProdutoNoDetalhe('Novo Produto da Lenovo')
    })

    it('da página de detalhes retorna à pagina inicial', function () {
        cy.acessaProduto('TVZ Sampitoxiba')
        cy.voltaParaHome()
    })
})
