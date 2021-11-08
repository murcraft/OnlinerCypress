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
const loginPage = require('../pages/loginPage')
const headerPage = require('../pages/headerPage')

Cypress.Commands.add('loginAsUser', (username, password) => {
  headerPage.clickLogin()
  loginPage.setUsername(username)
  loginPage.setPassword(password)
  loginPage.clickSubmit()
})

Cypress.Commands.add('clickWithHover', (elementSelector) => {
  cy.get(elementSelector).trigger('mouseover', { force: true })
  cy.get(elementSelector).click({ force: true })
})