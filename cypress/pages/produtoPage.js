class ProdutoPage {

    confirmarPaginaProduto(nomeProduto) {
        cy.get('h1')
            .should('contain', 'Detalhes do produto')
        cy.contains(nomeProduto)
            .should('be.visible')
    }
    adicionarProduto(nomeProduto) {
        this.confirmarPaginaProduto(nomeProduto)
        cy.get('[data-testid="adicionarNaLista"]')
            .click()

        cy.validarUrl('/minhaListaDeProdutos')
        cy.contains(nomeProduto)
            .should('be.visible')
    }
    clicarVoltar() {
        cy.get('[data-testid="voltarHome"]')
            .click()
        cy.validarUrl('/home')
    }
}

export default new ProdutoPage()