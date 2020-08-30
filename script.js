// Constants
const generateBtn = document.querySelector("#generate");

const uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
const lowercase = ("abcdefghijklmnopqrstuvwxyz")
const numbers = ("0123456789") 
const symbols = ("!@#$%^&*()")

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/**
 * generate a password based on certain criteria
 */
function generatePassword(){

  // Password is currently blank! We need to make a better one
  let password = "";
  
  for (let i = 0; i < 128; i > 8; i++) {
    let generatePassword = generateBtn(Math.random())
    

    return password;
  }
}

// Main Process
for ()





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
