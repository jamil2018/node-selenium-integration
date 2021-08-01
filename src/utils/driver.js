require("chromedriver");
const { Builder } = require("selenium-webdriver");

const getDriver = (browser) => new Builder().forBrowser(browser).build();

module.exports = { getDriver };
