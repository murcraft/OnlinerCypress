class BasePage {

  visitMainPage () {
    cy.visit('')
  }

  getCurrentUrl () {
    return cy.url()
  }

  scrollToTopPage () {
    cy.scrollTo('top')
  }
}

module.exports = BasePage