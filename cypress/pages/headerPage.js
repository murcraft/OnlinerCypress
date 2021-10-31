const BasePage = require('./basePage')

const selectors = {
  BUCKET_ICON: '#cart-desktop a',
  LOGIN_BUTTON: `//div[contains(@class, 'auth-bar__item')][text()='Вход']`,
  MAIN_LOGO: '.b-top-logo > a'
}

class HeaderPage extends BasePage {

  clickLogin () {
    cy.xpath(selectors.LOGIN_BUTTON).click()
  }

  getLoginButton () {
    return cy.xpath(selectors.LOGIN_BUTTON)
  }

  getBucketElement () {
    return selectors.BUCKET_ICON
  }

  getBucketIcon () {
    return cy.get(selectors.BUCKET_ICON)
  }

  getMainLogoLink () {
    return cy.get(selectors.MAIN_LOGO).invoke('attr', 'href')  }
}

module.exports = new HeaderPage()