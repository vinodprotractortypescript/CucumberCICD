import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "./support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {
    //seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    seleniumServerJar: '../webdriver-manager/selenium-server-standalone-3.141.59.jar',
    chromeDriver: '../webdriver-manager/chromedriver_77.0.3865.40.exe',
    geckoDriver:'../webdriver-manager/geckodriver-v0.25.0.exe',
    //SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "http://www.way2automation.com/angularjs-protractor/banking/#/login",

    capabilities: {
        browserName: "chrome",
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../features/CustomerLogin.feature",
    ],

    onPrepare: () => {
        //browser.ignoreSynchronization = true;
        browser.manage().timeouts().pageLoadTimeout(50000);
        //browser.manage().window().setSize(1600, 1000);
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../ConvertedJSfile/step-definitions/customerLoginSteps.js", "../ConvertedJSfile/support/*.js"],
        strict: true,
        tags: "@second",
        //tags: "@CucumberScenario or @ProtractorScenario or @TypeScriptScenario or @OutlineScenario",
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};