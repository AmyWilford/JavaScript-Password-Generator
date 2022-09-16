// Assignment Code
// Selects generate password button from HTL
var generateBtn = document.querySelector("#generate");

// Declare all password component variables
let randomPassword='';
let passLength;
let lowercase ='abcdefghijklmnopqrstuvwxyz';
let uppercase=lowercase.toUpperCase();
let number='1,2,3,4,5,6,7,8,9,0';
let specialChar='!@#$%^&*()';

// Function to determine password length
let lengthPrompt = function() {
   passLength = prompt ('How long would you like your password to be (select a number between 8 and 128 characters');
  if (isNaN(passLength)== false && passLength >=8 && passLength<=128) {
    console.log(passLength);
  } else {
    alert("Invalid Entry - let's try again") 
    lengthPrompt();
    }
  }

// function to determine inclusion of lowercase letters
let lowercasePrompt = function(){
  let lowercaseR = confirm('Do you want to include lowercase letters?')
  if (lowercaseR) {
    console.log(lowercase);
    uppercasePrompt();
  } else {
    lowercase='';
    console.log(uppercase);
    console.log('uppercase only')
      }
    }
// 
let uppercasePrompt = function(){
  let uppercaseR = confirm('Do you want to include uppercase letters?')
  if(uppercaseR) {
    console.log(uppercase);
  } else{
        uppercase='';
       console.log(uppercase);
      }
    }
// Function to include numbers
let numericPrompt = function() {
  let numberR = confirm('Do you want to include numbers in your password?')
  if(numberR) {
    console.log(number)
  } else{
    number='';
    console.log('no numbers');
      }
  }

// Function to include special characters
let specialCharPrompt = function() {
  let charR = confirm('Do you want to include special characters in your password?')
  if(charR) {
    console.log('Yes speical thigns');
  } else {
      specialChar='';
      console.log('No special things');
      }
    }
function createPassword(y){
  let allChars = number.concat(lowercase,uppercase,specialChar);
  (console.log(allChars))
  y=y-1;
 for(let i=0; i<=y; i++){
   let randomPasswordNumnber = Math.floor(Math.random()*allChars.length-1);
   randomPassword +=allChars.substring(randomPasswordNumnber, randomPasswordNumnber+1)
 }
}
// Function to generate password
let generatePassword= function(){
  alert("Let's make you a secure password. First, let's determine your preferred password criteria.")
    lengthPrompt();
    lowercasePrompt();
    numericPrompt();
    specialCharPrompt();
    createPassword(passLength)
    console.log(randomPassword);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log('Password');
  passwordText.value = password;

}

// Add event listener to generate button - will call writePassword function
// AMY REPLACE FUNCTION WITH writePassword
generateBtn.addEventListener("click", writePassword);
