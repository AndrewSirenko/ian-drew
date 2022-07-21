const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function number_grabber(message) {
    console.log(message);
    new_message = message + " and Drew's message"

    return new_message 
}

rl.question("What is your name? ", function (answer) {
    number_grabber(answer)
    console.log("\n\nClosing the interface");
    rl.close();
});

