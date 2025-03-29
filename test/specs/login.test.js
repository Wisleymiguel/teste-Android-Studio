const { expect, driver } = require('@wdio/globals')
const homePage = require('../pageobjects/home.page.js')
const loginPage = require('../pageobjects/login.page.js')
const profilePage = require('../pageobjects/profile.page.js')

describe('My Login application',() => {
    it('should login with valid credentials', async () => {
        await homePage.openMenu('profile')
        await loginPage.login('wisley@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
        await homePage.openMenu('profile')
        expect( await profilePage.profileName('Miguel wisley').isDisplayed()).toBeTruthy()
       
    })
})

