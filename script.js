// Assignment Code
var generateBtn = document.querySelector("#generate");


// creates random element from an array
function randomElement(arr) {
  var random = Math.random();
  var index = Math.floor(random * arr.length);
  return arr[index];
}

//  generating password
function generatePassword() {

  // defining password length
  var passwordLength = window.prompt("How many characters would you like your password to have? (between 8-128)", 15);
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) === true) {
    window.prompt("Please enter valid length. (between 8-128)");
    return passwordLength
  } 

  // numbers?
  var char1 = window.confirm("Would you like numbers included?");
  // lowercase?
  var char2 = window.confirm("Would you like lowercase characters?");
  // uppercase?
  var char3 = window.confirm("Would you like uppercase characters?");
  // special characters?
  var char4 = window.confirm("Would you like special characters?");

  // defining character types
  var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var special = ['!', '@', '#', '$', '^', '&', '*', '?', '_', '-'];

  // initalizing password
  var password = '';

  // adding empty array to add password criteria to
  var possChoices = []

  // if char1 true add digits to possChoices array and validating selected criteria is added
  if (char1 === true) {
    possChoices = possChoices.concat(digits);
    password = password + randomElement(digits);
  }
  // if char2 true add lower to possChoices array and validating selected criteria is added
  if (char2 === true) {
    possChoices = possChoices.concat(lower);
    password = password + randomElement(lower);
  }
  // if char3 true add upper to possChoices array and validating selected criteria is added
  if (char3 === true) {
    possChoices = possChoices.concat(upper);
    password = password + randomElement(upper);
  }
  // if char4 true add digits to possChoices array and validating selected criteria is added
  if (char4 === true) {
    possChoices = possChoices.concat(special);
    password = password + randomElement(special);
  }
  
  // creating password with defined criteria
  for(var i = password.length; i < passwordLength; i++) {
    password = password + randomElement(possChoices);
  }
  return password
}

// writing password to the screen
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
