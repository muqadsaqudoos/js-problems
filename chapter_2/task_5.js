const prompt = require("prompt-sync")();
let age = prompt("what is your age?");
let a = age>=18?  "you can drive":"you cannot drive"
console.log(a)