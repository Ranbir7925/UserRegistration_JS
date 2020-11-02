console.log("Welcome to User Registration ..\n");
const prompt = require('prompt-sync')()
let namePattern = new RegExp("^[A-Z][A-Za-z0-9]{2,}$");
let name = prompt("Enter your first name: ")

if (namePattern.test(name)) {
    console.log(name + " your first name is saved");
}
else
    console.log("Invalid Name");