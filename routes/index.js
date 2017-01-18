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

    if (!(body.hasOwnProperty("name") && body.hasOwnProperty("email") && body.hasOwnProperty("solution"))) {
      res.send(`Incorrect submission format. It must follow:\n${format} \n\n Received: ${body}`);
    }

    let { name, email, solution } = body;

    emailer.sendMail({ name: name, email: email, sol: solution }, (error, info) => {
      if (error) {
        res.send("There was an error. Please try submitting again");
      }

      res.send("Applicaiton received. We will get back to you shortly!");
    });
  })
};