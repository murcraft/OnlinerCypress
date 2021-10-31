const BasePage = require('./basePage')

const selectors = {
  BUCKET_TITLE: '.cart-message__title.cart-message__title_big',
  BUCKET_CAT_IMAGE: '.cart-message__image',
  LOGO: '.cart-form__image_logo'
}

class BucketPage extends BasePage {

  getBucketTitle () {
    return cy.get(selectors.BUCKET_TITLE)
  }

  getBucketImage () {
    return cy.get(selectors.BUCKET_CAT_IMAGE)
  }

  clickLogo () {
    return cy.get(selectors.LOGO).click()
  }
}

module.exports = new BucketPage()