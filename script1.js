// Assignment Code
let generateBtn = document.querySelector("#generate");
let userPWlength = [];
let charSet1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let charSet2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let charSet3 = ["!","@","#","$","%","^","&","*","(",")","-","+","~",",","<",">","?",":",";",'"'];
let charSet4 = ["1","2","3","4","5","6","7","8","9","0"];

function generatePassword(){
    
    
    let pwLength = prompt("enter password length (enter # between 8 and 128 characters)");
    
    console.log(pwLength)
    if (pwLength < 8) {
        alert("password to short");
        generatePassword();
    }
    if (pwLength > 128) {
        alert("password to long");
        generatePassword();
    }
    else {
        pwLength = userPWlength;
        console.log(userPWlength);
    }
    let allowCaps = confirm("allow CAPITALS")
    
    if (allowCaps == true) {
        chosenValues = [ ...chosenValues, ...charset2];
    }
    let chosenValues = [ ...chosenValues, ...charset1];
    
        
        console.log(chosenValues);
        console.log(allwoCaps)


  
return "test";

}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
