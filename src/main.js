const result = document.querySelector("#result");
const passLength = document.querySelector("#length");
const passLengthResult = document.querySelector("#length-result");
const includeNumbers = document.querySelector("#numbers");
const includeSymbols = document.querySelector("#symbols");
const copyPass = document.querySelector("#copy");
const generatePass = document.querySelector("#generate");

document.addEventListener("DOMContentLoaded", ()=>{
    passLength.value = 20;
    passLengthResult.innerText = 20;

/*Set default password length 20 max on load*/
    let onLoadLength = passLength.value;
    let onLoadNumbers = includeNumbers.Checked;
    let onLoadSymbols = includeSymbols.checked;

    result.value = generatePassword(onLoadNumbers, onLoadSymbols, onLoadLength)
})

//Listen for password range change
passLength.addEventListener("change", (event)=>{
passLengthResult.innerText = event.target.value;
})

//Listen for copy button
copyPass.addEventListener("click", ()=>{
    copy(result.value);
})

generatePass.addEventListener("click", ()=>{
    const length = passLength.value;
    const numbers = includeNumbers.checked;
    const symbols = includeSymbols.checked;
    result.value = generatePassword(numbers,symbols,length);
})

function generatePassword(number, symbol, length){
    let generatePassword ="";
    let variationsCount = [number, symbol].length;

    for(let i = 0; i < length; i+=variationsCount){
        if(number){
            generatePassword += getRandomNumber();
        }
        if(symbol){
            generatePassword += getRandomSymbol();
        }
        generatePassword += getRandomLower();
    }
    const finalPassword = generatePassword.slice(0, length);
    return finalPassword;
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}

function getRandomSymbol(){
    const symbols = "!@#$%&/()=[]{}/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}



















