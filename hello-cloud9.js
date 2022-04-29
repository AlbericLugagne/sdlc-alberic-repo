var readline = require('readline-sync');
var i = 10;
var input;

console.log("Hello there, Alberic!");
console.log("i is " + i);

do {
    input = readline.question("Enter a number (or 'Exit' to quit): ");
    if (input === 'Exit') {
        console.log('OK, exiting.');
    }
    else{
        i += Number(input);
        console.log("i is now " + i);
    }
} while (input != 'q');

console.log("Goodbye!");
