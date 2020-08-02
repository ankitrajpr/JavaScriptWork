console.log(uuidv4())

//Read Exisiting Notes from localStorage
const getSavedNotes = function(){
    const notesJSON = localStorage.getItem('notes')

    if(notesJSON !== null){
        return JSON.parse(notesJSON)
    }else{
        return [] //return an empty array
    }
}

//Save the notes to localStorage
const saveNotes = function(notes){
    localStorage.setItem('notes', JSON.stringify(notes))
}

//Generate the DOM structure for a Note
const generateNoteDOM = function(note){
    const noteElement = document.createElement('div')
    const textElement = document.createElement('span')
    const button = document.createElement('button')

    button.textContent = 'x'
    noteElement.appendChild(button)

    if (note.title.length > 0) {
        textElement.textContent = note.title
    }
    else {
        textElement.textContent = 'UnNmed Note'
    }
    noteElement.appendChild(textElement)
    
    return noteElement
}

//Render application Nodes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
   
    filteredNotes.forEach(function (p) {
        
        const noteElement = generateNoteDOM(p)
        document.querySelector('#notes').appendChild(noteElement)
    })
}