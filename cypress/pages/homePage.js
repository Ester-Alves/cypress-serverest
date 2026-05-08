class HomePage {

    adicionarProduto(nomeProduto) {
        cy.contains(nomeProduto)
            .parent()
            .find('button', '[data-testid="adicionarNaLista"]')
            .click()
        cy.validarUrl('/minhaListaDeProdutos')
        cy.contains(nomeProduto)
            .should('be.visible')
    }
    acessarProduto(nomeProduto) {
        cy.contains(nomeProduto)
            .closest('.card')
            .contains('[data-testid="product-detail-link"]', 'Detalhes')
            .click()
        cy.get('h1')
            .should('contain', 'Detalhes do produto')
        cy.contains(nomeProduto)
            .should('be.visible')
    }
}

export default new HomePage()