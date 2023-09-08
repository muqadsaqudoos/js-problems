const prompt = require("prompt-sync")();
let n = parseInt(prompt("write a number: "));
if (n%2==0 && n%3==0){
    console.log("number is divisible by 2 and 3");
}
else {
    console.log("number is not divisible by 2 and 3");
}
