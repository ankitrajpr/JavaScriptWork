var firstName = 'Ankit'

var num = 123

var firstName = 'Raj'

console.log(firstName + ' Another ' + num)  // 1. Reassigning var changed to print New Name instead of error which either let/const would give

if (10 == 10) {
    var firstName = 'Raj'   // 2. var variables are exposed out of if statement

}

console.log(firstName)

const setName = function() {
    var firstName = 'ANKIT'  
}

setName()
console.log(firstName) //2. var variables are function scoped
 

 console.log(age)
 var age // 3. Access a varibale before declartion in var shows undefined

