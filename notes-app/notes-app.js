//console.log('New File loaded for a new JS')
//DOM Documnet Object Model Here, Object in DOM is a JS Object

// Documnet is modeled using a JS object and that obj is called documnet
//Query and Remove
/* const p = document.querySelector('p')
//console.log(p)
p.remove() */

//Query all and remove
const ps = document.querySelectorAll('p')
ps.forEach(function(p){
    p.textContent = '*********'
    //console.log(p.textContent)
    //p.remove()
})