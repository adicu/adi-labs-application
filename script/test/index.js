"use strict";

const dedent = require("dedent-js");

const submitDirection = "Submit your answer in the following format by " +
                          "sending a post request to /submit";

module.exports = (testConfig) => {
  const format = JSON.stringify({
    "name": "your name",
    "email": "your email",
    "solution": {
      "GIT": [],
      "JS": [],
      "PYTHON": []
    }
  }, null, "  ");

  const questionBlock = Object.entries(testConfig).map(([mapKey, mapVal]) => {
    const questions = mapVal.map(x => dedent(x)).reduce((x, y) => `${x}\n\n${y}`);

    return `${mapKey}\n${questions}\n\n`;
  }).reduce((x, y) => x + y);

  return {
    answerFormat: () => {
      return format;
    },
    prompt: () => {
      return "You are not expected to answer all of these questions so just try your best!\n" +
        `Questions:\n\n${questionBlock}${submitDirection}\n${format}\n`;
    }
  };
};