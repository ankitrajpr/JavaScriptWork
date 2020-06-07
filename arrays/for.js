const notes = ['Note 1', 'Note 2', 'Note 3']



console.log(notes.length)
console.log(notes)

for(let count = 0; count <= 2; count++){
console.log(count)

}

for(let count = 0; count < notes.length; count++){
    console.log(`You have ${count} index for the ${notes[count]}\n`)
}

for (let count = notes.length - 1; count >= 0; count--) {
    console.log(`You have ${count} index for the ${notes[count]}\t`)
}