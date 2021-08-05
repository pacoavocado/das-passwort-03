// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){

const charSet1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const charSet2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const charSet3 = ["!","@","#","$","%","^","&","*","(",")","-","+","~",",","<",">","?",":",";",'"'];

let chosenValues = [];

chosenValues = [ ...charSet1];
chosenValues = [ ...chosenValues, ...charSet2];
chosenValues = [ ...chosenValues, ...charSet3];

// console.log(chosenValues)cd


let randomNumber = Math.floor(Math.random()*chosenValues.length);

let password = [];

chosenValues[randomNumber];
password.push(chosenValues[randomNumber]);
password.push(chosenValues[randomNumber]);
password.push(chosenValues[randomNumber]);
password.push(chosenValues[randomNumber]);
password.push(chosenValues[randomNumber]);
password.push(chosenValues[randomNumber]);
password.push(chosenValues[randomNumber]);
password.push(chosenValues[randomNumber]);

password.join("");

console.log(randomNumber);

console.log(password)
// console.log(chosenValues)
return password;

} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
