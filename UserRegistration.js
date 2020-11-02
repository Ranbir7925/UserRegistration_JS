console.log("Welcome to User Registration ..");
console.log("Name should start with Capital letter and should have minimum 3 characters.");

const prompt = require('prompt-sync')()
const namePattern = new RegExp("^[A-Z][A-Za-z]{2,}$");
const emailPattern = new RegExp("^[0-9a-zA-Z]+[.]*[0-9a-zA-z]*[@][a-zA-Z]+([.][a-zA-Z]+){1,3}$");
const phoneNumberPattern = new RegExp("^[0-9]{2}[ ][0-9]{10}$");
const passwordPattern = new RegExp("((?=.*\\d)(?=.*[a-z]?)(?=.*[A-Z])(?=.*[@#$%]){1}.{8,})$");

function checkValidation(name, Pattern) {
    let flag
    if (Pattern.test(name)) {
        console.log(" Saved");
        flag = false
    }
    else {
        console.log("Invalid .. Please enter agian ");
        flag = true
    }
    return flag 
}

// while (true) {
//     let firstName = prompt("Enter your first name: ")
//     let check = checkValidation(firstName, namePattern)
//     if (check == false)
//         break;
// }

// while (true) {
//     let lastName = prompt("Enter your last name: ")
//     let check = checkValidation(lastName, namePattern)
//     if (check == false)
//         break;
// }

// while (true) {
//     let email = prompt("Enter your email id: ")
//     let check = checkValidation(email, emailPattern)
//     if (check == false)
//         break;
// }

// while (true) {
//     let phoneNumber = prompt("Enter your PhoneNumber: ")
//     let check = checkValidation(phoneNumber, phoneNumberPattern)
//     if (check == false)
//         break;
// }

while (true) {
    let password = prompt("Enter your Password: ")
    let check = checkValidation(password, passwordPattern)
    if (check == false)
        break;
}