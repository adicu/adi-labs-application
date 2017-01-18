module.exports = {
  app: {
    name: "ADI Labs 2017 Application",
    port: process.env.PORT || 3000
  },
  email: {
    sender: "",
    password: "",
    receiver: "" // labs@adicu.com
  },
  test: {
    js: [
      `A) In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
        (() => {
          console.log(1);
          setTimeout(() => { console.log(2) }, 1000);
          setTimeout(() => { console.log(3) }, 0);
          console.log(4);
        })();`,
      `B) Explain the output of the following code and step by step explanation of the output
        for (let i = 0; i < 5; i++) {
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