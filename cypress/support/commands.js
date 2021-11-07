// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-localstorage-commands'

const selectors = {
  LOGIN_FORM: '#auth-container',
  USERNAME_INPUT: `input[type='text']`,
  PASS_INPUT: `input[type='password']`,
  SUBMIT_BUTTON: `[type='submit']`
}

Cypress.Commands.add('loginAsUser', (username, password) => {
  cy.get(selectors.LOGIN_FORM, { timeout: 20000 }).within(($form) => {
    cy.get(selectors.USERNAME_INPUT)
      .type(username)
  })
  cy.get(selectors.LOGIN_FORM).within(($form) => {
    cy.get(selectors.PASS_INPUT)
      .type(password)
  })
  cy.get(selectors.LOGIN_FORM).within(($form) => {
    cy.get(selectors.SUBMIT_BUTTON).click()
  })
})

Cypress.Commands.add('clickWithHover', (elementSelector) => {
  cy.get(elementSelector).trigger('mouseover', { force: true })
  cy.get(elementSelector).click({ force: true })
})