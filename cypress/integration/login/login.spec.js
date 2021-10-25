const BasePage = require('../../pages/basePage')
const mainPage = require('../../pages/mainPage')
const loginPage = require('../../pages/loginPage')
const navigationPage = require('../../pages/navigationPage')

const basePage = new BasePage()

const baseUrl = 'https://www.onliner.by/'
const navLinks = ['Каталог', 'Новости', 'Автобарахолка', 'Дома и квартиры', 'Услуги', 'Барахолка', 'Форум']

describe('Login Tests', () => {
  before(() => {
    basePage.visitMainPage()
  })

  beforeEach(function () {
    cy.fixture('onlinerUsers.json').as('onlinerUsers')
  })

  it('check Navigation links presence', function () {
    navigationPage.getAllNavigationLinksText().then(($els) => {
      const linkText = Array.from($els, el => el.innerText)
      expect(linkText).to.deep.equal(navLinks, `Links ${navLinks} are not present`)
    })
  })

  it('check already registered user is logged', function () {
    basePage.clickLogin()
    loginPage.setUsername(this.onlinerUsers.registered.username)
    loginPage.setPassword(this.onlinerUsers.registered.pass)
    loginPage.clickSubmit()

    basePage.getCurrentUrl().should('contains', baseUrl)
    basePage.getLoginButton()
      .should('not.be.visible')
    mainPage.getBucketIcon()
      .should('not.be.visible')
  })
})
