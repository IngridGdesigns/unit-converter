
/*
To-do: 
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

*/

let len = document.getElementById("length");

let txt = "";
function convert(item) {
    if(item === length){
        console.log("here is my length");
        // len.textContent += `\n Something`
        // 20 meters = 65.616 feet | 20 feet = 6.096 meters
        const number = len.value;
        len.textContent += `${number} meters = 11 feet | ${number} feet = 11 meters`;
    }
}

convert(length);