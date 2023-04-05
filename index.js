// javascript


const inputEl = document.getElementById("input-el")
const buttonEl = document.getElementById("btn-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let inputValue = ""


buttonEl.addEventListener("click", function() {
    //grab value and convert to number
    inputValue = inputEl.value
    Number(inputValue)
    
    // render out 
    lengthEl.innerHTML = `${inputValue} metres = ${lengthConverter(inputValue)} feet | ${lengthConverter(inputValue)}  feet = ${inputValue} metres`;
    
    volumeEl.innerHTML = `${inputValue} litres = ${volumeConverter(inputValue)} gallons | ${volumeConverter(inputValue)}  gallons = ${inputValue} litres`; 
    
    massEl.innerHTML = `${inputValue} kilograms = ${massConverter(inputValue)} pounds | ${massConverter(inputValue)} pounds = ${inputValue} kilograms`;
})

// conversion functions 

function lengthConverter(value,type = 'meterToFeet'){
  let result = null
  if (type === "meterToFeet"){
      result =  (value * 3.281).toFixed(2)
  }
  else if (type === "feetToMeter"){
      result =  (value / 3.281).toFixed(2)
  }
  return result
}

function volumeConverter(value,type = 'literToGallon'){
  let result = null
  if (type === "literToGallon"){
      result =  (value * 0.264).toFixed(2)
  }
  else if (type === "gallonToLiter"){
      result =  (value / 0.264).toFixed(2)
  }
  return result
}

function massConverter(value,type ='kiloToPound'){
  let result = null
  if (type === "kiloToPound"){
      result =  (value * 2.204).toFixed(2)
  }
  else if (type === "poundToKilo"){
      result =  (value / 2.204).toFixed(2)
  }
  return result
}
