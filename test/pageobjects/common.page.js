const Page = require('./page');

class CommonPage extends Page {

 
    get cookiesAcceptBtn(){ return $('//button[contains(.,"Accept and close")]') }
  
    async checkAcceptCookie () {
      await browser.url('/');
            let acceptCookie = await browser.findElement('xpath', '// div [@class="sc-df34c536-1 daZtYl"]');
            if (acceptCookie.length !== 0) {
              await this.cookiesAcceptBtn.click()
            } }
 
  async redirectValidation(){
      await expect(browser).not.toHaveUrl('https://telnyx.com/')
  }
}

module.exports = new CommonPage();
