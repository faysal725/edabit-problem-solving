//Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.


function toArray(obj) {
    const value = Object.entries(obj)   
    // Object.entries(obj) turns object into array ex: [ [ 'shrimp', 15 ], [ 'tots', 12 ] ]
    return value
}


toArray({ shrimp: 15, tots: 12 })