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

/* document.querySelector('button').addEventListener('click', function(e){
    //console.log('Button click')
    //console.log(e)
    e.target.textContent = 'The Button was clicked'
}) */

/* document.querySelectorAll('button')[1].addEventListener('click', function(){
    console.log('Delete all nodes')
}) */

//By ID selection of button (#)
document.querySelector('#create-note').addEventListener('click', function (e) {
    //console.log('Button click')
    //console.log(e)
    e.target.textContent = 'The Button was clicked'
})

//for class in paras
document.querySelector('#remove-all').addEventListener('click', function () {
    //console.log('Delete all nodes')
    document.querySelectorAll('.note').forEach(function(e){
        e.remove()
    })
})

//console.log('New File loaded for a new JS')
//DOM Documnet Object Model Here, Object in DOM is a JS Object

// Documnet is modeled using a JS object and that obj is called documnet
//Query and Remove
/* const p = document.querySelector('p')
//console.log(p)
p.remove() */

//Query all and remove
/* const ps = document.querySelectorAll('p')
ps.forEach(function(p){
    p.textContent = '*********'
    //console.log(p.textContent)
    //p.remove()
})

// Add a New element
const paragraphAdd = document.createElement('p')
paragraphAdd.textContent = "This is a new element from JS"
//Append child
document.querySelector('body').appendChild(paragraphAdd) */