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




const sortNotes = function(ankit){
    notes.sort(function(a,b){
        if (a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        } else if (a.title.toLowerCase() > b.title.toLowerCase()){
                return 1
        }
        else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)