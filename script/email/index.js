'use strict'

const mailGen = (template, payload) => {
  const { name: name, email: email, sol: solPre } = payload;

  const solJs = solPre.js.reduce((x, y) => `${x}\n${y}`);
  const solPy = solPre.python.reduce((x, y) => `${x}\n${y}`);

  let newMail = template;

  newMail["subject"] = `[Application] ${name}`;
  newMail["text"] = `name: ${name}\nemail: ${email}\nsolution:\nJS\n${solJs}\nPython${solPy}`;

  return newMail;
}

module.exports = (mailTransport, mailTemplate) => {
  return {
    sendMail: (payload, cb) => {
      mailTransport.sendMail(mailGen(mailTemplate, payload), cb);
    }
  }
};