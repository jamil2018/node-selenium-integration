const GoogleTest = require("./src/tests/googleTest");

const main = async () => {
  const googleTest = new GoogleTest();
  await googleTest.TC_01();
  await googleTest.tearDown();
};

main();
