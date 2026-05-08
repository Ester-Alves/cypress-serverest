class Header {
    acessarHome() {
        cy.get('[data-testid="home"]')
            .click()
        cy.validarUrl('/home')

    }
    acessarListaCompras() {
        cy.get('[data-testid="lista-de-compras"]')
            .click()
        cy.validarUrl('/minhaListaDeProdutos')
    }
}

export default new Header()