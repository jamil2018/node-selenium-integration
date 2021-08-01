const { By } = require("selenium-webdriver");

class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  //#region Methods
  /** @methodType locators*/
  getElementBySelector(selector) {
    return this.driver.findElement(By.css(selector));
  }
  /** @methodType user input */
  insertIntoTextField(selector, text) {
    return this.getElementBySelector(selector).sendKeys(text);
  }
  /**@methodType actions */
  clickOnElement(selector) {
    return this.getElementBySelector(selector).click();
  }
  //#endregion
}

module.exports = BasePage;
