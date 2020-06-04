let num = 103.941

console.log(num.toFixed(8))

console.log(Number.MAX_VALUE)

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let randomNum = Math.random()

console.log(randomNum)

let min = 0
let max = 1

let randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum2)

let personGuess = function(guess){
    let min = 0
    let max = 1
    let random3 = Math.floor(Math.random() * (max - min + 1)) + min

    return guess === random3
}

console.log(personGuess(1))