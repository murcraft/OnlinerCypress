const BasePage = require('./basePage')
const headerPage = require('./headerPage')

const selectors = {
  SEARCH_MODAL_FRAME: 'iframe.modal-iframe',
  SEARCH_RESULT: function (orderNum) { return `.search__result:nth-child(${orderNum}) .product__title > a`}
}

class SearchItemsPage extends BasePage {
  openItemByName (itemName, orderNum = 1) {
    headerPage.typeGoodInCatalogSearch(itemName)
    cy.wait(3000)
    cy.get(selectors.SEARCH_MODAL_FRAME).then($iframe => {
      const $body = $iframe.contents().find('body')
      cy
        .wrap($body)
        .find(selectors.SEARCH_RESULT(orderNum), { includeShadowDom: true })
        .contains(itemName, { matchCase: false })
        .click({ force: true })

    })

  }
}

module.exports = new SearchItemsPage()