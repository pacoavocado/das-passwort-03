// Assignment Code
let generateBtn = document.querySelector("#generate");

 
// character set arrays
let chosenValues = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let capLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let spcChar = ["!","@","#","$","%","^","&","*","(",")","-","+","~",",","<",">","?",":",";",'"'];
let regNumbers = ["1","2","3","4","5","6","7","8","9","0"];

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

chosenValues = [ ...chosenValues, ...capLetters];
chosenValues = [ ...chosenValues, ...spcChar];
chosenValues = [ ...chosenValues, ...regNumbers]

let randomNumber = Math.floor(Math.random()*chosenValues.length);

console.log(chosenValues)



function generatePassword(){
  
  if (pwLength.length <= 8 ){
    
    alert("not enough characters");
    
  }  
  else if (pwLength.length >= 128 ){
    
    alert("too many characters");
    
  }  
  else {
    userPWlength = pwLength
  }  
  
  if (allowCaps == "y"){
    
    if (   === areUsure){
      
    }
    else {
      sureState2 = false;
    }  
    
  }  
  
  if (allowSpecial == "y"){
    if (sureState3){
      
    }
    else {
      allowSpecial;
    }
  }  
  
  if (allowNumbers == "y"){
    if (sureState4){
    }
    else{
      allowNumbers;
    }
  }   
  
  // console.log()
  // for (let i = 0; i < userPWlength.value, i++); {
  //  Math.floor(Math.random() * chosenValues.length)
  // }

  
  // chosenValues = [ ...charSet1];
  // chosenValues = [ ...chosenValues, ...capLetters];
  // chosenValues = [ ...chosenValues, ...spcChar];
  // chosenValues = [ ...chosenValues, ...regNumbers];
  // console.log(chosenValues)cd
  
  
 

chosenValues[randomNumber];
password.push(chosenValues[randomNumber]);
for (let i = 0; i < userPWlength.length; i++) {
  password = userPWlength[i];
  password.join("");
}



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
