class BasePage {

  visitMainPage () {
    cy.visit('')
  }

  getCurrentUrl () {
    return cy.url()
  }
}

module.exports = BasePage