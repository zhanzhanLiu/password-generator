// Assignment code here

// function to ask about the password length
var passwordLength = function () {
    var length = window.prompt("Please choose the length of your password (the length should be between 8 and 128 characters)")
    
    // validate prompt answer
    if (length >= 8 && length <=128){
        return length
    }
    else {
        window.alert("You need to provide a valid answer! Please try again.");
        return passwordLength();
    }
}

// function to check if player wants lowercase letters
var lowerCase = function() {
  // ask player if they'd like to have lower case in their password
  var promptLower = window.prompt('Would you like to have lowercase letters in your password? Enter "Y" or "N" to choose.');

  // validate prompt answer

  // convert prompt to all lowercase so we can check with less options
  promptLower = promptLower.toLowerCase();

  if (promptLower !="y" && promptLower !="n") {
    window.alert("You need to provide a valid answer! Please try again.");
    // use return to call it again and stop the rest of this function from running
    return lowerCase();
  }

  if (promptLower === "y") {
      // return true if the user wants lowercase letter
      return true;
  }
  return false;
};

// function to check if player wants Uppercase letters
var upperCase = function() {
  // ask player if they'd like to have upper case in their password
  var promptUpper = window.prompt('Would you like to have uppercase letters in your password? Enter "Y" or "N" to choose.');

  // validate prompt answer

  // convert prompt to all lowercase so we can check with less options
  promptUpper = promptUpper.toLowerCase();

  if (promptUpper !="y" && promptUpper !="n") {
    window.alert("You need to provide a valid answer! Please try again.");
    // use return to call it again and stop the rest of this function from running
    return upperCase();
  }

  if (promptUpper === "y") {
      // return true if the user wants uppercase letter
      return true;
  }
  return false;
};

// function to check if player wants numbers
var number = function() {
  // ask player if they'd like to have numbers in their password
  var promptNumber = window.prompt('Would you like to have numbers in your password? Enter "Y" or "N" to choose.');

  // validate prompt answer

  // convert prompt to all lowercase so we can check with less options
  promptNumber = promptNumber.toLowerCase();

  if (promptNumber !="y" && promptNumber !="n") {
    window.alert("You need to provide a valid answer! Please try again.");
    // use return to call it again and stop the rest of this function from running
    return number();
  }

  if (promptNumber === "y") {
      // return true if the user wants numbers
      return true;
  }
  return false;
};

// function to check if player wants special characters
var special = function() {
  // ask player if they'd like to have special characters in their password
  var promptSpecial = window.prompt('Would you like to have special characters in your password? Enter "Y" or "N" to choose.');

  // validate prompt answer

  // convert prompt to all lowercase so we can check with less options
  promptSpecial = promptSpecial.toLowerCase();

  if (promptSpecial !="y" && promptSpecial !="n") {
    window.alert("You need to provide a valid answer! Please try again.");
    // use return to call it again and stop the rest of this function from running
    return special();
  }

  if (promptSpecial === "y") {
      // return true if the user wants special characters
      return true;
  }
  return false;
};

// function to check if the user select at least one character type
var typeValid = function(){
  var lowerTF = lowerCase();
  var upperTF = upperCase();
  var numberTF = number();
  var specialTF = special();

  if (!lowerTF && !upperTF && !numberTF && !specialTF){
      window.alert("You need to select at least one character type");
      // use return to call it again and stop the rest of this function from running
      return typeValid();
  }
  return [lowerTF, upperTF, numberTF, specialTF];
}

// possible letters and special characters
var letters="abcdefghijklmnopqrstuvwxyz";
letters = letters.split("");
var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
specialChar = specialChar.split("");



function generatePassword (){
  // usable variable values
  pwLength = passwordLength();
  types = typeValid();
  var passwordText = [];
  var passwordType = [];
  for (var i = 0; i < pwLength; i++) {
    // select the type of character of i'th digit (0-lowercase, 1-uppercase, 2-number, 3-special character)
    var digitType = function(){
        type = Math.floor(Math.random()*4);
            // check if the user selects the type of character
            if (!types[type]){
                return digitType();
            }
            return type;
        }
        
        digitType = digitType();
    
        // generate each digit of password
        // if lowercase
        if (digitType === 0){
            var letterNumber = Math.floor(Math.random()*26);
            passwordText[i] = letters[letterNumber];
            passwordType[i] = digitType;
        }
        // if uppercase
        if (digitType === 1){
            var letterNumber = Math.floor(Math.random()*26);
            passwordText[i] = letters[letterNumber].toUpperCase();
            passwordType[i] = digitType;
        }
        // if number
        if (digitType === 2){
            passwordText[i] = Math.floor(Math.random()*10);
            passwordType[i] = digitType;
        }
        // if special character
        if (digitType === 3){
            var specialNumber = Math.floor(Math.random()*(specialChar.length));
            passwordText[i] = specialChar[specialNumber];
            passwordType[i] = digitType;
        }
    }
    console.log(passwordText);

    // check if the password contains every type of characters selected by the user
    for (i=0; i<types.length; i++){
        if (types[i]){
            console.log(passwordType.includes(i));
            if (!passwordType.includes(i)){
                return generatePassword();
            }
        }
    }
    return passwordText.join("");

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passwordText.value)
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
