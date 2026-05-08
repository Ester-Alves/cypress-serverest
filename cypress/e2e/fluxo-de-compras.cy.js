/// <reference types="cypress" />
import header from "../pages/components/header"
import loginPage from "../pages/auth/loginPage"
import homePage from "../pages/homePage"
import listaComprasPage from "../pages/listaComprasPage"
import produtoPage from "../pages/produtoPage"

describe('fluxo de compras', () => {

    beforeEach(function () {
        cy.createUser().then((user) => {
            this.user = user

            loginPage.acessarPagina()
            loginPage.fazerLogin(user.email, user.password)
        })
        cy.get('[data-testid="logout"]')
            .should('be.visible')
        cy.validarUrl('/home')
    })

    it('adiciona produto na lista pela página inicial', function () {
        homePage.adicionarProduto('Samsung 60 polegadas')
    })

    it('acessa lista de compras', function () {
        header.acessarListaCompras()
    })

    it('limpa lista de compras', function () {
        homePage.adicionarProduto('Samsung 60 polegadas')
        listaComprasPage.limparLista()
    })

    it('da lista de compras retorna à página inicial', function () {
        header.acessarListaCompras()
        listaComprasPage.clicarPaginaInicial()
    })

    it('exibe detalhes do produto', function () {
        homePage.acessarProduto('Logitech MX Vertica')
    })

    it('adiciona produto na lista pela página de detalhes', function () {
        homePage.acessarProduto('Logitech MX Vertical')
        produtoPage.adicionarProduto('Logitech MX Vertical')
    })

    it('da página de detalhes retorna à pagina inicial', function () {
        homePage.acessarProduto('Samsung 60 polegadas')
        produtoPage.clicarVoltar()
    })

    it('acessa página inicial pelo menu superior', function () {
        header.acessarListaCompras()
        header.acessarHome()
    })
})