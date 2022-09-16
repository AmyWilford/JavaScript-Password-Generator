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
let allChars = number.concat(lowercase,uppercase,specialChar);

// Function to choose to stop playing.
let keepGoing = function(r){
  r = confirm('Invalid Entry, do you want to try again?');
if(r) {
  generatePassword();
} else {
alert('OK we can try again another day. Bye!');
}
};
// QUESTION HOW TO CLEAR FROM ANY ALERTS AND START WITH BLANK PAGE

// Function to determine password length
let lengthPrompt = function() {
   passLength = prompt ('How long would you like your password to be (select a number between 8 and 128 characters');
  if (/*typeof passLength =='number'&&*/ passLength >=8 && passLength<=128) {
    console.log(passLength);
  } else {
    keepGoing();
  }
}

// function to determine inclusion of lowercase letters
let lowercasePrompt = function(){
  
  let lowercaseR = prompt('Do you want to include lowercase letters (Y or N?').toUpperCase();
  if (lowercaseR ==='Y') {
    console.log(lowercase);
    uppercasePrompt();
  } else if (lowercaseR==='N') {
    lowercase='';
    console.log(uppercase);
    console.log('uppercase only')
  } else {
    keepGoing();
  }
}
// 
let uppercasePrompt = function(){
  let uppercaseR = prompt('Do you want to include uppercase letters (Y or N?)').toUpperCase();
  if(uppercaseR ==='Y') {
    console.log(uppercase);
  } else if (uppercaseR==='N') {
      uppercase='';
      console.log(uppercase);
  } else {
    keepGoing();
  }
}
// Function to include numbers
let numericPrompt = function() {
  let numberR = prompt('Do you want to include numbers in your password').toUpperCase();
  if(numberR ==='Y') {
    console.log('yes to numbers');
  } else if (numberR==='N') {
    number='';
    console.log('no numbers');
  } else {
    keepGoing();
  }
}
// Function to include special characters
let specialCharPrompt = function() {
  let charR = prompt('Do you want to include special characters in your password').toUpperCase();
  if(charR ==='Y') {
    console.log('yes to characters');
  } else if (charR==='N') {
    specialChar='';
      console.log('no characters');
  } else {
    keepGoing();
  }
}
function createPassword(y){
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
  };

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
