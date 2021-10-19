const basePage = require('../../pages/basePage')
const loginPage = require('../../pages/loginPage')
const navigationPage = require('../../pages/navigationPage')

describe('Login Tests', () => {
  beforeEach(function () {
    cy.fixture('onlinerUsers.json').as('onlinerUsers')
  })

  beforeEach(() => {
    basePage.visitMainPage()
  })

  it('check Navigation links and login', function () {
    navigationPage.getAllNavigationLinksText()
      .should('be.visible')
      .should('contain', 'Каталог')
      .should('contain', 'Новости')
      .should('contain', 'Автобарахолка')
      .should('contain', 'Дома и квартиры')
      .should('contain', 'Услуги')
      .should('contain', 'Барахолка')
      .should('contain', 'Форум')

    basePage.clickLogin()
    loginPage.setUsername(this.onlinerUsers.registered.username)
    loginPage.setPassword(this.onlinerUsers.registered.pass)
    loginPage.clickSubmit()

    basePage.getLoginButton()
      .should('not.be.visible')
  })
})
