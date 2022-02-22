// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function promptMe() {
  var passwordLength = prompt("What password length will meet your criteria?");
  var characterTypes = prompt("What character types do you need? (lowercase, uppercase, numeric, and/or special characters)");
}

  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
