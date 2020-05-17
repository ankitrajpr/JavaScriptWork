// Function - Input, code , output(return value)

let greetUser = function () {
    console.log('Welcome User!')
    
} 

//Define function
greetUser()
// Function - Input, code , output(return value)
let square = function (num) {

    let result = num * num
    return result
    

}
//let num = 3
//square (3) // square(num)
let value = square(3)

console.log(value)

//Chalenge 
//Conversion of fehreheit to celsius
let celsius = function (fValue){
    let result = (fValue - 32 ) * 5 / 9 ;
    return result
}

let fValue = celsius(68)
console.log(fValue)