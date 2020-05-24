// Global Scope ( convertFahrenheitToCelsius, tempOne, tempTwo )
   // Local Scope ( fahrenheit , celsius )
      // Local Scope ( isFreezing ) 

// Functions create a local scope as below:: 


let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    

    if(celsius <= 0)
    {
        let isFreezing = true
    }

    return celsius
}

let tempOne = convertFahrenheitToCelsius(68)
let tempTwo = convertFahrenheitToCelsius(32)

console.log(tempTwo)
console.log(tempOne)