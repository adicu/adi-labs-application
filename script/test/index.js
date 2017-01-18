"use strict";

const format = `
  {
    name: "your name",
    email: "your email",
    solution: {
      js: [
        "",
        "",
        "",
        "",
        ""
      ],
      python: [
        "",
        "",
        "",
        "",
        ""
      ]
    }
  }
`;

const submitDirection = "Submit your answer in the following format by" +
                          "sending a post request to /submit";

module.exports = (testConfig) => {
  return {
    answerFormat: () => {
      return format;
    },
    prompt: () => {
      const js = testConfig.js.reduce((x, y) => `${x}\n${y}`);
      const python = testConfig.python.reduce((x, y) => `${x}\n${y}`);

      return `Questions:\nAssume ES6\n${js}\n\nAssume Python 3\n${python}\n\n${submitDirection}\n${format}`;
    }
  };
};