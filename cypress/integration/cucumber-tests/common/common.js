import { defineStep } from 'cypress-cucumber-preprocessor/steps'

defineStep('I want to wait {int} millisec',time=>{

    cy.wait(time)
})


defineStep('I see {string} in the url',url=>{
    cy.url().should('include',url)
})


