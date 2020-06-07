const notes = [
    {
        title: 'My next Trip',
        body: 'I would like to go to Greece'
    }, {
        title: 'Habbit to work on',
        body: 'Execrice, & playing Guitar a bit better'
    }, {
        title: 'Home office Set Up',
        body: 'Get a New Seat'
    }
]

const filteredNotes = notes.filter(function (note, index){
    
    //return false
    const isTitleMatch = note.title.toLowerCase().includes('office')
    const isBodyWatch = note.body.toLowerCase().includes('ne')
    return isTitleMatch || isBodyWatch //callbyReference wrt to note
    //MEthod chaining of includes
   

})

console.log(filteredNotes)

const findNotes = function(notes, query){
    return notes.filter(function (note, index) {

        //return false
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyWatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyWatch //callbyReference wrt to note
        //MEthod chaining of includes


    })

}

console.log(findNotes(notes, 'WORK'))



