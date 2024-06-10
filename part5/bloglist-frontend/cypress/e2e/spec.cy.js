describe('Testing Blogs E2E', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173/')
  })
  it('Login form is rendered', ()=>{
    cy.contains('Login Form')
  })
})