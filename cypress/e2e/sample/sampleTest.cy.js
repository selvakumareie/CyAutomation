describe('Test suite-1',()=>{
    before(()=>{
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
    })
    after(()=>{

    })
    beforeEach(()=>{

    })
    afterEach(()=>{

    })
    it('Launch the website',()=>{
        cy.visit('')
        cy.get('.gb_za').should('be.visible').should('have.text', 'Sign in')
        cy.get('#APjFqb').should('be.visible').type('cypress')
        cy.get('[aria-label="Google Search"]').click()
    })
  
})
