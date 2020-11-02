console.log("Welcome to User Registration ..");
console.log("Name should start with Capital letter and should have minimum 3 characters.");

const prompt = require('prompt-sync')()
const namePattern = new RegExp("^[A-Z][A-Za-z]{2,}$");

function checkValidation(name, namePattern) {
    let flag
    if (namePattern.test(name)) {
        console.log(" Saved");
        flag = false
    }
    else {
        console.log("Invalid .. Please enter agian ");
        flag = true
    }
    return flag 
}
while (true) {
    let firstName = prompt("Enter your first name: ")
    let check = checkValidation(firstName, namePattern)
    if (check == false)
        break;
}

while (true) {
    let lastName = prompt("Enter your last name: ")
    let check = checkValidation(lastName, namePattern)
    if (check == false)
        break;
}
