// Assignment Code
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

var pwd = [];
var charLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var charUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number = [0,1,2,3,4,5,6,7,8,9];
var sym = ['!', '@', '#', '%', '$'];

var numberChoice = false;
var upperChoice = false;
var lowerChoice = false;
var symbolChoice = false;

var password = [];

function generatePassword() {

  var length = ""
    while (isNaN(length) || length < 8 || length > 128) {
      length = prompt ("Choose a number between 8-128 for the length of your password.");
      if (length === null){
        break ;
      }
    }

numberChoice = confirm("Do you want your password to contain NUMBERS?");

upperChoice = confirm("Do you want your password to contain UPPERCASE LETTERS?");

lowerChoice = confirm( "Do you want your password to contain LOWERCASE LETTERS?");

symbolChoice = confirm("Do you want your password to contain SPECIAL CHARACTERS/SYMBOLS?");

  if (numberChoice === false && upperChoice === false && lowerChoice === false && symbolChoice === false) {
    alert("At least one of the criteria'" +
        "s must be selected. Please start over.")};
    
  var lengthValue = length * 1;
  console.log(typeof lengthValue);

  var charAvail = [];
  
    if (numberChoice === true) {
      charAvail =  charAvail.concat(number);
    }

    if (upperChoice === true) {
      charAvail =  charAvail.concat(charUpper);
    }

    if (lowerChoice === true) {
      charAvail =  charAvail.concat(charLower);
    }

    if(symbolChoice === true) {
      charAvail =  charAvail.concat(sym);
    }

  var password = [];
  function passChar(lengthValue, charAvail) {

    for (var i = 0; i < lengthValue; i++){
    password.push(charAvail[Math.floor(Math.random() * charAvail.length)]);
  }
  }
  
  passChar(lengthValue, charAvail);

  console.log(password);

  password = password.join('');

return password;

}

