const BasePage = require('./basePage')

const selectors = {
  BUCKET_TITLE: '.cart-message__title.cart-message__title_big',
  BUCKET_CAT_IMAGE: '.cart-message__image',
  LOGO: '.cart-form__image_logo',
  TOTAL_PRICE_LABEL: '.cart-container .cart-form__description_extended',
  REMOVE_ITEM_BUTTON: '.cart-form__offers-part_remove .cart-form__button_remove'
}

class BucketPage extends BasePage {

  getBucketTitle () {
    return cy.get(selectors.BUCKET_TITLE)
  }

  getBucketImage () {
    return cy.get(selectors.BUCKET_CAT_IMAGE)
  }

  clickLogo () {
    cy.get(selectors.LOGO).click()
  }

  getItemsTotalPrice () {
    return cy.get(selectors.TOTAL_PRICE_LABEL)
  }

  getDeleteItem() {
    cy.clickWithHover(selectors.REMOVE_ITEM_BUTTON)
  }
}

module.exports = new BucketPage()