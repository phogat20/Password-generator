const uppperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "!@#$%&'()*+,-./:;<=>?";

const passBox = document.getElementById("pass-box");
const totalChar =  document.getElementById("total-char");
const upperInput =  document.getElementById("upper-case");
const lowerInput =  document.getElementById("lower-case");
const numberInput =  document.getElementById("numbers");
const symbolInput =  document.getElementById("symbols");




const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const generatePassword = (password = "") => {
    if(upperInput.checked){
        password += getRandomData(uppperSet);
    }
    if(lowerInput.checked){
        password += getRandomData(lowerSet);
    }
    if(numberInput.checked){
        password += getRandomData(numberSet);
    }
    if(symbolInput.checked){
        password += getRandomData(symbolSet);
    }
    if(password.length < totalChar.value){
        return generatePassword(password);
    }
   passBox.innerText = trimString(password,totalChar.value);
    
}

document.getElementById("btn").addEventListener("click",function(){
    generatePassword();
})


function trimString(str,num){
    if(str.length > num){
        let substr = str.substr(0,num);
        return substr;
    }else{
        return str;
    }
}