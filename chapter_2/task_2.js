const prompt = require("prompt-sync")();
let age = parseInt(prompt("what is your age?"));
switch(age){
    case 12:
        console.log("your age is 12");
        break
    case 13:
        console.log("your age is 13");
        break
    case 14:
        console.log("your age is 14");
        break
    case 15:
        console.log("your age is 15");
    default:
        console.log("youe age is not speacial");
}
