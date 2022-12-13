const fixtures = require('../fixtures/fixtures.json')

class PasswordReset {
    get emailInput(){
        return $('[name="email"]')
    }

    async passwordResetValid(){
        await this.emailInput.setValue(fixtures.validEmail)
    }
   
    async validation(){
        await expect(this.emailInput).toHaveValue(fixtures.validEmail)
    }
  
}

module.exports = new PasswordReset()