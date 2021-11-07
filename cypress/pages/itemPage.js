const BasePage = require('./basePage')

const selectors = {
  ITEM_TITLE: 'h1.catalog-masthead__title',
  ITEM_OFFERS_BUTTON: '.offers-description__control > a.button_orange',
  BUCKET_BUTTON_BY_ORDER: function (orderNum) { return `.offers-list__group .offers-list__item:nth-child(${orderNum}) .offers-list__part_action a.offers-list__button_cart` },
  OFFER_PRICE_LABEL_BY_ORDER: function (orderNum) { return `.offers-list__group .offers-list__item:nth-child(${orderNum}) .offers-list__part_price div.offers-list__description_alter-other` }
}

class ItemPage extends BasePage {
  getItemTitle () {
    return cy.get(selectors.ITEM_TITLE)
  }

  clickItemOffersButton () {
    cy.get(selectors.ITEM_OFFERS_BUTTON).click()
  }

  getBucketForItem (orderNum = 1) {
    return cy.get(selectors.BUCKET_BUTTON_BY_ORDER(orderNum))
  }

  addItemToBucket (orderNum = 1) {
    this.getBucketForItem(orderNum).click()
  }

  getItemPriceForOfferNum (orderNum = 1) {
    return cy.get(selectors.OFFER_PRICE_LABEL_BY_ORDER(orderNum))
  }
}

module.exports = new ItemPage()