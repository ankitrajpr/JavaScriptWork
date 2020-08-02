const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todosArray')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    }
    else {
        return []
    }
}

const saveTodos = function(todosArray){
    localStorage.setItem('todosArray', JSON.stringify(todosArray))
}

const renderTodos = function (todosArray, filter) {
    const filteredNotes = todosArray.filter(function (todo) {
        //For Hide COmpleted different method
        const searchTextMatch = todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
        const hideCompletedMatch = !filter.hideCompleted || !todo.Completed
        //debugger
        return searchTextMatch && hideCompletedMatch

    })

    //for debug in JS
    //debugger

    const incompleteTodos = filteredNotes.filter(function (valuefalse) {
        return !valuefalse.Completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredNotes.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })



}

//Get the DOM elements to a individual note
const generateTodoDOM = function(todo){
    const todoEl = document.querySelector('div')
    const checbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    //Set up todo Checkbox
    checbox.setAttribute('type','checkbox')
    todoEl.appendChild(checbox)


    //Set up thetodo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    //Set up the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)

    return todoEl

}

//Get the DOM elements for list Summary
const generateSummaryDOM = function(incompleteTodos){
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left!`
    return summary
}