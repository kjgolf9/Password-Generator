// Assignment code // Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var userchosen = [];
var password = "";

function generatePassword() {
  var length = parseInt(
    prompt("how long do you want the password to be minimum 8, maximum 128")
  );
  if (length < 8 || length > 128) {
    alert("password cannot be less than 8 or greater than 128");
    return "";
  }
  if (Number.isNaN(length)) {
    alert("length must be a number");
    return "";
  }
  var special = confirm("click ok to include special characters");
  var numbers = confirm("click ok to include numbers");
  var uppercase = confirm("click ok to include uppercase");
  var lowercase = confirm("click ok to include lowercase");
  if (special == true) {
    userchosen = userchosen.concat(specialCharacters);
  }
  if (numbers == true) {
    userchosen = userchosen.concat(numericCharacters);
  }
  if (uppercase == true) {
    userchosen = userchosen.concat(upperCasedCharacters);
  }
  if (lowercase == true) {
    userchosen = userchosen.concat(lowerCasedCharacters);
  }
  if (!special && !numbers && !uppercase && !lowercase) {
    alert(" you must choose at least 1 kind of character");
    return "";
  }
  for (let i = 0; i < length; i++) {
    password =
      password + userchosen[Math.floor(Math.random() * userchosen.length)];
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
