//Concatenate Variable Number of Input Arrays
//Create a function that concatenates n input arrays, where n is variable.



function concat(...args) {
	console.log(args)
    let arr= args.flat(Infinity)
    //array.flet(infinity) concaticate array build a new flat array with no sub array
    console.log(arr)
    return  arr
}

console.log(concat([1, 2, 3], [4, 5], [[[[[[6]]]]], 7]))