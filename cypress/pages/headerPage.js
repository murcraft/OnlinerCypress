const BasePage = require('./basePage')

const selectors = {
  BUCKET_ICON: '#cart-desktop a',
  BUCKET_ICON_UNAUTH: '#userbar .auth-bar__item--cart',
  LOGIN_BUTTON: `//div[contains(@class, 'auth-bar__item')][text()='Вход']`,
  MAIN_LOGO: '.b-top-logo > a',
  SEARCH_CATALOG_FORM: '.fast-search__form',
  SEARCH_CATALOG_INPUT: '.fast-search__input',
  BUCKET_ICON_COUNTER: '.auth-bar__counter',
  BUCKET_ICON_COUNTER_UNAUTH: '.auth-bar__counter'
}

class HeaderPage extends BasePage {

  clickLogin () {
    cy.xpath(selectors.LOGIN_BUTTON).click()
  }

  getLoginButton () {
    return cy.xpath(selectors.LOGIN_BUTTON)
  }

  getBucketElement (isAuth) {
    return isAuth ? selectors.BUCKET_ICON : selectors.BUCKET_ICON_UNAUTH
  }

  clickBucketIcon (isAuth = true) {
    cy.clickWithHover(this.getBucketElement(isAuth))
  }

  getBucketIcon () {
    return cy.get(selectors.BUCKET_ICON)
  }

  getMainLogoLink () {
    return cy.get(selectors.MAIN_LOGO).invoke('attr', 'href')
  }

  typeGoodInCatalogSearch (itemName) {
    cy.get(selectors.SEARCH_CATALOG_FORM).click({ force: true })
    cy.get(selectors.SEARCH_CATALOG_INPUT).type(itemName, { delay: 0 })
  }

  getBucketCounter (isAuth = true) {
    return isAuth ? cy.get(selectors.BUCKET_ICON_COUNTER) : cy.get(selectors.BUCKET_ICON_COUNTER_UNAUTH)
  }
}

module.exports = new HeaderPage()