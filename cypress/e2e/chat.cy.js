describe('Chat Interface Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('should submit a question and receive a response', () => {
        cy.get('#question-input').type('What are Altibbe core values?')
        cy.get('#submit-btn').click()
        cy.get('#response-area', { timeout: 10000 }).should('contain', 'integrity')
    })

    it('should show error for empty question', () => {
        cy.get('#submit-btn').click()
        cy.get('#error-message').should('contain', 'Please enter a question')
    })
})