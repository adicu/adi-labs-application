"use strict";

const format =
  {
    name: "your name",
    email: "your email",
    solution: {
      git: [ ],
      js: [ ],
      python: [ ]
    }
  };

const submitDirection = "Submit your answer in the following format by " +
                          "sending a post request to /submit";

module.exports = (testConfig) => {
  return {
    answerFormat: () => {
      return format;
    },
    prompt: () => {
      const git = testConfig.git.reduce((x, y) => `${x}\n${y}`);
      const js = testConfig.js.reduce((x, y) => `${x}\n${y}`);
      const python = testConfig.python.reduce((x, y) => `${x}\n${y}`);

      return `Questions:\nGit\n${git}\n\nJavascript. Assume ES6\n${js}\n\nPython.` +
        `Assume Python 3\n${python}\n\n${submitDirection}\n${format}`;
    }
  };
};