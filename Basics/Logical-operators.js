let temp = 130

//Logical And Operatoe

if(temp >= 60  && temp <= 90 ){
    console.log('it is good')

}

//Logical Or operators
if (temp <= 0 || temp >= 120) {
console.log('Do not go outisde')
}

let isGuestOneVegan = false
let isGuestTwoVegan = false

if(isGuestOneVegan && isGuestTwoVegan)
{
    console.log('Both are vegans')
} else if (isGuestOneVegan || isGuestOneVegan) {
    console.log('Make sure to offer some vegan ffoods')
} else {
    console.log('Ayhting!')
}