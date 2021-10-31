const BasePage = require('../../pages/basePage')
const headerPage = require('../../pages/headerPage')
const bucketPage = require('../../pages/bucketPage')

const basePage = new BasePage()

const expectedTitle = 'Ваша корзина пуста'

describe('Bucket Tests', () => {

  before(() => {
    basePage.visitMainPage()
  })

  beforeEach(function () {
    cy.fixture('onlinerUsers.json').as('onlinerUsers')
  })

  it('Check bucket is empty for new user', function () {
    headerPage.clickLogin()
    cy.loginAsUser(this.onlinerUsers.registered.username, this.onlinerUsers.registered.pass)
    cy.url().should('contains', 'https://www.onliner.by/')
    headerPage.getBucketIcon().should('be.visible')
    cy.clickWithHover(headerPage.getBucketElement())
    bucketPage.getBucketTitle().should('be.visible')
      .should('contain', expectedTitle)
    bucketPage.clickLogo()
    headerPage.getMainLogoLink()
      .should('contain', Cypress.env('baseUrl'))
  })
})
