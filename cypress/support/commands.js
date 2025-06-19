Cypress.Commands.add('login', (email, password) => {
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('#login-btn').click()
})

Cypress.Commands.add('checkResponseQuality', (question, expectedKeywords) => {
    cy.get('#question-input').type(question)
    cy.get('#submit-btn').click()
    expectedKeywords.forEach(keyword => {
        cy.get('#response-area').should('contain', keyword)
    })
})