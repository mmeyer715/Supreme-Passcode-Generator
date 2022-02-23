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
  var char1 = window.prompt("Would you like numbers included?", "yes");
  //defining lowercase
  var char2 = window.prompt("Would you like lowercase characters?", "yes");
  //defining uppercase
  var char3 = window.prompt("Would you like uppercase characters?", "yes");
  //defininf special characters
  var char4 = window.prompt("Would you like special characters?", "yes");

  var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var special = ['!', '@', '#', '$', '^', '&', '*', '?', '_', '-'];
  
  for(var i = 0; i < passwordLength; i++) {
    if (char1 === "yes" || char1 === "YES") {
      char1 = randomElement(digits);
    } else {
      return char1 === false
    }
    if (char2 === "yes" || char2 === "YES") {
      char2 = randomElement(lower);
    // } else {
    //   char2 = null
    }
  }
  return password = char1 + char2
}

function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
