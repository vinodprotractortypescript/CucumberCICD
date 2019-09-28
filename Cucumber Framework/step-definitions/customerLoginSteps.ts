import { Given, When, Then } from "cucumber";
import { browser } from "protractor";
import { homePage } from "../pages/homePage";
import { customerLoginPage } from "../pages/customerLoginPage";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const homepageobj: homePage = new homePage();
const customerPageObj: customerLoginPage = new customerLoginPage();

Given('I am on {string} search page', async (urlValue) => {
    await browser.getCurrentUrl().then((val) => {
        console.log("URL" + val);
        expect(val).to.contain('login');
    })
});

When('I click customerlogin button', async () => {
    await homepageobj.clickOnCustomerLogin();
});

Then('validate {string} in currenturl', async (data) => {
    if (await homepageobj.validatePresenceOfHeader()) {
        await browser.getCurrentUrl().then((val) => {
            expect(val).to.contain(data);
        })
    }
});

Then('select the {string} in the customerList', async (cust) => {
    await customerPageObj.selectTheCustomer(cust);
    await customerPageObj.clickOnLogin();
});

Then('validate the {string} is logged in', async (cust) => {
    expect(await customerPageObj.validateWelcomeHeader()).to.be(cust);  
})
