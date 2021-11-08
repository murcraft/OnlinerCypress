const BasePage = require('../../pages/basePage')
const mainPage = require('../../pages/headerPage')
const loginPage = require('../../pages/loginPage')
const headerPage = require('../../pages/headerPage')
const navigationPage = require('../../pages/navigationPage')

const basePage = new BasePage()
const navLinks = ['Каталог', 'Новости', 'Автобарахолка', 'Дома и квартиры', 'Услуги', 'Барахолка', 'Форум']

describe('Login Tests', () => {
  before(() => {
    basePage.visitMainPage()
  })

  beforeEach(function () {
    cy.fixture('onlinerUsers.json').as('onlinerUsers')
    cy.restoreLocalStorage()
  })

  afterEach(function () {
    cy.saveLocalStorage()
  })

  it('check Navigation links presence', function () {
    navigationPage.getAllNavigationLinksText().then(($els) => {
      const linkText = Array.from($els, el => el.innerText)
      expect(linkText).to.deep.equal(navLinks, `Links ${navLinks} are not present`)
    })
  })

  it('check already registered user is logged', function () {
    headerPage.clickLogin()
    loginPage.setUsername(this.onlinerUsers.registered.username)
    loginPage.setPassword(this.onlinerUsers.registered.pass)
    loginPage.clickSubmit()
    basePage.getCurrentUrl().should('contains', Cypress.env('baseUrl'))
  })

  it('check user should not be logged again', function () {
    headerPage.getLoginButton()
      .should('not.exist')
    mainPage.getBucketIcon()
      .should('be.visible')
    headerPage.openUserProfile()
    headerPage.getLogOutProfile()
  })
})
