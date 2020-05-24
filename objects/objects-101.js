
//Object myBook
let myBook = {
    title : 'Once Upon a Time',
    author : 'Ankit',
    pageCount : 326
}

console.log(`${myBook.title} by ${myBook.author} has ${myBook.pageCount} pages`)

myBook.title = 'Five Point SomeOne'
console.log(`${myBook.title} by ${myBook.author} has ${myBook.pageCount} pages`)

let person = {
    name : 'Ankit',
    age : 27,
    location : 'Philadelphia'
}

console.log(`${person.name} is ${person.age} amd live in ${person.location}.`)

person.age++ //person.age = person.age + 1

console.log(`${person.name} is ${person.age} amd live in ${person.location}.`)