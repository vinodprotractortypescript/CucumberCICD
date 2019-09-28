import { ElementFinder, element, by, browser, ExpectedConditions } from "protractor";
import { protractor } from "protractor/built/ptor";

export class homePage{

    customerLogin = element(by.buttonText("Customer Login"));
    bankManagerLogin = element(by.buttonText("Bank Manager Login"));
    customerPageHeader = element(by.xpath("//label[text()='Your Name :']"));
   // yourNameDropdown = element(by.id("userSelect"));
    clickOnCustomerLogin(){
        this.customerLogin.click();
    }
    clickOnBankManagerLogin(){
        this.bankManagerLogin.click();
    }
    async validatePresenceOfHeader(){
        browser.wait(ExpectedConditions.presenceOf(this.customerPageHeader),20000);
        return this.customerPageHeader.isDisplayed();
    }
}