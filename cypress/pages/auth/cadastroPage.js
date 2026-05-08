class CadastroPage {
    acessarPagina() {
        cy.visit('/cadastrarusuarios')
    }
    preencherNome(nome) {
        if (nome) {
            cy.get('#nome')
                .type(nome)
        }
    }
    preencherEmail(email) {
        if (email) {
            cy.get('#email')
                .type(email)
        }
    }
    preencherSenha(senha) {
        if (senha) {
            cy.get('#password')
                .type(senha)
        }
    }
    clicarCadastrar() {
        cy.get('[data-testid="cadastrar"]')
            .click()
    }

    fazerCadastro(nome, email, senha) {
        this.preencherNome(nome)
        this.preencherEmail(email)
        this.preencherSenha(senha)
        this.clicarCadastrar()
    }
}

export default new CadastroPage()