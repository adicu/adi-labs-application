"use strict";

const re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;

const mailGen = (template, payload) => {
  const { name: name, email: email, sol: solPre } = payload;

  const solGit = solPre.GIT.reduce((x, y) => `${x}\n${y}`);
  const solJs = solPre.JS.reduce((x, y) => `${x}\n${y}`);
  const solPy = solPre.PYTHON.reduce((x, y) => `${x}\n${y}`);

  let newMail = template;

  newMail.from = email;
  newMail.subject = `[Application] ${name}`;
  newMail.text = `name: ${name}\nemail: ${email}\nsolution:\nGit:${solGit}\nJS\n${solJs}\nPython${solPy}`;

  return newMail;
};

module.exports = (allowedEmails, mailTransport, mailTemplate) => {
  return {
    verifyEmail: (email) => {
      return re.test(email) &&
        allowedEmails.filter(x => email.indexOf(x, email.length - x.length) !== -1).length > 0;
    },
    sendEmail: (payload, cb) => {
      mailTransport.sendMail(mailGen(mailTemplate, payload), cb);
    }
  };
};