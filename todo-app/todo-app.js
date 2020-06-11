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

const incompleteTodos = todosArray.filter(function(todo){
    return todo.Completed === false
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left!`
document.querySelector('body').appendChild(summary)

todosArray.forEach(function(todo){
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

//Listen for New TOdo Button
document.querySelector('button').addEventListener('click',function (e) {
    console.log('Add a new todo..')
    
    
})
