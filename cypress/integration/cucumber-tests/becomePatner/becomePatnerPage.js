const EMAIL_INPUT = '#email'
const PASSWORD_INPUT = '#password'
const JOINUS = '.Landing_container__3GMQW button:nth-child(1)'
const SUBMIT_BTN = '.filledButton'


class registerServiceProvider{

    static visitPage(url){
        
        cy.visit(url);
        cy.get('.btnGreen').click();
        cy.visit(url+'en');
    }

    static clickBecomePatner(link){


        cy.contains(link).click();

       
    }

    static clickJoinUs(btn){
        cy.get(JOINUS).click();
    }

    static  clickSubmitBtn(){

        cy.get(SUBMIT_BTN).click()
    }

    static validateForm(){
        cy.contains('Enter valid Email').should('be.visible')
    }

}

export default registerServiceProvider