const { $ } = require('@wdio/globals');

class ProfilePage {
    async profileName(name) {
        // Constrói o seletor dinâmico para o nome do perfil
        const element = await $(`//android.widget.TextView[@text="${name}"]`);
        await element.waitForDisplayed({ timeout: 10000 });
        return element;
    }
}

module.exports = new ProfilePage();
