import { ElementFinder, element, by, browser, ExpectedConditions } from "protractor";
import { protractor } from "protractor/built/ptor";

export class customerLoginPage {
    CustomerDropdown = element(by.id("userSelect"));
    CustomerList = element.all(by.css("#userSelect option"));
    loginButton = element(by.buttonText("Login"));
    welcomeHeader = element(by.xpath("//strong[contains(text(),'Welcome')]/span"));

    async selectTheCustomer(cust) {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.CustomerDropdown), 20000);
        await browser.sleep(3000);
        //await this.CustomerDropdown.click();
        //await browser.sleep(4000);
        this.CustomerList.then(function (items) {
            console.log("-----printing values from dropdown list-----");
            console.log("Total values in dropdown are : " + items.length);
            for (let i = 0; i < items.length; i++) {
                items[i].getText().then(function (text) {
                    console.log(text);
                });

            }
            items[3].click();
        });
        // this.CustomerList.then(async (dropdownoptionslist) => {
        //     console.log("Array length" + await dropdownoptionslist.length);
        //     for (let i = 0; i < await dropdownoptionslist.length; i++) {
        //         dropdownoptionslist[i].getText().then(function (itemtext: any) {
        //             console.log(itemtext);
        //             if (itemtext == "Hermoine Granger") {
        //                 dropdownoptionslist[i].click();
        //             }
        //         });
        //     }
        // })
    }
    /* browser.sleep(3000);
  this.CustomerList.each((ele)=>{
      ele.getText().then((val)=>{
          if(val==cust){
              ele.click();
          }
      })
  })*/

    clickOnLogin() {
        this.loginButton.click();
    }

    async validateWelcomeHeader() {
        browser.wait(ExpectedConditions.presenceOf(this.welcomeHeader), 20000);
        return await this.welcomeHeader.getText();
    }
}