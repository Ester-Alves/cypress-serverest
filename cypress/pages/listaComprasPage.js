class ListaComprasPage {

    limparLista() {
        cy.validarUrl('/minhaListaDeProdutos')
        cy.get('[data-testid="limparLista"]')
            .click()
        cy.get('[data-testid="shopping-cart-empty-message"]')
            .should('be.visible')
    }
    clicarPaginaInicial() {
        cy.get('[data-testid="paginaInicial"]')
            .click()
        cy.validarUrl('/home')
    }
}

export default new ListaComprasPage()