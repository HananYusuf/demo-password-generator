// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var characterLength = prompt("How many characters would you like to include in your password?")
  
//While people give the wrong answer, keep going until they give the right answer on the length
  while(characterLength>128 || characterLength<8){
    alert("Invalid character Length");
    characterLength = prompt("Enter again (8 to 128 characters)")
  }

//Checking to see what types of characters they want to add
  var lowercaseCheck = confirm("Do you want lowercase Characters?");
  var uppercaseCheck = confirm("Do you want uppercase Characters?");
  var numbersCheck = confirm("Do you want numbers?");
  var specialCheck = confirm("Do you want special Characters?");

//Initialize characters selected at 0 every time and adding the characters selected
//via conditional statements
  var charactersSelected = "";
  if(lowercaseCheck){
    charactersSelected += "qwertyuiopasdfghjklzxcvbnm";
  }
  if(uppercaseCheck){
    charactersSelected += "QWERTYUIOPASDFGHJKLZXCVBNM";
  }
  if(numbersCheck){
    charactersSelected += "1234567890";
  }
  if(specialCheck){
    charactersSelected += "!@#$%^&*()";
  }

//creating an array with the split method to be looped for random characters
  var characterArr = charactersSelected.split('');
  var randomPass = "";

//looping through the array of characters to get a random character every time
  for (i=0; i<parseInt(characterLength); i++){
    randomPass += characterArr[Math.floor(Math.random() * characterArr.length)]
  }

  //return the random password? Confused about this one, but it works!
  return randomPass
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
