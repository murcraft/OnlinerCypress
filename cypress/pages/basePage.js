const elements = {
  LOGIN_BUTTON: `//div[contains(@class, 'auth-bar__item')][text()='Вход']`
}

class BasePage {

  visitMainPage () {
    cy.visit('/')
  }

  visitUsers () {
    cy.visit('/users')
  }

  clickLogin () {
    cy.xpath(elements.LOGIN_BUTTON).click()
  }

  getLoginButton () {
    return cy.xpath(elements.LOGIN_BUTTON)
  }
}

module.exports = new BasePage()