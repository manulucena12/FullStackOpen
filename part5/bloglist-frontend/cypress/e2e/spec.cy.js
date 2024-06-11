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
    it('Like button can be pushed', () => {
      cy.contains('Create a new blog').click()
      cy.get('[placeholder = "Title"]').type('FullStackOpen')
      cy.get('[placeholder = "Author"]').type('Helsinki')
      cy.get('button').contains('Create Blog').click()
      cy.get('button').contains('Show details').click()
      cy.get('button').contains('Like').click()
    })
    it('A blog can be deleted', ()=>{
      cy.contains('Create a new blog').click()
      cy.get('[placeholder = "Title"]').type('FullStackOpen')
      cy.get('[placeholder = "Author"]').type('Helsinki')
      cy.get('button').contains('Create Blog').click()
      cy.get('button').contains('Show details').click()
      cy.get('button').contains('Delete').click()
    })
    it('A blog only can be delete by the person who created it', ()=>{
      cy.intercept('DELETE', '**/api/blogs/*').as('deleteBlog')
      cy.contains('Create a new blog').click()
      cy.get('[placeholder = "Title"]').type('FullStackOpen')
      cy.get('[placeholder = "Author"]').type('Helsinki')
      cy.get('button').contains('Create Blog').click()
      const testingUser2 = {
        username: 'manulucena127',
        password: 'mypassword2'
      }
      cy.request('POST', 'http://localhost:3002/api/users', testingUser2)
      cy.get('button').contains('LogOut').click()
      cy.get('[placeholder = "Username"]').type('manulucena127')
      cy.get('[placeholder = "Password"]').type('mypassword2')
      cy.get('button').contains('Login').click()
      cy.get('button').contains('Show details').click()
      cy.get('button').contains('Delete').click()
      cy.wait('@deleteBlog').its('response.statusCode').should('eq', 401)
    })
  })
  it.only('Blog are ordened', ()=>{
      cy.get('[placeholder = "Username"]').type('manulucena12')
      cy.get('[placeholder = "Password"]').type('mypassword')
      cy.get('button').contains('Login').click()
      cy.contains('Create a new blog').click()
      cy.get('[placeholder = "Title"]').type('FullStackOpen')
      cy.get('[placeholder = "Author"]').type('Helsinki')
      cy.get('button').contains('Create Blog').click()
      cy.get('[placeholder = "Title"]').type('FullStackOpen2')
      cy.get('[placeholder = "Author"]').type('Helsinki2')
      cy.get('button').contains('Create Blog').click()
      cy.get('[datatestId="toggle-button-1"]').click()
      cy.get('[dataidlikebutton="like-button-1"]').click()
      //After liking second blog it turns into the first one so we will check if it is the first of the list
      cy.get('[data-cy="blog-0"]', { timeout: 10000 }).should('contain', 'FullStackOpen2')
      cy.get('[data-cy="blog-1"]', { timeout: 10000 }).should('contain', 'FullStackOpen')
  })
})