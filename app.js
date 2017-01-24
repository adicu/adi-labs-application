"use strict";

const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const { app: appConf, email: { sender, receiver, allowedEmails }, test: testConf } = require("./config");

const app = express();
const server = http.createServer(app);

server.listen(appConf.port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const mailTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: sender.email,
    pass: sender.password
  }
});

const mailTemplate = {
  from: "",
  to: receiver,
  subject: "",
  text: ""
};

const test = require("./script/test")(testConf);
const emailer = require("./script/email")(allowedEmails, mailTransport, mailTemplate);

require("./routes")(app, test, emailer);

console.log(`${appConf.name} running at port: ${appConf.port}`);