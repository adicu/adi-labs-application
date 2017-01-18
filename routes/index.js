'use strict'

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
`

const submitDirection = "Submit your answer in the following format by" +
                        "sending a post request to /submit"

module.exports = (app, tester, emailer) => {
  app.get("/application", function(req, res) {
    const response =
    `Questions:\n${tester.prompt()}\n${submitDirection}\n${format}`;

    res.send(response);
  });

  app.post("/submit", (req, res) => {
    const body = req.body;

    const appName = body.name;
    const appEmail = body.email;
    const appSolution = body.solution;

    emailer.sendMail({
      name: appName,
      email: appEmail,
      sol: appSolution
    });
  })
};