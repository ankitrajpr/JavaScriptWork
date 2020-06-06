//For - each loop example
const notes = ['Note 1', 'Note 2', 'Note 3']

notes.push('Coffee At Last')
/* const doThis = function () {

} */

//callback function
/* notes.forEach(function() {
    console.log('testing 123')

}) */

//Passing a function to a function is callback function
notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)

})

console.log(notes.length)
console.log(notes)