const elements = {
  NAVIGATION_LINKS_TEXT: '.b-main-navigation span.b-main-navigation__text'
}

class NavigationPage {

  getAllNavigationLinksText () {
    return cy.get(elements.NAVIGATION_LINKS_TEXT)
  }
}

module.exports = new NavigationPage()