let name = 'Ankit'
let age = 20

//Template String ``
console.log(`Hey, My Name is ${name}. I am ${age} years old!`) //Static string  //Injecting JS name var

let getScoreText = function (name = 'Raj', score = 0) {
    
    return `Name: ${name} - Score: ${score}`  // as below with concatenation

    //return 'Name : ' + name + ' - Score : ' + score
}


let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

let scoreTip = function (total, tipPercent = 0.2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent

    return `A ${percent}%  tip on $${total} would be $${tip}`
}

let tipResult = scoreTip(60)
console.log(tipResult)