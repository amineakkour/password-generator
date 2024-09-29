function slideSetting(){
    const chevron = document.querySelector("#chevron");
    const settingWrapper = document.querySelector(".wrapper");

    settingWrapper.classList.toggle("show")
    settingWrapper.classList.toggle("hide")
    chevron.classList.toggle("rotate180")
};

function backToDefault(){
    const checkBoxes = document.querySelectorAll(".checkBox");
    const lengthEl = document.querySelector("#length")

    checkBoxes.forEach(checkBox => checkBox.checked = true);

    checkBoxes[checkBoxes.length -1].checked = false;
    lengthEl.value = 10;
}

function getRandomNumber(max){
    return Math.floor(Math.random() * (max +1))
}

function getRandomChar(upp, low, spc, numb){
    var charsUsed = "";
    const uppercaseAlb = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseAlb = "abcdefghijklmnopqrstuvwxyz";
    const specialCharacters = `~!@#$%^&*()-_+={}[]|\\:;"<>,.?/`;
    const numbers = "0123456789";

    if((upp + low + spc + numb) == 0){
        alert("Error: Please ensure that at least one checkbox is selected.")
        return ""
    }

    charsUsed += upp ? uppercaseAlb : "";
    charsUsed += low ? lowercaseAlb : "";
    charsUsed += spc ? specialCharacters : "";
    charsUsed += numb ? numbers : "";

    const charsUsedLeng = charsUsed.length;
    const rand = getRandomNumber(charsUsedLeng -1)

    return charsUsed[rand];
}

function generatePassword(){
    const passwordValueEl = document.querySelector("#passwordValue");
    const lengthEl = document.querySelector("#length");
    const uppercaseCb = document.querySelector("#uppercase");
    const lowercaseCb = document.querySelector("#lowercase");
    const numbersCb = document.querySelector("#numbers");
    const spcCb = document.querySelector("#spch");
    var result = "";


    
    if(lengthEl.value < 10 || lengthEl.value > 40){
        passwordValueEl.value = "";
        passwordValueEl.placeholder = "Error: Password length must be between 10 and 40.";
        return "";
    }
    
    const checkCheckBoxStatu = uppercaseCb.checked + lowercaseCb.checked + numbersCb.checked + spcCb.checked > 0 
    
    if(!checkCheckBoxStatu){
        passwordValueEl.value = "";
        passwordValueEl.placeholder = "Error: Please ensure that at least one checkbox is selected.";
        return "";
    }

    for(let i = 0; i < lengthEl.value; i++){
        result += getRandomChar(uppercaseCb.checked, lowercaseCb.checked, spcCb.checked, numbersCb.checked)
    }
        passwordValueEl.value = result;
        passwordValueEl.placeholder = "";
    }

export {slideSetting, backToDefault, generatePassword}
