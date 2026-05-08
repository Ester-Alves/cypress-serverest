class LoginPage {
    acessarPagina() {
        cy.visit('/login')
    }
    preencherEmail(email) {
        if (email) {
            cy.get('[data-testid="email"]').type(email)
        }
    }
    preencherSenha(senha) {
        if (senha) {
            cy.get('[data-testid="senha"]').type(senha)
        }
    }
    clicarEntrar() {
        cy.get('[data-testid="entrar"]').click()
    }

    fazerLogin(email, senha) {
        this.preencherEmail(email)
        this.preencherSenha(senha)
        this.clicarEntrar()
    }
}

export default new LoginPage()