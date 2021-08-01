const logger = require("../utils/logger");

const logPass = (title) => {
  logger.title(title);
  logger.info("-Test Passed");
};

const logFail = (title, error) => {
  logger.title(title);
  logger.info(`-Test Failed. Error: ${error}`);
};

module.exports = { logPass, logFail };
