// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('printCurrentUrl', () => {
    cy.url().then((url) => {
        cy.log(url)
        cy.addTestContext('Current Url is :', url)
    })
})

Cypress.Commands.add('skipTestIfProdEnv', (Context) => {
    if (Cypress.config().baseUrl.includes('://prod.')) {
        cy.log('Production Environment- Skipping this Test')
        Cypress.env('TestEnvironment', 'Prod')
        Cypress.env('skipReason', 'Prod')
        Context.skip();
    }
})

Cypress.Commands.add('addTestContext', (title, value) => {
    cy.once('test:after:run', test => addContext({ test }, { title, value }))
})
