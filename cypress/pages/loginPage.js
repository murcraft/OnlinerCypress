const BasePage = require('./basePage')

const elements = {
  LOGIN_FORM: '#auth-container',
  USERNAME_INPUT: `input[type='text']`,
  PASS_INPUT: `input[type='password']`,
  SUBMIT_BUTTON: `[type='submit']`,
}

class LoginPage extends BasePage {
  setUsername (username) {
    cy.get(elements.LOGIN_FORM, { timeout: 20000 }).within(($form) => {
      cy.get(elements.USERNAME_INPUT)
        .type(username)
    })
  }

  getUsername () {
    return cy.get(elements.LOGIN_FORM).within(($form) => {
      cy.get(elements.USERNAME_INPUT)
    })
  }

  setPassword (password) {
    cy.get(elements.LOGIN_FORM).within(($form) => {
      cy.get(elements.PASS_INPUT)
        .type(password)
    })
  }

  clickSubmit () {
    cy.get(elements.LOGIN_FORM).within(($form) => {
      cy.get(elements.SUBMIT_BUTTON).click()
    })
  }
}

module.exports = new LoginPage()