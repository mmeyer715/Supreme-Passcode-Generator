// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input

function randomElement(arr) {
  var random = Math.random();
  var index = Math.floor(random * arr.length);
  return arr[index];
}

function generatePassword() {
  //defining password length
  var passwordLength = window.prompt("How many characters would you like your password to have? (between 8-128)", 15);
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) === true) {
    window.prompt("Please enter valid length. (between 8-128)");
    return passwordLength
  } 
  //defining numbers
  var char1 = window.confirm("Would you like numbers included?");
  //defining lowercase
  var char2 = window.confirm("Would you like lowercase characters?");
  //defining uppercase
  var char3 = window.confirm("Would you like uppercase characters?");
  //defininf special characters
  var char4 = window.confirm("Would you like special characters?");

  var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var special = ['!', '@', '#', '$', '^', '&', '*', '?', '_', '-'];
  var password = '';

  var possChoices = []
  
  if (char1 === true) {
    possChoices = possChoices.concat(digits);
    password = password + randomElement(digits);
  }
  if (char2 === true) {
    possChoices = possChoices.concat(lower);
    password = password + randomElement(lower);
  }
  if (char3 === true) {
    possChoices = possChoices.concat(upper);
    password = password + randomElement(upper);
  }
  if (char4 === true) {
    possChoices = possChoices.concat(special);
    password = password + randomElement(special);
  }

  for(var i = password.length; i < passwordLength; i++) {
    password = password + randomElement(possChoices);
  }
  return password
}

function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
