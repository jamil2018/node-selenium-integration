const { GooglePage } = require("./src/pages/google");
const GoogleTest = require("./src/tests/googleTest");
const { getDriver } = require("./src/utils/driver");

const main = async () => {
  //   const driver = getDriver("chrome");
  //   const googlePage = new GooglePage(driver);
  //   await googlePage.navigateToPage();
  //   await googlePage.insertIntoTextField(googlePage.searchInputField, "test");
  //   await googlePage.clickOnElement(googlePage.searchBtn);
  //   await driver.close();
  const googleTest = new GoogleTest();
  await googleTest.TC_01();
  await googleTest.tearDown();
};

main();
