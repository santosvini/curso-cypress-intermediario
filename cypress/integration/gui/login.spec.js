/// <reference types="Cypress" />

describe("Login", () => {
  it('Sucessfully login', () => {
    cy.login()
    cy.get('.qa-user-avatar').should('exist')
  })
})