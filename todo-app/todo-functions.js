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

        return searchTextMatch && hideCompletedMatch

    })

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
    const p = document.createElement('p')
    p.textContent = todo.text
    return p

}

//Get the DOM elements for list Summary
const generateSummaryDOM = function(incompleteTodos){
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left!`
    return summary
}