import { Given, When, Then } from "cucumber";
import { browser, ExpectedConditions, element, by, protractor } from "protractor";
import { searchPage } from "../pages/searchPage";
import { Alert } from "selenium-webdriver";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const search: searchPage = new searchPage();

Given('I am on {string} search page', async (text) => {
   // if (text === "flipkart") {
   //    let ale: Alert = browser.switchTo().alert();
   //    ale.accept();
   //    await expect(browser.getTitle()).to.eventually.equal("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
   // }
});

When('I type {string}',  (text) => {
   search.enterSearchItem(text);
});


Then('I click on search button', () => {
   search.clickOnSearchIcon();
   browser.sleep(5000);
});


// Then('I validate search result', async () => {
//    await expect(element(by.partialLinkText("Mobiles")).isDisplayed()).to.eventually.be.true;
// });