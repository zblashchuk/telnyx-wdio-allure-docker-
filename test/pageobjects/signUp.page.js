const Page = require('./page');
const { generateUser } = require('../pageobjects/generate.js')

class SignUpPage extends Page {
  get emailInput(){
    return $('#email')
}
get fullNameInput(){
    return $('#full_name')
}
get passwordInput(){
    return $('#password')
}
get termsAndConditions(){
    return $('#terms_and_conditions').parentElement()
}
get receiveEmails(){
    return $('#subscription_opt_in').parentElement()
}
get submitButton(){
    return $('button[type="submit"]')
}
get validReistrEmail(){
  return $('.lghbwG strong')
}
get validEmailerror(){
  return $('#email_error')
}


async signUpValid(){
  const {firstNameRandom, lastNameRandom, email, password} = generateUser()
    await this.emailInput.setValue(email)
    await this.fullNameInput.setValue(firstNameRandom + lastNameRandom)
    await this.passwordInput.setValue(password)
    await this.termsAndConditions.click()
    await this.receiveEmails.click()
    await this.submitButton.click()
    await browser.pause(3000)
    await expect((this.validReistrEmail).getText()==email)
    
}
async signUpEmpty(){
    await this.termsAndConditions.click()
    await this.receiveEmails.click()
    await this.submitButton.scrollIntoView()
    await this.submitButton.click()
}
async validation(){
  await expect(browser).toHaveUrl('/verify-email') 
}
async invalidation(){
    await expect(this.emailInput).toHaveAttr('aria-invalid')
    await expect(this.validEmailerror).toBeDisplayed()
}

}
  module.exports = new SignUpPage();