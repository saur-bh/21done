import { Given, When,Then} from 'cypress-cucumber-preprocessor/steps' 
import PatnerPage from './becomePatnerPage'

Given('I open the 21done english version',() =>{

    PatnerPage.visitPage('https://21done.de/');

})

When('I click on {string} link',linkName=>{

    PatnerPage.clickBecomePatner(linkName)
  
})


When('I click on {string} button',btn=>{

  PatnerPage.clickJoinUs(btn);
    
})


When('I click on "Submit" button',btn =>{

    PatnerPage.clickSubmitBtn();
  

})

Then('I should not able to sumbit the form',()=>{

    PatnerPage.validateForm();
})