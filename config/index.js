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
    GIT: [
      `A) What is the command to list all remote branches in a given git repository?`,
      `B) Consider a repository with five files A, B, C, D and E and you modified B and C. How would you revert B to commit hash 123 and C to 234?`,
      `C) How would you merge branch ABC into branch CBA? How would you revert this merge?`,
      `D) Say you changed files A, B and C. How would you push these changes to a remote master branch? Assume there is no merge conflict`,
      `E) How would you keep your local repository up to date with changes your teammates pushed into "remote/deploy" branch?`
    ],
    JS: [
      `A) In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
        \t(() => {
        \t\tconsole.log(1);
        \t\tsetTimeout(() => { console.log(2) }, 1000);
        \t\tsetTimeout(() => { console.log(3) }, 0);
        \t\tconsole.log(4);
        \t})();`,
      `B) Following snippet of code prints 5, 5, 5, 5, 5, even though it appears as if it should print 0, 1, 2, 3, 4. Explain this behavior and a solution to this problem.
        \tfor (let i = 0; i < 5; i++) {
        \t\tsetTimeout(() => { console.log(i); }, i * 1000 );
        \t}`,
      `C) Write a function that calculates the sum of numbers in a given array`,
      `D) Javascript is asynchronous. Describe what this means`,
      `E) Explain how 'this' keyword behaves in Javascript. Describe as much as you can including scoping, etc`,
      `EXTRA) Write a funciton that would calculate occurrences of each letter in the following text 15 lines or less
        \tLorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        \tharum eaque, corporis unde quos nemo accusamus officia amet ab quo ad
        \tlaudantium veritatis ipsum aperiam atque, minima quia inventore quaerat?`
    ],
    PYTHON: [
      `A) Explain the purpose of 'requirements.txt' file in a python project`,
      `B) Explain 'lambda' keyword. Give three examples`,
      `C) Explain Decorator Functions`,
      `D) Write a function that calculates the sum of numbers in a given array`,
      `E) What will be the output of the code below? Explain your answer.
        \tdef multipliers():
        \t\treturn [lambda x : i * x for i in range(4)]

        \tprint [m(2) for m in multipliers()]`,
      `EXTRA) Write a funciton that would calculate occurrences of each letter in the following text 20 lines or less
        \tLorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        \tharum eaque, corporis unde quos nemo accusamus officia amet ab quo ad
        \tlaudantium veritatis ipsum aperiam atque, minima quia inventore quaerat?`
    ]
  }
};
