/* let isAccountLocked = false

if(isAccountLocked){
console.log('is Account locked')
}else{
    console.log('Welocme!')
} */

//if-else-if statement
let isAccountLocked = false
let userRole = 'OK'

if (isAccountLocked) {
    console.log('is Account locked')
} else if(userRole  === 'Admin'){
    console.log('Welocme Admin')
}else {
console.log('Welcome')
}

let temp = 120

if(temp <= 30){
    console.log('It is freezing outside')
} else if(temp >= 110){
    console.log('It is hot outside!')
}else {
    console.log('Go for it!')
}