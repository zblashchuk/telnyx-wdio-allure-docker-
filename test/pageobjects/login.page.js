const { validEmail, validPassword, invalidEmail, wrongEmailFormat } = require ('../fixtures/fixtures.json');
const Page = require('./page');
const { generateUser } = require('../pageobjects/generate.js')

class LoginPage extends Page {

    get emailInput(){
        return $('.eSxLXo > .InlineForm__Container-sc-1r23z15-0 > .TextField__Container-sc-r5o2cn-0 > .TextField__InputWrapper-sc-r5o2cn-4 > .ui-reactv2-input')
    }
    get emailInputAfterLogout(){
      return $('.fCOoik [name="email"]')
  }
    get passwordInput(){
        return $('.flxMbT > .InlineForm__Container-sc-1r23z15-0 > .TextField__Container-sc-r5o2cn-0 > .TextField__InputWrapper-sc-r5o2cn-4 > .ui-reactv2-input')
    }
    get forgotPasswordLink(){
        return $('form a[href*="password-reset"]')
    }
    get rememberMe(){
        return $('.svg-inline--fa').parentElement()
    }
    get submitButton(){
        return $('.Button__StyledDefaultButton-sc-44gl5i-0')
    }
    get messageError(){
        return $('.Message__MessageCopy-sc-1lbs5ge-2')
    }
    get wrongEmailFormat(){
      return $('.TextField__ErrorMessage-sc-r5o2cn-5.iFEVFt')
    }
    get UserLogInAccount(){
      return $(':nth-child(1) > .text-truncate')
    }  
    get UserLogout(){
      return $('button.tx-1Iv0kw')
      } 
      get UserAcc(){
        return $('react-title-bar .tx-2aP2j0')
        } 

      async checkUserLogInAccount() {
        await expect(this.UserLogInAccount).toHaveTextContaining('zblashchuk@gmail.com')
        } 

    async clickUserLogout() {
      await this.UserLogout.click()
      }

      async checkUserLogout() {
        await expect (this.emailInputAfterLogout).toHaveValueContaining('zblashchuk@gmail.com')
        }
      async checkUserAcc() {
        await this.UserAcc.moveTo()
        }

    async forgotPasswordLinkClick(){
        await this.forgotPasswordLink.click()
    }
    async loginValid(){
      const {validEmail, validPassword} = generateUser();
        await this.emailInput.setValue(validEmail)
        await this.passwordInput.setValue(validPassword)
        await this.rememberMe.click()
        await this.submitButton.click()

    }
    async loginInvalid(){
        await this.emailInput.setValue(invalidEmail)
        await this.passwordInput.setValue(validPassword)
        await this.rememberMe.click()
        await this.submitButton.click()
    }
    async loginWrongEmailFormat(){
      await this.emailInput.setValue(wrongEmailFormat)
      await this.passwordInput.setValue(validPassword)
      await this.rememberMe.click()
      await this.submitButton.click()
  }

    async validationError(){
        await expect(this.messageError).toBeDisplayed()
    }
    async validationWrongEmailFormat(){
      await expect(this.wrongEmailFormat).toBeDisplayed()
  }
}
   

  module.exports = new LoginPage();
