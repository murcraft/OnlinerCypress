const basePage = require('../../pages/basePage')
const mainPage = require('../../pages/mainPage')

const expectedTitle = 'Ваша корзина пуста'

describe('Bucket Tests', () => {

  before(() => {
    basePage.visitMainPage()
  })

  beforeEach(function () {
    cy.fixture('onlinerUsers.json').as('onlinerUsers')
  })

  it('Check bucket is empty for new user', function () {
    mainPage.loginAsUser(this.onlinerUsers.registered.username, this.onlinerUsers.registered.pass)
    cy.url().should('contains', 'https://www.onliner.by/')
    mainPage.getBucketIcon().click({ force: true })
    mainPage.getBucketTitle().should('be.visible')
      .should('contain', expectedTitle)
  })
})
