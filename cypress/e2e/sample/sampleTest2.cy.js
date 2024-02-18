import { login, logout} from '../../support/utils.js'
describe('Test suite-2',()=>{
    let data
    before(()=>{
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        //read required data from fixtures
        cy.fixture('testdata.json').then((content)=>{
            data= content;
        })
    })
    after(()=>{

    })
    beforeEach(()=>{

    })
    afterEach(()=>{

    })
    it('Launch the sign up form and fill',()=>{
        cy.visit('https://www.amazon.com/')
        cy.get('#nav-link-accountList-nav-line-1').trigger('mouseover')
        cy.get('#nav-flyout-ya-newCust a').should('be.visible').click()
        cy.get('#ap_customer_name').type(data['firstname'])
        cy.get('#ap_email').type(data['email'])
        cy.get('#ap_password').type(data['credentials']['pwd'])
        cy.get('#ap_password_check').type(data['credentials']['pwd'])
        cy.printCurrentUrl()  // use cy commands from commands.js
    })
    it('Login as a user',()=>{
        //reuse login from utils
        login()  
    })
    it('Logout from the website', ()=>{
         //reuse logout from utils
         logout()
    })
})
