const GooglePage = require("../pages/google");
const reporter = require("../utils/reporter");
const { getDriver } = require("../utils/driver");

class GoogleTest {
  constructor() {
    this.driver = getDriver("chrome");
    this.googlePage = new GooglePage(this.driver);
  }

  async TC_01() {
    try {
      await this.googlePage.navigateToPage();
      await this.googlePage.insertIntoTextField(
        this.googlePage.searchInputField,
        "test"
      );
      await this.googlePage.clickOnElement(this.googlePage.searchBtn);
    } catch (err) {
      reporter.logFail(
        "Test: Verify user is able to search their queries",
        err.message
      );
      return;
    }
    reporter.logPass("Test: Verify user is able to search their queries");
  }

  async tearDown() {
    await this.driver.close();
  }
}

module.exports = GoogleTest;
