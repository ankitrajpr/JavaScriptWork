const notes = [{},
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

console.log(notes.length)
console.log(notes)

console.log(notes.indexOf({}))

const index = notes.findIndex(function(note, index){
    console.log(`You have ${index} . `)
    console.log(note)

    return note.title === 'Habbit to work on'
})

console.log(index)

