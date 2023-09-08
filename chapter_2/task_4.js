const prompt = require("prompt-sync")();
let num = parseInt(prompt("write a number; "));
if (num%2==0 || num %3==0){
    console.log("youe number is either divisible by 2 or 3");
}
  

else{
    console.log("youe number is not either divisible by 2 or 3");
}