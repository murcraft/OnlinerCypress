const user = {
  username: 'ogulikss@gmail.com',
  pass: 'pop1966qqq'
}
const elements = {
  LOGIN_BUTTON: `//div[contains(@class, 'auth-bar__item')][text()='Вход']`,
  LOGIN_FORM: '#auth-container',
  USERNAME_INPUT: `input[type='text']`,
  PASS_INPUT: `input[type='password']`,
  SUBMIT_BUTTON: `[type='submit']`,
}

describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('login the main page', () => {
    cy.xpath(elements.LOGIN_BUTTON).click()

    cy.get(elements.LOGIN_FORM).within(($form) => {
      cy.get(elements.USERNAME_INPUT)
        .type(user.username)
        .should('have.value', user.username)
      cy.get(elements.PASS_INPUT)
        .type(user.pass)
        .should('have.value', user.pass)
      cy.get(elements.SUBMIT_BUTTON).click()
    })
  })
})
