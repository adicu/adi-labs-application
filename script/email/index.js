"use strict";

const re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;

const mailGen = (template, payload) => {
  const { name: name, email: applicant, sol: solPre } = payload;

  const solutionBlock = Object.entries(solPre).map(([mapKey, mapVal]) => {
    const questions = mapVal.reduce((x, y) => `${x}\n\n${y}`);

    return `${mapKey}\n${questions}\n\n`;
  }).reduce((x, y) => x + y);

  let newMail = template;
  let newMailList = template.to;

  newMailList.push(applicant);

  newMail.from = applicant;
  newMail.to = newMailList;
  newMail.subject = `[Application] ${name}`;
  newMail.text = `name: ${name}\nemail: ${applicant}\nsolution:\n${solutionBlock}`;

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