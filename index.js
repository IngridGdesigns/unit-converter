
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// 20 meters = 65.616 feet | 20 feet = 6.096 meters
let lengthUnit = document.getElementById("length");
let volumeUnit = document.getElementById("volume");
let massUnit = document.getElementById("mass");
const inputNum = document.getElementById("input-number");
const btnConvert = document.getElementById("btn-convert");

// let txt = "";
function convert(number) {
    
        console.log("here is my num");
      
        const l = `${number} meters = 11 feet | ${number} feet = 11 meters`;
        return l;
    
}

btnConvert.addEventListener("click", () => {
    let stringNum = inputNum.value;
    let num = parseInt(stringNum);
    
    lengthUnit.textContent = convert(num)
 
})

