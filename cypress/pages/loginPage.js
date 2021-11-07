const BasePage = require('./basePage')

const selectors = {
  LOGIN_FORM: '#auth-container',
  USERNAME_INPUT: `input[type='text']`,
  PASS_INPUT: `input[type='password']`,
  SUBMIT_BUTTON: `[type='submit']`,
}

class LoginPage extends BasePage {
  setUsername (username) {
    cy.get(selectors.LOGIN_FORM, { timeout: 20000 }).within(($form) => {
      cy.get(selectors.USERNAME_INPUT)
        .type(username)
    })
  }

  getUsername () {
    return cy.get(selectors.LOGIN_FORM).within(($form) => {
      cy.get(selectors.USERNAME_INPUT)
    })
  }

  setPassword (password) {
    cy.get(selectors.LOGIN_FORM).within(($form) => {
      cy.get(selectors.PASS_INPUT)
        .type(password, { log: false })
    })
  }

  clickSubmit () {
    cy.get(selectors.LOGIN_FORM).within(($form) => {
      cy.get(selectors.SUBMIT_BUTTON).click()
    })
  }
}

module.exports = new LoginPage()