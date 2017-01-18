"use strict";

module.exports = (app, tester, emailer) => {
  app.get("/", (_, res) => {
    res.send("Hello!");
  });

  app.get("/application", (req, res) => {
    res.send(tester.prompt());
  });

  app.post("/submit", (req, res) => {
    const body = req.body;

    if (!(body.hasOwnProperty("name") && body.hasOwnProperty("email") && body.hasOwnProperty("solution"))) {
      res.send(`Incorrect submission format. It must follow:\n${tester.answerFormat()} \n\n Received: ${body}`);
    }

    const { name, email, solution } = body;

    if (!emailer.verifyEmail(email)) {
      res.send(`Must use a valid columbia/barnard email: Email: ${email}`);
    }

    emailer.sendEmail({ name: name, email: email, sol: solution }, (error) => {
      if (error) {
        res.send("There was an error. Please try submitting again");
      }

      res.send("Applicaiton received. We will get back to you shortly!");
    });
  });
};