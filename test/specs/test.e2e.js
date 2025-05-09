const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    before(
        "Set up emulator", async function() { await browser.emulateDevice("Galaxy S9+", { inLandscape: true });
        }
    );

    it('should login with valid credentials', async () => {
        await browser.url("https://webdriver.io/")

        //Start screen check
        await browser.emulateDevice("Galaxy S9+");
        await browser.checkScreen("webdriverio_v8_portait");
        await browser.emulateDevice("Galaxy S9+", { inLandscape: true });
        await browser.checkScreen("webdriverio_v8_landscape");
    })
})

