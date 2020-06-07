const notes = [//removed an empty array obj for findIndex and find 
    {
        title: 'My next Trip',
        body: 'I would like to go to Greece'
    },{
        title: 'Habbit to work on',
        body: 'Execrice, & playing Guitar a bit better'
    },{
        title: 'Home office Set Up',
        body: 'Get a New Seat'
    }
]

/* console.log(notes.length)
console.log(notes)

console.log(notes.indexOf({}))

const index = notes.findIndex(function(note, index){
    console.log(`You have ${index} . `)
    console.log(note)

    return note.title === 'Habbit to work on'
})

console.log(index) */

//Lookig for index to do something,like remove, then findIndex is a goof choice
/* const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })

    return notes[index]
} */


//FInd returns the match itself , so wrote note.
//Looking for item directly, then find is a great choice
const findNote = function (notes, noteTitle) {
    const note = notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })

    return note
}

const findNote1 = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const note = findNote(notes, 'home office Set Up')
const note1 = findNote1(notes, 'Habbit to work on')
console.log(note)
console.log(note1)



