
let lengthUnit = document.getElementById("length");
let volumeUnit = document.getElementById("volume");
let massUnit = document.getElementById("mass");
const inputNum = document.getElementById("input-number");
const btnConvert = document.getElementById("btn-convert");
const onLoadPage = document.getElementById("onload-page");

function divideAndRound(number, conversionNumber) {
    const conversion = number / conversionNumber;
    const rounded = conversion.toFixed(3);
    return rounded;
}

function multiplyAndRound(number, conversionNumber) {
    const conversion = number * conversionNumber;
    const rounded = conversion.toFixed(3);
    return rounded;
}


function convert(number, measurement) {
        if(!number){
            number = 0; // placeholder
        }
      
        if(measurement === lengthUnit){
            const lengthFormula = 0.3048;
            const metersToFeet = divideAndRound(number, lengthFormula);
            const feetToMeters = multiplyAndRound(number, lengthFormula)
            
            const lengthConversion = `${number} meters = ${metersToFeet} feet | ${number} feet = ${feetToMeters} meters`;
            return lengthConversion;
        }
        if(measurement === volumeUnit){
            const volumeFormula = 3.785411784;
            const litersToGallons = divideAndRound(number, volumeFormula);
            const gallonsToliters = multiplyAndRound(number, volumeFormula);
            
            const volumeConversion = `${number} liters = ${litersToGallons} gallons | ${number} gallons = ${gallonsToliters} liters`;
            return volumeConversion;
        }
         if(measurement === massUnit){
             const massFormula = 0.45359237;
             const kilosToPounds = divideAndRound(number, massFormula);
             const poundsToKilos = multiplyAndRound(number, massFormula);
              
             
            const massConversion = `${number} kilos = ${kilosToPounds} pounds | ${number} pounds = ${poundsToKilos} kilos`;
            return massConversion;
        }
    
}

//loads default values when page loads
window.addEventListener('load', () => { 
    let stringNum = 0;
    let num = Number(stringNum);
    
    lengthUnit.textContent = convert(num, lengthUnit);
    volumeUnit.textContent = convert(num, volumeUnit);
    massUnit.textContent = convert(num, massUnit);
})

btnConvert.addEventListener("click", () => {
    let stringNum = inputNum.value;
    let num = parseInt(stringNum);
    
    lengthUnit.textContent = convert(num, lengthUnit);
    volumeUnit.textContent = convert(num, volumeUnit);
    massUnit.textContent = convert(num, massUnit);
    
    inputNum.value = ""; //clear input field
})

