describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which include '/commands/actions'
    cy.url().should('include', '/commands/actions')

    //Get an input, type into it
    cy.get('.action-email').type('fake@email.com')

    // Verify that the email value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})