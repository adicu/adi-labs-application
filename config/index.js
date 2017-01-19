module.exports = {
  app: {
    name: "ADI Labs 2017 Application",
    port: process.env.PORT || 3000
  },
  email: {
    sender: {
      email: "adiLabsApplication@gmail.com",
      password: "adiLabsApplication123"
    },
    receiver: ["hb2458@columbia.edu", "labs@adicu.com"],
    allowedEmails: ["@columbia.edu", "@barnard.edu"]
  },
  test: {
    git: [
      `A) What is the command to list all remote branches in a given git repository?`,
      'B) Consider a repository with five files A, B, C, D and E and you modified B and C. How would you revert B to commit hash 123 and C to 234?',
      `C) How would you merge branch ABC into branch CBA? How would you revert this merge?`,
      `D) Say you changed files A, B and C. How would you push these changes to a remote master branch? Assume there is no merge conflict`,
      `E) How would you keep your local repository up to date with changes your teammates pushed into "remote/deploy" branch?`
    ],
    js: [
      `A) In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
        (() => {
          console.log(1);
          setTimeout(() => { console.log(2) }, 1000);
          setTimeout(() => { console.log(3) }, 0);
          console.log(4);
        })();`,
      `B) Following snippet of code prints 5, 5, 5, 5, 5, even though it appears as if it should print 1, 2 , 3, 4, 5. Explain this behavior and a solution to this problem.
        for (var i = 0; i < 5; i++) {
          setTimeout(() => { console.log(i); }, i * 1000 );
        }`,
      `C) What is IIFE in Javascript? Provide two examples and their usefulness`,
      `D) Write a funciton that would calculate occurances of each alphabet in the following text 15 lines or less
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        harum eaque, corporis unde quos nemo accusamus officia amet ab quo ad
        laudantium veritatis ipsum aperiam atque, minima quia inventore quaerat?`,
      `E) Explain how 'this' keyword behaves in Javascript`,
    ],
    python: [
      `A) Explain the purpose of 'requirements.txt' file in a python project`,
      `B) Explain 'lambda' keyword. Give three examples`,
      `C) Explain Decorator Functions`,
      `D) Write a funciton that would calculate occurances of each alphabet in the following text 20 lines or less
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        harum eaque, corporis unde quos nemo accusamus officia amet ab quo ad
        laudantium veritatis ipsum aperiam atque, minima quia inventore quaerat?`,
      `E) What will be the output of the code below? Explain your answer.
        def multipliers():
          return [lambda x : i * x for i in range(4)]

        print [m(2) for m in multipliers()]`
    ]
  }
};