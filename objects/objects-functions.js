let myBook = {
    title: 'Once Upon a Time',
    author: 'Ankit',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

//Pass object to function --> 1st
let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }

    //console.log(`${book.title} by ${book.author} has ${book.pageCount} pages`) -> 1st

}

let bookSumary = getSummary(myBook)
let otherBookSumary = getSummary(otherBook)

//objects back from function
console.log(bookSumary.pageCountSummary)



let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit : fahrenheit,
        kelvin : (fahrenheit + 459.67) * (5/9),
        celsius : (fahrenheit - 32 ) * (5/9)
    }
}

let temp = convertFahrenheit(74)
console.log(`${temp.fahrenheit} fahrenheit is converted by ${temp.celsius} clesius`)