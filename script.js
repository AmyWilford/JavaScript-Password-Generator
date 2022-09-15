// Assignment Code
// Selects generate password button from HTL
var generateBtn = document.querySelector("#generate");
// Function for password prompts

// NOT WORKING RIGHT NOW let startAgain= confirm ('Invalid entry, do you want to try again from the start?');
// if(startAgain) {
//   passwordPrompts()
// } else {
//   alert('OK we can try again another day. Bye!')
// }
let passLength;
// Function to determine password length
let lengthPrompt = function() {
   passLength = prompt ('How long would you like your password to be (select a number between 8 and 128 characters');
  if (passLength >=8 && passLength<=128) {
    console.log(passLength);
  } else {
    alert('Invalid Entry. Start again')
  }
}
// function to determine inclusion of lowercase letters
let lowercasePrompt = function(){
  let uppercase='';
  let lowercase='';
  let lowercaseR = prompt('Do you want to include lowercase letters (Y or N?').toUpperCase();
  if (lowercaseR==='N') {
    uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    console.log(uppercase);
    console.log('uppercase only')
  } else if (lowercaseR ==='Y') {
    lowercase ='abcdefghijklmnopqrstuvwxyz';
    console.log(lowercase);
    uppercasePrompt();
    console.log('ask about uppercase')
  } else {
    alert('Invalid Entry. Start again')
  }
}
// 
let uppercasePrompt = function(){
  let uppercaseR = prompt('Do you want to include uppercase letters (Y or N?)').toUpperCase();
  if(uppercaseR ==='Y') {
    console.log('yes to uppercase');
  } else if (uppercaseR==='N') {
      console.log('no uppercase');
  } else {
    alert('Invalid Entry. Start again')
  }
}
// Function to include numbers
let numericPrompt = function() {
  let numberR = prompt('Do you want to include numbers in your password').toUpperCase();
  if(numberR ==='Y') {
    console.log('yes to numbers');
  } else if (numberR==='N') {
      console.log('no numbers');
  } else {
    alert('Invalid Entry. Start again')
  }
}
// Function to include special characters
let specialCharPrompt = function() {
  let charR = prompt('Do you want to include special characters in your password').toUpperCase();
  if(charR ==='Y') {
    console.log('yes to characters');
  } else if (charR==='N') {
      console.log('no characters');
  } else {
    alert('Invalid Entry. Start again')
  }
}

// Function to generate password
let generatePassword= function(){
  // Initial alert asking declaring that prompts are coming
  alert("Let's make you a secure password. First, let's determine your preferred password criteria.")
    
  // Password prompts in order
    lengthPrompt();
    lowercasePrompt();
    // uppercasePrompt();
    numericPrompt();
    specialCharPrompt();
    console.log('all questions asked');

  // let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // for(let i=0; i<=passLength; i++){
  //   let randomNumber = Math.floor(Math.random()*chars.Length);
  //   password+=chars.substring(randomNumber,randomNumber+1)
  //   console.log(password)
  // }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button - will call writePassword function
// AMY REPLACE FUNCTION WITH writePassword
generateBtn.addEventListener("click", writePassword);
