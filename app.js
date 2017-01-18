'use strict'

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const { app: appConf, email: emailConf, test: testConf } = require('./config');

let app = express();
let server = http.createServer(app);

server.listen(appConf.port);
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public/static')));
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const mailTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: emailConf.sender, // Your email id
    pass: emailConf.password // Your password
  }
});

const mailTemplate = {
  from: emailConf.sender,
  to: emailConf.receiver,
  subject: "",
  text: ""
};

const test = require('./script/test')(testConf);
const emailer = require('./script/email')(mailTransport, mailTemplate);

require('./routes')(app, test, emailer);

console.log(`${appConf.name} running at port: ${appConf.port}`);