/* const todos = ['Order cat food', 'Clean Kitchen', 'Buy Food', 'Do Work', ' Exercise Files']

console.log(`You have ${todos.length} todos!`)
console.log(`Todo: ${todos[0]}`)
console.log(`Todos: ${todos[todos.length - 2]}`) */

const todos = ['Order cat food', 'Clean Kitchen', 'Buy Food', 'Do Work', 'Exercise Files']

todos.splice(2,1)
console.log(todos)
todos.push('New Iteam at ENd')

console.log(todos)

todos.shift()
console.log(todos)

console.log(`You have ${todos.length} todos!`)


todos.forEach(function(todo, index){
    //console.log(todos[todos.length - 4])
    const num = index + 1
    console.log(`${num}. ${todo}`)
})

for (let count = 0; count < todos.length ;count ++){
    const num = count + 1
    const todo = todos[count]
    console.log(`${num}. ${todo}`)
}



const todosArray = [
{
    text: 'Order cat food',
    Completed: true
}, {
    text: 'Clean Kitchen',
    Completed: true
}, {
    text: 'Buy Food',
    Completed: true
}, {
    text: 'Do Work',
    Completed: true
}, {
    text: 'Exercise Files',
    Completed: true
}]

const deleteTodo = function (todosArray, todoText) {
    const index = todosArray.findIndex (function (todo){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    //Pass by reference
    if(index > -1){
        todosArray.splice(index, 1)
    }
}

deleteTodo(todosArray, 'buy food')
console.log(todosArray)