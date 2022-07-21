const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function number_grabber() {
    
}

rl.question("What is your name? ", function (answer) {
  



  console.log("\n\nClosing the interface");
  rl.close();
});

