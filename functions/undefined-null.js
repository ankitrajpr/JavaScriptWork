let name // Printing undefined represnts we have not assigned value

//console.log(name)
//name = 'Ankit'
if ( name === undefined)
{
    console.log("Please provide a Vlaue to name variable")
} else {
    console.log(name)
}

//Function Arguments if not provided results to undefined

let square = function ( num ) {
    console.log(num)
}

square()

//Undefined as funcion return Value
let result = square();

console.log('Result Value :: '+ result)


let age = 27

//Clearing a value
// Null as assigned Value
age = null

console.log(age)