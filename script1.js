// Assignment Code
let generateBtn = document.querySelector("#generate");
// let pwLength = [];
let password = [];

let chosenValues = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let bigLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let funkyLetters = ["!","@","#","$","%","^","&","*","(",")","-","+","~",",","<",">","?",":",";",'"'];
let numbers = ["1","2","3","4","5","6","7","8","9","0"];






function generatePassword(){
    
    let pwLength = prompt("enter password length (enter # between 8 and 128 characters)");
    if (pwLength < 8) {
        alert("password to short");
        generatePassword();
    }
    if (pwLength > 128) {
        alert("password to long");
        generatePassword();
    }
    else {
        pwLength = pwLength;
        password = [];
    }
    console.log(pwLength)
    console.log(pwLength);
    
    let allowCaps = prompt("are caps ok? (y/n)")
    if (allowCaps == "y") {
        chosenValues = chosenValues.concat(bigLetters);
    }
    console.log(chosenValues)
    
    let allowSpec = prompt("are special characters ok (y/n)")
    if (allowSpec == "y") {
        chosenValues = chosenValues.concat(funkyLetters);
    }
    console.log(chosenValues)
    
    let allowNumb = prompt("are numbers ok? (y/n)")
    if (allowNumb == "y") {
        chosenValues = chosenValues.concat(numbers);
    }
    console.log(chosenValues)
    
    let userPWlength = parseInt(pwLength)
    for (let i = 0; i < userPWlength; i++) {
        let randomNumber = Math.floor(Math.random()*chosenValues.length);
        password.push(chosenValues[randomNumber]);  
        
        console.log(chosenValues[randomNumber]);
    }
    return password.join("");
    
    
}
// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
