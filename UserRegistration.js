
/******************************************************************************
 *
 * Execution       : 1. default node         cmd> node UserRegistration.js
 *                   2. if nodemon installed cmd> nodemon UserRegistration.js
 * 
 * Purpose         : User Registration System needs to ensure all validations are in place during the User Entry
 *
 * @description    : User Registration System needs to ensure all validations are in place during the User Entry.
 *                   - First name starts with Capital letter and has minimum 3 characters.
 *                   - Last name starts with Capital letter and has minimum 3 characters.
 *                   - Email has 3 mandatory parts (abc, bl & co) and 2 optional (xyz & in) with precise @ and . positions.
 *                   - Mobile number should contain Country code follow by space and 10 digit number
 *                   - Password should contain minimum 8 Characters, should have at least 1 Upper Case, should have
 *                     at least 1 numeric number, should have at least 1 Special Character
 *
 * @file           : UserRegistrationController.js
 * @overview       : User Registration System needs to ensure all validations are in place during the User Entry
 * @module         : UserRegistration
 * @author         : RanbirSingh <Ranbir.s7925@gmail.com> 
 * @version        : 1.0 
 * @since          : 03-11-2020 
 * ******************************************************************************/

const prompt = require('prompt-sync')()
const namePattern = new RegExp("^[A-Z][A-Za-z]{2,}$");
const emailPattern = new RegExp("^[0-9a-zA-Z]+[.]*[0-9a-zA-z]*[@][a-zA-Z]+([.][a-zA-Z]+){1,3}$");
const phoneNumberPattern = new RegExp("^[0-9]{2}[ ][0-9]{10}$");
const passwordPattern = new RegExp("((?=.*\\d)(?=.*[a-z]?)(?=.*[A-Z])(?=.*[@#$%]){1}.{8,})$");

/**
 * 
 * @param {String} input User input which is to matched
 * @param {RegExp} regexPattern Regex pattern which is used to match the string
 * @returns True/Flase based on condition
 */
function checkValidation(input, regexPattern) {
    return regexPattern.test(input)
}

/**
 * @description Promt user to enter First name and validate it
 */
function firstName(){
    let firstname = prompt("Enter your first name: ")
    if(!checkValidation(firstname,namePattern)){
        console.log("Enter Valid First Name");
        firstName()
    }
}

/**
 * @description Promt user to enter Last name and validate it
 */
function lastName(){
    let lastname = prompt("Enter your last name: ")
    if(!checkValidation(lastName,namePattern)){
        console.log("Enter Valid Last Name");
        lastName()
    }
}

/**
 * @description Promt user to enter Email and validate it
 */
function email(){
    let emailId = prompt("Enter your Email Id: ")
    if(!checkValidation(emailId,emailPattern)){
        console.log("Enter Valid Email Id");
        email()
    }
}

/**
 * @description Promt user to enter Phone number and validate it
 */
function phoneNoValidator(){
    let phoneNo = prompt("Enter your Phone Number: ")
    if(!checkValidation(phoneNo,phoneNumberPattern)){
        console.log("Enter Valid Phone Number");
        phoneNoValidator()
    }
}

/**
 * @description Promt user to enter Phone number and validate it
 */
function passwordValidator(){
    let password = prompt("Enter your Password: ")
    if(!checkValidation(password,passwordPattern)){
        console.log("Enter Valid Password");
        passwordValidator()
    }
}

firstName()
lastName()
email()
phoneNoValidator()
passwordValidator()