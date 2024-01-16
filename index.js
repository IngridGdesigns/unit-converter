
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
\
To-do: Calculate function for length, volume, mass
*/

let lengthUnit = document.getElementById("length");
let volumeUnit = document.getElementById("volume");
let massUnit = document.getElementById("mass");
const inputNum = document.getElementById("input-number");
const btnConvert = document.getElementById("btn-convert");


function convert(number, measurement) {
        if(!number){
            number = 20; // placeholder
        }
      
        if(measurement === lengthUnit){
            const len = `${number} meters = 11 feet | ${number} feet = 11 meters`;
            return len;
        }
        if(measurement === volumeUnit){
            const vol = `${number} liters = 5.284 gallons | ${number} gallons = 75.708 liters`;
            return vol;
        }
         if(measurement === massUnit){
            const mass = `${number} kilos = 44.092 pounds | ${number} pounds = 9.072 kilos`;
            return mass;
        }
    
}

btnConvert.addEventListener("click", () => {
    let stringNum = inputNum.value;
    let num = parseInt(stringNum);
    
    lengthUnit.textContent = convert(num, lengthUnit);
    volumeUnit.textContent = convert(num, volumeUnit);
    massUnit.textContent = convert(num, massUnit);
 
});