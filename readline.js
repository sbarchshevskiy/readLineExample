const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hey, what did you have for breakfast ', (answer) => {
  console.log(`${answer}? very nice! I love ${answer} too`);
  rl.question('How many coffees did you drink today already', (answer) =>{
    console.log(`${answer}? That many? How do you manage to sleep an night?`);
  });
  rl.question('have lots of work to do today, huh?', (answer) =>{
    console.log(`${answer}? yeah.. well, hang in there...`);
  });
  rl.close();
});