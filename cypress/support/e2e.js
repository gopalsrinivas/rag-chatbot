import './commands'

beforeEach(() => {
    cy.intercept('POST', '/api/chat', { fixture: 'chatResponse.json' }).as('chatRequest')
})