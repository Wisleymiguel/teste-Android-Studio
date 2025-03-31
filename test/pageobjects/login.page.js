const { $ } = require('@wdio/globals');

class LoginPage {
    get email(){
        return $('id:email');
    }

    get password(){
        return $('id:password');
    }

    get btnLogin(){
        return $('id:btnLogin');
    }

    async login(email, password) {
        // Aguarda o email ficar visível e seta o valor
        await this.email.waitForDisplayed({ timeout: 1000 });
        await this.email.setValue(email);
        // Aguarda o campo de senha ficar visível e seta o valor
        await this.password.waitForDisplayed({ timeout: 1000 });
        await this.password.setValue(password);
       // await this.btnLogin.waitForDisplayed({ timeout: 1000 });
       // await this.btnLogin.click();
    }
}

module.exports = new LoginPage();
