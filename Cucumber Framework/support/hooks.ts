import * as fs from "fs";
import { browser } from "protractor";
import { config } from "../config";
import { BeforeAll, After, Status, AfterAll, Before } from "cucumber";

BeforeAll({timeout: 100 * 1000}, async () => {
    await browser.get(config.baseUrl);
});

Before(async () =>{
    await browser.manage().window().maximize();
})

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED || scenario.result.status === Status.PASSED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});

AfterAll({timeout: 100 * 1000}, async () => {
    await browser.quit();
});