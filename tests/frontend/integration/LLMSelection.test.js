describe('LLM Selection Integration', () => {
    it('should allow switching between different LLM providers', () => {
        cy.visit('/')
        cy.get('#settings-btn').click()
        cy.get('#llm-select').select('Anthropic')
        cy.get('#save-settings').click()
        cy.get('#success-message').should('contain', 'Settings saved')
    })
})