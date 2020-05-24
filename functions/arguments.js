let add = function ( a, b) {
    return a + b
}

let result = add ( 3 , 6)
console.log(result)

let sub = function (a, b, c) {
    return (a - b) - c;
}

let result1 = sub(8, 3 , 2)
console.log(result1)

let getScoreText = function ( name = 'Raj', score = 0) {
    /* console.log(name);
    console.log(score) */

    return 'Name : ' + name + ' - Score : ' + score
}

//getScoreText()  --> default value of undefined is retruned
//getScoreText('Ankit', 10)
let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

let scoreTip = function ( total, tipPercent = 0.2 ){
    return total + Math.ceil(tipPercent)
}

let tipResult = scoreTip( 20, 100)
console.log(tipResult)

