'use strict'

module.exports = (testConfig) => {
  return {
    prompt: (version) => {
      const js = testConfig.js.reduce((x, y) => `${x}\n${y}`);
      const python = testConfig.python.reduce((x, y) => `${x}\n${y}`);

      return `Assume ES6\n${js}\n\nAssume Python 3\n${python}\n`;
    }
  }
}