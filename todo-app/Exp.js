//An Error to check with.
// https://www.linkedin.com/feed/update/urn:li:activity:6690167443362598912/

function filteredArray(arr, elem){
    let newArr = []
    for(let i = 0; i<arr.length; i++){
        let nestedArray = arr[i].indexOf(elem)
        if ( nestedArray === -1){
            return newArr.push(arr[i])
        }
        else{
            return []
        }
    }
}

console.log(filteredArray([['Find',3],['The',2],['Spot',3]], 2))
// Should return the value ['The',2]
