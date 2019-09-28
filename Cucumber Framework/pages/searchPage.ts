import { ElementFinder, element, by, browser } from "protractor";
import { protractor } from "protractor/built/ptor";

export class searchPage {
    public searchTextBox: ElementFinder;
    public searchButton: ElementFinder;
    public brandSearchInputBox: ElementFinder;
    public brandCheckBox: ElementFinder;
    public userPopUpCloseIcon: ElementFinder;
    EC = protractor.ExpectedConditions;

    constructor() {
        this.userPopUpCloseIcon = element(by.xpath("//button[text()='✕']"));
        this.searchTextBox = element(by.name("q"));
        this.searchButton = element(by.className("vh79eN"));
        this.brandSearchInputBox = element(by.xpath("//input[@placeholder='Search Brand']"));
        this.brandCheckBox = element(by.xpath("//*[@id='container']/div/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]/div/section[5]/div[2]/div[1]/div[3]"));
    }

    enterSearchItem(item: string) {
        browser.wait(this.EC.elementToBeClickable(this.userPopUpCloseIcon), 20000);
        this.userPopUpCloseIcon.click();
        browser.wait(this.EC.elementToBeClickable(this.searchTextBox), 20000);
        this.searchTextBox.sendKeys(item);
    }
    clickOnSearchIcon() {
            browser.wait(this.EC.elementToBeClickable(this.searchButton), 20000);
            this.searchButton.click();
    }

}