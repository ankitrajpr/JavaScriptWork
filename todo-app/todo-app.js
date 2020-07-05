const todosArray = [
    {
        text: 'Order cat food',
        Completed: false
    }, {
        text: 'Clean Kitchen',
        Completed: true
    }, {
        text: 'Buy Food',
        Completed: true
    }, {
        text: 'Do Work',
        Completed: false
    }, {
        text: 'Exercise Files',
        Completed: true
    }]

/* const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function(p){
   if ( p.textContent.includes('the') ) {
       p.remove()
   }
}) */

const filter = {
    searchText :''
}

const renderTodos = function(todosArray, filter){
    const filteredNotes = todosArray.filter(function(todo){
        //console.log(todo.text.toLowerCase().includes(filter.searchText.toLowerCase()))
        return todo.text.toLowerCase().includes(filter.searchText.toLowerCase())

    })

    const incompleteTodos = filteredNotes.filter(function(valuefalse){
        return !valuefalse.Completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left!`
    document.querySelector('#todos').appendChild(summary)

    filteredNotes.forEach(function (todo){
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
    


}

renderTodos(todosArray, filter)

 /* const incompleteTodos = todosArray.filter(function(todo){
    return todo.Completed === false
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left!`
document.querySelector('body').appendChild(summary)

todosArray.forEach(function(todo){
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
}) */

//Listen for New TOdo Button
/* document.querySelector('button').addEventListener('click',function (e) {
    console.log('Add a new todo..')
    
    
}) */

/* document.querySelector('.ok#add-todo').addEventListener('click', function (e) {
    console.log('Add a new todo..')


})

document.querySelector('#new-todo-text').addEventListener('input', function(e){
    console.log(e.target.value)
}) */

document.querySelector('#search-text').addEventListener('input', function(e){

    filter.searchText = e.target.value
    renderTodos(todosArray,filter)

})

//Form changes
document.querySelector('#new-todo').addEventListener('submit', function(e){
    e.preventDefault()
    todosArray.push({
        text: e.target.elements.text.value,
        Completed:false
    })

    renderTodos(todosArray, filter)
    e.target.elements.text.value=''
})

