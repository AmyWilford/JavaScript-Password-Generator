// Assignment Code
// Selects generate password button from HTL
var generateBtn = document.querySelector("#generate");

// Declare all password component variables
let randomPassword='';
let passLength;
let lowercase ='abcdefghijklmnopqrstuvwxyz';
let uppercase=lowercase.toUpperCase();
let number='1234567890';
let specialChar='!@#$%^&*()';
let allChars='';

// Function to determine password length
let lengthPrompt = function() {
   passLength = prompt ('How long would you like your password to be (select a number between 8 and 128)');
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
    console.log('include lowercase')
  } else {
    lowercase='';
    console.log(lowercase);
    console.log('no lowercase')
      }
    }

// function to dermine inclusionof uppercase letters
let uppercasePrompt = function(){
  let uppercaseR = confirm('Do you want to include uppercase letters?')
  if(uppercaseR) {
    console.log(uppercase);
    console.log('include uppercase')
  } else{
        uppercase='';
       console.log(uppercase);
       console.log('No uppercase')
      }
    }

// Function to include numbers
let numericPrompt = function() {
  let numberR = confirm('Do you want to include numbers in your password?')
  if(numberR) {
    console.log(number)
    console.log('include numbers')
  } else{
    number='';
    console.log('no numbers');
      }
  }

// Function to include special characters
let specialCharPrompt = function() {
  let charR = confirm('Do you want to include special characters in your password?')
  if(charR) {
    console.log(specialChar);
    console.log('Include special characters');
  } else {
      specialChar='';
      console.log('No special characters');
      }
    }

// function to confirm entry into prompts
  function confirmPrompts(){
    allChars = allChars.concat(number,lowercase,uppercase,specialChar);
    if (allChars == '') {
      alert("You need to include something in your password, please generate again")
      return;
    } else {
      (console.log(allChars))
      return;
    }
  }

// Function to generate password
let generatePassword= function(){
  alert("Let's make you a secure password. First, let's determine your preferred password criteria.")
  // reset variables to original strings to allow generation of password of first attempt failed
  randomPassword ='';
  lowercase ='abcdefghijklmnopqrstuvwxyz';
  uppercase=lowercase.toUpperCase();
  number='1234567890';
  specialChar='!@#$%^&*()';
    lengthPrompt();
    lowercasePrompt();
    uppercasePrompt();
    numericPrompt();
    specialCharPrompt();
    confirmPrompts();
    // passLength=passLength;
    for(let i=0; i<passLength; i++){
     let randomNum = Math.floor(Math.random()*allChars.length);
     randomPassword +=allChars.substring(randomNum, randomNum+1)
   };
   console.log(randomPassword);
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log('Password');
  passwordText.value = password;

}

// Add event listener to generate button - will call writePassword function
generateBtn.addEventListener("click", writePassword);
