// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input

function randomElement(arr){
  var random = Math.random()
  var index = Math.floor(random * arr.length)
  return arr[index]
}

var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var special = ['!', '@', '#', '$', '^', '&', '*', '?', '_', '-']

for(var i = 0; i < 128; i++) {
  if (condition) {
    
  } else {

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
