
const { validEmail, firstName, lastName, companyName } = require ('../fixtures/fixtures.json');
const Page = require('./page');
  
class GetTheBookPage {
  get firstName(){
    return $('#FirstName')
}
get lastName(){
  return $('#LastName')
}
get companyName(){
  return $('#Company')
}
get validEmail(){
return $('#Email')
}
get submit(){
  return $('[type="submit"]')
  }
  get checkThanksPage(){
    return $('.lpContentsItem > :nth-child(3)')
    }
    
     
    
get CheckRequrefieldMessage(){
  return $('#mktoForm_1922')
 }
async fillFormGetBook(){
      await this.firstName.setValue(firstName)
      await this.lastName.setValue(lastName)
      await this.companyName.setValue(companyName)
      await this.validEmail.setValue(validEmail)
      await this.submit.click()
  }
  async fillFormGetBookWithoutFirstName(){
    await this.lastName.setValue(lastName)
    await this.companyName.setValue(companyName)
    await this.validEmail.setValue(validEmail)
    await this.submit.click()
}
}



module.exports = new GetTheBookPage();