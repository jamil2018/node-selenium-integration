const BasePage = require("./base");

class GooglePage extends BasePage {
  constructor(driver) {
    super(driver);
  }
  //fields: declare selectors of the page here
  pageURL = "http://www.google.com";
  searchInputField = "div.RNNXgb input";
  searchBtn = "div.FPdoLc.lJ9FBc  input.gNO89b";
  //methods: declare any page related methods here
  navigateToPage() {
    return this.driver.get(this.pageURL);
  }
}

module.exports = { GooglePage };
