
let b = true
while(b){
    let age = parseInt(prompt("What is your age: "));
    if (age>=18){
        alert("you can drive");
    }
    else{
        alert("you cannot drive");
    }
    b = confirm("Do you want to go to prompt again: ")
}