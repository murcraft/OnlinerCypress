import BasePage from '../../../agilquest-master/cypress/pages/basePage'

const elements = {
  NAVIGATION_LINKS_TEXT: '.b-main-navigation span.b-main-navigation__text'
}

class NavigationPage  extends BasePage {

  getAllNavigationLinksText () {
    return cy.get(elements.NAVIGATION_LINKS_TEXT)
  }
}

module.exports = new NavigationPage()