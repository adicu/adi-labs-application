'use strict'

const mailGen = (template, payload) => {
  const { name: name, email: email, sol: solPre } = payload;

  const solJs = solPre.js.reduce((x, y) => `${x}\n${y}`);
  const solPy = solPre.python.reduce((x, y) => `${x}\n${y}`);

  let newMail = template;

  newMail[subject] = `[Application]${name}`;
  newMail[text] = `email: ${email}\nsolution: JS\n${solJs}\nPython${solPy}`;

  return newMail;
}

module.exports = (mailTransport, mailTemplate) => {
  return {
    sendMail: (payload) => {
      mailTransport.sendMail(mailGen(mailTemplate, payload), (error, info) => {
        if (error) {
          return console.log(error);
        }

        console.log('Message sent: ' + info.response);
      });
    }
  }
};