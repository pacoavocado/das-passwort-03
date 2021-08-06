// Assignment Code
let generateBtn = document.querySelector("#generate");

 
// character set arrays
const charSet1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const charSet2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const charSet3 = ["!","@","#","$","%","^","&","*","(",")","-","+","~",",","<",">","?",":",";",'"'];
const charSet4 = ["1","2","3","4","5","6","7","8","9","0"];

// prompt for password length
let pwLength = prompt("enter password length (enter # between 8 and 128 characters)");
// let sureState1 = confirm("are you sure (y/n)")
console.log(pwLength);
// console.log(sureState1);
// prompt for capital letters
let allowCaps = prompt("do you want to use capital letters (y/n)");
let sureState2 = confirm("are you sure (y/n)")
console.log(allowCaps);
console.log(sureState2);

// prompt for special characters
let allowSpecial = prompt("do you want to use special characters (y/n)");
let sureState3 = confirm("are you sure (y/n)")
console.log(allowSpecial);
console.log(sureState3);
// propt for numbers
let allowNumbers = prompt("do you want to use numbers (y/n)");
let sureState4 = confirm("are you sure");
console.log(allowNumbers);
console.log(sureState4);
// prompt for indecicive ppl
let areUsure = [true];
let chosenValues = [];
let userPWlength = [];
let password = [];



let randomNumber = Math.floor(Math.random()*chosenValues.length);

console.log(chosenValues)

  

function generatePassword(){
  
  if (pwLength <= 8 ){
  
    alert("not enough characters");
    
  }  
  else if (pwLength >= 128 ){
    
    alert("too many characters");
    
  }  
  else {
    userPWlength = pwLength
  }  
  
  if (allowCaps == "y"){
      
    if (sureState2 === areUsure){
      
      chosenValues = [ ...chosenValues, ...charset2];
    }
    else {
      sureState2 = false;
    }  
    
  }  
  
  if (allowSpecial == "y"){
    if (sureState3){
      
      chosenValues = [ ...chosenValues, ...charSet3];
    }
    else {
      allowSpecial;
    }
  }  
  
  if (allowNumbers == "y"){
    if (sureState4){
      chosenValues = [ ...chosenValues, ...charSet4]
    }
    else{
      allowNumbers;
    }
  }   
  
  console.log()
  
  // chosenValues = [ ...charSet1];
  // chosenValues = [ ...chosenValues, ...charSet2];
  // chosenValues = [ ...chosenValues, ...charSet3];
  // chosenValues = [ ...chosenValues, ...charSet4];
  // console.log(chosenValues)cd
  

 

chosenValues[randomNumber];
password.push(chosenValues[randomNumber]);
for (let i = 0; i < pwLength.length; i++) {
  password = password[i];
  
}

password.join("");

console.log(randomNumber);

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
