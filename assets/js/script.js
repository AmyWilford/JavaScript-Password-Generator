// Selects 'Generate Password' button from HTMLL
var generateBtn = document.querySelector("#generate");

// Declares all password component variables
let passLength;
let lowercase;
let uppercase;
let number;
let specialChar;

// Function to determine password length
let lengthPrompt = function() {
   passLength = prompt ('How long would you like your password to be\n(select a number between 8 and 128)');
  if (isNaN(passLength)== false && passLength >=8 && passLength<=128) {
    console.log('password length: '+ passLength);
  } else {
    alert("Invalid Entry - let's try again") 
    lengthPrompt();
    }
    return;
  }

// function to determine inclusion of lowercase letters
let lowercasePrompt = function(){
  let lowercaseR = confirm('Do you want to include lowercase letters?')
  if (lowercaseR) {
    lowercase='abcdefghijklmnopqrstuvwxyz';
    console.log('include lowercase')
  } else {
    lowercase='';
    console.log(lowercase);
    console.log('no lowercase')
      }
      return;
    }

// Function to dermine inclusion Of uppercase letters
let uppercasePrompt = function(){
  let uppercaseR = confirm('Do you want to include uppercase letters?')
  if(uppercaseR) {
    uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    console.log('include uppercase')
  } else{
    uppercase='';
    console.log('No uppercase')
    }
      return;
  }

// Function to include numbers
let numericPrompt = function() {
  let numberR = confirm('Do you want to include numbers in your password?')
  if(numberR) {
    number='1234567890';
    console.log('include numbers')
  } else{
    number='';
    console.log('no numbers');
      }
      return;
  }

// Function to include special characters
let specialCharPrompt = function() {
  let charR = confirm('Do you want to include special characters in your password?')
  if(charR) {
    specialChar='!@#$%^&*()';
    console.log('Include special characters: '+ specialChar);
  } else {
      specialChar='';
      console.log('No special characters');
      }
      return;
    }

// Function to confirm at least one prompt was answered affirmative
  function confirmPrompts(){
    allChars='';
    allChars = allChars.concat(lowercase,uppercase,number,specialChar);
    if (allChars == '') {
      alert("Invalid Entry. \nYou need to include something in your password.\nPlease generate again.")
    } else {
      console.log('Available special characters: '+ allChars)
    }
    return;
  }

// Function to generate password
let generatePassword= function(){
  let randomPassword='';
  lengthPrompt();
  lowercasePrompt();
  uppercasePrompt();
  numericPrompt();
  specialCharPrompt();
  confirmPrompts();
  for(let i=0; i<passLength; i++){
    let randomNum = Math.floor(Math.random()*allChars.length);
    randomPassword += allChars.substring(randomNum, randomNum+1)
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
