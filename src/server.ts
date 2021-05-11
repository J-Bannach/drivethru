const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// readline.question(`What's your name?`, (name: string) => {
//   console.log(`Hi ${name}!`);
//   readline.close();
// });

readline.question(`Which password do you want to use?`, (password: string) => {
  readline.question(`What do you want to do with it?`, (command: string) => {
    console.log(`Please ${command} this password: ${password}`);
    readline.close();
  });
});
