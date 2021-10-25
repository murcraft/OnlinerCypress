const BasePage = require('./basePage')
const loginPage = require('./loginPage')

const basePage = new BasePage()

const selectors = {
  bucketIcon: '#cart-desktop',
  bucketTitle: '.cart-message__title cart-message__title_big'
}

class MainPage extends BasePage {
  loginAsUser (username, pass) {
    basePage.clickLogin()
    loginPage.setUsername(username)
    loginPage.setPassword(pass)
    loginPage.clickSubmit()
  }

  getBucketIcon () {
    return cy.get(selectors.bucketIcon)
  }

  getBucketTitle () {
    return cy.get(selectors.bucketTitle)
  }
}

module.exports = new MainPage()