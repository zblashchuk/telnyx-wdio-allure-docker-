const loginPage = require('../pageobjects/login.page');
const blogPage = require('../pageobjects/blog.page');
const headerPage = require('../pageobjects/header.page');
const commonPage = require('../pageobjects/common.page');
const signUpPage = require('../pageobjects/signUp.page');
const forgotPasswordPage = require('../pageobjects/forgotPassword.page');
const talkToExpertPage = require('../pageobjects/talkToExpert.page');
const { generateUser } = require('../pageobjects/generate.js');
const { dropDownMenuVisible } = require('../pageobjects/header.page');
const getTheEBookPage = require('../pageobjects/getTheEBook.page');

          before('Cookies accept', async () => {
            await browser.setWindowSize(1920, 1080)
            await commonPage.checkAcceptCookie()
            await browser.pause(1000)
        })
        beforeEach('Go to telnyx.com', async () => {
         await browser.url('/')
        })

        describe('Log in ', () => {
          it('1Should receive error message about email format', async () => {
            await headerPage.clickTopMemuElement('Log In')
            await loginPage.loginWrongEmailFormat()
            await loginPage.validationWrongEmailFormat()
        })

          it('2should not login with data which was not used for register before and receive error message', async () => {
            await headerPage.clickTopMemuElement('Log In')
            await loginPage.loginInvalid()
            await loginPage.validationError()
        })
        it('3Password should be reseted', async () => {
          await headerPage.clickTopMemuElement('Log In')
          await browser.pause(1000)
          await loginPage.forgotPasswordLinkClick()
          await browser.pause(1000)
          await forgotPasswordPage.passwordResetValid()
          await browser.pause(1000)
          await forgotPasswordPage.validation()
      })
        it('4Should be logout from account and check that email field is filled', async () => {
          await headerPage.clickTopMemuElement('Log In')
          await loginPage.loginValid()
          /*await browser.waitUntil(
            async() => (await browser.toHaveUrlContaining('login'),
            {
              timeout: 5000,
        })),*/
          await browser.pause(1000)
          await loginPage.checkUserAcc()
          await browser.pause(1000)
          await loginPage.clickUserLogout()
          await browser.pause(1000)
          await loginPage.checkUserLogout()
          await browser.pause(1000)
      })
   
      it('5Should be logged in with valid data and check', async () => {
        await headerPage.clickTopMemuElement('Log In')
        await loginPage.loginValid()
        await browser.pause(1000)
        await loginPage.checkUserAcc()
        await loginPage.checkUserLogInAccount()
        await loginPage.clickUserLogout()
    })
        }) 
        describe('Sign up', () => {
            it('6Should signed up with valid fields', async () => {
                await headerPage.clickMainMemuElement('Sign up')
                await signUpPage.signUpValid()
                await browser.pause(50000)
                //await signUpPage.validation()
            })
            it('7Should not be signed up with empty fields', async () => {
                await headerPage.clickMainMemuElement('Sign up')
                await signUpPage.signUpEmpty()
                await signUpPage.invalidation()
            })
        })
        describe('MainMenu', () => {
          it('8All items of main menu have hover effect', async () => {
            const pages = await ['Products', 'Solutions', 'Resources', 'Company', 'Pricing']
            pages.forEach (async(page) => {
              await headerPage.moveToMainMemuElement(page)
              await expect (headerPage.MainMemuElement(page)).toBeHover()
          })
        })
        it('9dropdown menu is visible when move to items main menu', async () => {
          const pages = await ['Products', 'Solutions', 'Resources', 'Company', 'Pricing']
          pages.forEach (async(page) => {
            console.log(await headerPage.MainMemuElement(page))
            await headerPage.MainMemuElement(page).moveTo()
            await headerPage.MainMemuElement(page).waitForDisplayed({ timeout: 3000 });
            await expect (headerPage.dropDownMenuVisible(page)).toBeDisplayed()
        })
      })
      it('10use requests to navigation bar links for Company item in Menu', async () => {
        const pages = await ['About Telnyx', 'Careers', 'Partners', 'Integrations']
        await headerPage.moveToMainMemuElement('Company')
        pages.forEach (async(page) => {
        await expect (headerPage.dropDownMenuVisible(page)).isClicable()
        })
      })
      
    })

    describe('talkToExpert', () => {
      it('11Should open contact-us pache by click on Talk to an expert', async () => {
        await headerPage.clickMainMemuElement('Talk to an expert')
        await expect(browser).toHaveUrlContaining('contact-us')
        
    })
      it('12Should send form', async () => {
        await headerPage.clickMainMemuElement('Talk to an expert')
        await talkToExpertPage.talkToExpertFormFill()
        
    })
  })
  describe('Blog ', () => {
    it('13Should search', async () => {
        await headerPage.resourcesHover()
        await headerPage.resourcesLinkClick(3)
        await blogPage.search()
        await blogPage.validation()
    })
    it('14Should search with empty results', async () => {
        await headerPage.resourcesHover()
        await headerPage.resourcesLinkClick(3)
        await blogPage.emptySearch()
        await blogPage.emptyValidation()
    })
    it('15Chosen filter should be focused', async () => {
      await headerPage.resourcesHover()
      await headerPage.resourcesLinkClick(3)
      await blogPage.chooseFilterByContentProductsFeature()
    await expect(blogPage.FilterByContentProductsFeature).toBeFocused()
    })
    it('16Check Result Filter By Content ', async () => {
      await headerPage.resourcesHover()
        await headerPage.resourcesLinkClick(3)
        await blogPage.chooseFilterByContentProductsFeature()
      const filterlist = [$$('span[class="Text-sc-5o8owa-0 sc-a6f05a8b-0 ehIIpY RtUMH"]')]
      filterlist.forEach(async(item) => {
       await expect(item).toHaveTextContaining('New Products & Features') 
          })
        })
          it('17 all articles are with link', async () => {
            await headerPage.resourcesHover()
              await headerPage.resourcesLinkClick(3)
              await blogPage.chooseFilterByContentProductsFeature()
              const searchResultsLink= [$$('// div [@class="sc-438b0f02-1 dTViGT"] // a')]
              searchResultsLink.forEach(async(item) => {
             await expect(item).toHaveLinkContaining('http') 
                })
        })
        it('18 get the book', async () => {
          await headerPage.resourcesHover()
            await headerPage.resourcesLinkClick(3)
            await blogPage.GetTheBook.click()
           await expect(browser).toHaveUrlContaining('ebook-the-better-twilio-alternative') 
              })
            })
describe('get the Ebook', () => {
  it('19 Should see thank you page after fill all fields and submit to get the Ebook', async () => {
    await headerPage.resourcesHover()
    await headerPage.resourcesLinkClick(3)
    await blogPage.GetTheBook.click()
      await getTheEBookPage.fillFormGetBook()
      await expect (getTheEBookPage.checkThanksPage).toHaveTextContaining('Check your inbox for an email')
  })
  it('20 Should see error message when requre field is empty', async () => {
    await headerPage.resourcesHover()
    await headerPage.resourcesLinkClick(3)
    await blogPage.GetTheBook.click()
      await getTheEBookPage.fillFormGetBookWithoutFirstName()
      await expect (getTheEBookPage.CheckRequrefieldMessage).toHaveTextContaining('This field is required')
  })

      })
    



