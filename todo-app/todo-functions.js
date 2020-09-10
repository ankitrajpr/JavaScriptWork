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

//Remove TodoApp
const removeToDoApp = function(id){
    const removeToDo = todosArray.findIndex(function(todoArray){
        return todoArray.id === id
    })

    if(removeToDo > -1){
        todosArray.splice(removeToDo, 1)
    }
    
}

//Toggle for Checkbox in Fly --> means can do from GUI
const toggleTodo = function(id) {
    const todo = todosArray.find(function(todo){
        return todo.id === id
    })

    if (todo !== undefined){
        //if the constant returned above returns the find value of id
        //Here, we are marking if this is inComplete i.e. false, set it to true
        todo.Completed = !todo.Completed
    }

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
    const todoEl = document.createElement('div')
    const checbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    //Set up todo Checkbox
    checbox.setAttribute('type','checkbox')
    checbox.checked = todo.Completed
    todoEl.appendChild(checbox)
    checbox.addEventListener('change',function(e){
        toggleTodo(todo.id)
        saveTodos(todosArray)
        renderTodos(todosArray, filter)
    })

    //Set up thetodo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    //Set up the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', function(e){
        removeToDoApp(todo.id)
        saveTodos(todosArray)
        renderTodos(todosArray, filter)
    })

    return todoEl

}

//Get the DOM elements for list Summary
const generateSummaryDOM = function(incompleteTodos){
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left!`
    return summary
}