const BasePage = require('../../pages/basePage')
const headerPage = require('../../pages/headerPage')
const bucketPage = require('../../pages/bucketPage')
const searchItemsPage = require('../../pages/searchItemsPage')
const itemPage = require('../../pages/itemPage')

const basePage = new BasePage()

const expectedBucketTitle = 'Ваша корзина пуста'
const itemName = 'Macbook Air 13'
const expectedTotalPrice = '1 товар на сумму: '
const itemsCount = 1

describe('Bucket Tests', () => {
  before(() => {
    basePage.visitMainPage()
  })

  beforeEach(function () {
    cy.fixture('onlinerUsers.json').as('onlinerUsers')
  })

  it.skip('Check bucket is empty for new user', function () {
    headerPage.clickLogin()
    cy.loginAsUser(this.onlinerUsers.registered.username, this.onlinerUsers.registered.pass)
    cy.url().should('contains', 'https://www.onliner.by/')
    headerPage.getBucketIcon().should('be.visible')
    cy.clickWithHover(headerPage.getBucketElement())
    bucketPage.getBucketTitle().should('be.visible')
      .should('contain', expectedBucketTitle)
    bucketPage.clickLogo()
    headerPage.getMainLogoLink()
      .should('contain', Cypress.env('baseUrl'))
  })

  it('Add/remove an item from the bucket', function () {
    searchItemsPage.openItemByName(itemName)
    itemPage.getItemTitle()
      .should('contain', itemName)
    itemPage.clickItemOffersButton()
    itemPage.getItemPriceForOfferNum()
      .then(($price) => {
        const itemPrice = $price.text()
        itemPage.getBucketForItem()
          .should('contain', 'В корзину')
        itemPage.addItemToBucket()
        itemPage.getBucketForItem()
          .should('contain', 'В корзине')
        headerPage.scrollToTopPage()
        headerPage.getBucketCounter()
          .should('contain', itemsCount)
        headerPage.clickBucketIcon(false)
        bucketPage.getItemsTotalPrice()
          .then(($bucketPrice) => {
            expect($bucketPrice.text().trim(), expectedTotalPrice + itemPrice.trim())
          })
      })
    bucketPage.clickLogo()
    headerPage.getBucketCounter()
      .should('contain', itemsCount)
    headerPage.clickBucketIcon(false)
    bucketPage.getDeleteItem()
    bucketPage.getItemsTotalPrice()
      .should('not.exist')
    bucketPage.clickLogo()
    headerPage.getBucketCounter()
      .should('not.exist')
  })
})
