// Assignment Code
// Selects generate password button from HTL
var generateBtn = document.querySelector("#generate");
// Function for password prompts

let startAgain= function() {
  confirm('Invalid Response. Would you like to try again from the start?');
  if (confirm) {
    passwordPrompts();
  } else {
    alert ('Ok, we can try another time');
  }
}

let lengthPrompt = function() {
  let passLengthR = prompt ('How long would you like your password to be (select a number between 8 and 128 characters');
  if (passLengthR >=8 && passLengthR<=128) {
    console.log(passLengthR);
  } else {
    startAgain();
  }
}
let lowercasePrompt = function(){
  let lowercaseR = prompt('Do you want to include lowercase letters (Y or N?');
  if(lowercaseR ==='Y') {
    console.log('yes to lowercase');
  } else if (lowercaseR==='N') {
      console.log('no lowercase');
  } else {
    startAgain();
  }
}

let uppercasePrompt = function(){
  let uppercaseR = prompt('Do you want to include uppercase letters (Y or N?)');
  if(uppercaseR ==='Y') {
    console.log('yes to uppercase');
  } else if (uppercaseR==='N') {
      console.log('no uppercase');
  } else {
    startAgain();
  }
}
let numericPrompt = function() {
  let numberR = prompt('Do you want to include numbers in your password');
  if(numberR ==='Y') {
    console.log('yes to numbers');
  } else if (numberR==='N') {
      console.log('no numbers');
  } else {
    startAgain();
  }
}
let specialCharPrompt = function() {
  let charR = prompt('Do you want to include numbers in your password');
  if(charR ==='Y') {
    console.log('yes to characters');
  } else if (charR==='N') {
      console.log('no characters');
  } else {
    startAgain();
  }
}

function passwordPrompts() {
  alert("Let's make you a secure password. First, let's determine your preferred password criteria."); 
    lengthPrompt();
    lowercasePrompt();
    uppercasePrompt();
    numericPrompt();
    specialCharPrompt();
    console.log('all questions asked');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button - will call writePassword function
// AMY REPLACE FUNCTION WITH writePassword
generateBtn.addEventListener("click", passwordPrompts);
