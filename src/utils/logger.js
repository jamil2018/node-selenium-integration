const chalk = require("chalk");

const title = (text) => console.log(chalk.black.bgGreen(text));
const info = (text) => console.log(chalk.blue(text));
const error = (text) => console.log(chalk.red.bold(text));

module.exports = { title, info, error };
