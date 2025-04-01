const { $ } = require('@wdio/globals')



class homePage  {
    async openMenu(menu) {
        const selector = `id:tab-${menu}`;
        const element = await $(selector);
        await element.waitForDisplayed({ timeout: 10000 });
        await element.click();
    }  
}

module.exports = new homePage();
