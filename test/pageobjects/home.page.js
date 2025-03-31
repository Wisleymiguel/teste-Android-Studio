const { $ } = require('@wdio/globals')



class homePage  {
    async openMenu(menu) {
        const selector = `id:tab-${menu}`;
        const element = await $(selector);
        await element.click();
    }  
}

module.exports = new homePage();
