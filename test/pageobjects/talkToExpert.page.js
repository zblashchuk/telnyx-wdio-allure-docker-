const { validEmail, validPassword, invalidEmail, wrongEmailFormat } = require ('../fixtures/fixtures.json');
const Page = require('./page');
const { generateUser } = require('./generate.js')

class TalkToExpertPage extends Page {
  get reasonForContact(){
    return $('div > #Reason_for_Contact__c')
}
reason (randReasonForContact){
  return $(`// select  [@id="Reason_for_Contact__c"] // option [contains(.,"${randReasonForContact}")]`)
}
get firstNameInput(){
  return $('#FirstName')
}
get LastNameInput(){
  return $('#LastName')
}
get emailInput(){
  return $('#Email')
}
get WebsiteInput(){
  return $('#Website')
}
get form(){
  return $('.sc-fe4a45f0-6.jFCuMy')
}
get interestSelectForm(){
  return $('#Use_Case_Form__c')
}
get interest (){
  return $('// select  [@id="Use_Case_Form__c"] // option [contains(.,"Video")]')
}

get submitbutton(){
  return $('.mktoButton')
}

async clickUserLogout() {
await this.UserLogout.click()
}
async talkToExpertFormFill(){
  const {firstNameRandom, lastNameRandom, email, randReasonForContact} = generateUser();
  await this.reasonForContact.click()
  await this.reason(randReasonForContact).click()
   await this.firstNameInput.setValue(firstNameRandom)
    await this.LastNameInput.setValue(lastNameRandom)
    await this.emailInput.setValue(email)
    await this.WebsiteInput.setValue('http://www.example.com/')
    //let interestSelectForm = browser.findElement('#Use_Case_Form__c')
   // let interestSelectForm2 = $('#Use_Case_Form__c')
    if (this.interestSelectForm.isDisplayed()){
      
       await this.interestSelectForm.click()
    await this.interest.click()
    }
   
    await this.submitbutton.click()
    await expect(browser).toHaveUrlContaining(firstNameRandom)
}
}
  module.exports = new TalkToExpertPage();
