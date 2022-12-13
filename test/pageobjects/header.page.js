const Page = require('./page');

class HeaderPage extends Page {

 
    //cy.xpath('// header // div // ul // li [contains(.,"Resources"]');

    MainMemuElement (MainMemuElement) {
        return $(`// header // div // ul // li [contains(.,"${MainMemuElement}")]`);
    }

    TopMemuElement (TopMemuElement) {
        return $(`// a[@class="sc-f97529d6-0 bjUuRN Text-sc-5o8owa-0 sc-28d89a84-0 frufKM blLdCs mchNoDecorate"][contains(.,"${TopMemuElement}")]`);
    }
    get resources(){ return $('header ul > li:nth-child(6) > span') }
    resourcesLink(num){
      return $(`header ul > li:nth-child(6) div > div > div > div > div:nth-child(${num}) a`)
  }
    async clickMainMemuElement (MainMemuElement) 
    {
      await this.MainMemuElement(MainMemuElement).click();
        }

    async moveToMainMemuElement (MainMemuElement) 
    {
      await this.MainMemuElement(MainMemuElement).moveTo();
         }

  async clickTopMemuElement (TopMemuElement) {
    await this.TopMemuElement(TopMemuElement).click();
}
  
dropDownMenuVisible (MainMemuElement){
return $(`//li [contains(.,"${MainMemuElement}")] // div [@class="sc-14c941d7-1 sc-7b3980dc-4 jTyFqK denEOW"] // div [@class="sc-7b3980dc-9 ctVOEX"]`)
}

dropDownMenuVisible (MainMemuDropdown){
  return $(`//header // li [contains(.,"${MainMemuDropdown}")]`)
  }
  async resourcesHover(){
    await this.resources.moveTo()
}
async resourcesLinkClick(num){
  await this.resourcesLink(num).click()
}
}

module.exports = new HeaderPage();
