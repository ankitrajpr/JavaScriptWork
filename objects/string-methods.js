let name = 'ANkIT raj PRASAD'

//length property
console.log(name.length)

//Uppper Case
console.log(name.toUpperCase())

console.log(name.toLowerCase())

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

let password = 'abc123password098'
console.log(password.includes('password'))

//  Trim --> allows us to extra whitespaces
let abc = 'Form  '
console.log(abc.trim().toLowerCase())

let isValidPassword = function(phrase){
    // if(phrase.trim().toLowerCase().length > 8 && !phrase.includes('password')){
    //  return true;
    // } else{
    //     return false
    // }

    return phrase.trim().toLowerCase().length > 8 && !phrase.includes('password')
      

}

console.log(isValidPassword('asdhg  '))
console.log(isValidPassword('hskas;$6969'))
console.log(isValidPassword('password12345'))