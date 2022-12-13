const Page = require('./page');

class BlogPage extends Page {
  get searchInput(){ return $('#search') }
  get searchResults(){ return $$('#articles > *') }
  get GetTheBook(){ return $('[href="/resources/ebook-the-better-twilio-alternative"]') }
  async clickGetTheBook(){
    await this.GetTheBook.click()
}
  async search(){
      await this.searchInput.setValue('programming')
      await browser.keys('Enter')
  }
  async emptySearch(){
      await this.searchInput.setValue('blablabla')
      await browser.keys('Enter')
  }
  async validation(){
      await $('#articles > div:first-child').waitForDisplayed({ timeout: 10000 })
      await browser.pause(2000)
      await expect(await this.searchResults.length).toBeGreaterThan(0)
  }
  async emptyValidation(){
      await $('#articles > div:first-child').waitForDisplayed({ timeout: 10000 })
      await browser.pause(2000)
      await expect(await this.searchResults.length).toBeLessThanOrEqual(1)
  }

  get FilterByContentProductsFeature(){ 
    return $('[aria-labelledby="filter-by-content"] > .sc-afdc1d86-3 > :nth-child(1) > .Text-sc-5o8owa-0')}
  
  async chooseFilterByContentProductsFeature(){
    await this.FilterByContentProductsFeature.click()
    };
    }

module.exports = new BlogPage();