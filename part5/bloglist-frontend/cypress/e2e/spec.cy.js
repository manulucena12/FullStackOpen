describe('Testing Blogs E2E', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173/')
    cy.request('POST', 'http://localhost:3002/api/reset')
    const testingUser = {
      username: 'manulucena12',
      password: 'mypassword'
    }
    cy.request('POST', 'http://localhost:3002/api/users', testingUser)
  })
  it.skip('Login form is rendered', ()=>{
    cy.contains('Login Form')
  })
  it('succeeds with correct credentials', function() {
    cy.get('[placeholder = "Username"]').type('manulucena12')
    cy.get('[placeholder = "Password"]').type('mypassword')
    cy.get('button').contains('Login').click()
  })
  it('fails with wrong credentials', function() {
    cy.intercept('POST', '/api/login').as('loginRequest')
    cy.get('[placeholder = "Username"]').type('manulucena1')
    cy.get('[placeholder = "Password"]').type('mypassword')
    cy.get('button').contains('Login').click()
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 400)
  })
  describe('When logged in', function() {
    beforeEach(function() {
      cy.get('[placeholder = "Username"]').type('manulucena12')
      cy.get('[placeholder = "Password"]').type('mypassword')
      cy.get('button').contains('Login').click()
    })

    it('A blog can be created', function() {
      cy.contains('Create a new blog').click()
      cy.get('[placeholder = "Title"]').type('FullStackOpen')
      cy.get('[placeholder = "Author"]').type('Helsinki')
      cy.get('button').contains('Create Blog').click()
    })
  })
})