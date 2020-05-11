/* 
//If we are going by this, this is leaked global ( variable not explicitly defined ) as we have zero variables declared
//let name =  'Ankit'

if (true) {
    //name = 'RAJ'
    if (true) {
        name = 'PRASAD'
        console.log(name)
    }
}

if (true) {
    console.log(name)
} */

//let name =  'Ankit'

if (true) {
    let name = 'RAJ'
    if (true) {
        //let name = 'PRASAD'
        console.log(name)
    }
}

if (true) {
    console.log(name)  //ReferenceError: name is not defined bcz of global variable not defined as declared let variable in Line no. 20 of local scope
}