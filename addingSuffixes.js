//All About Anonymous Functions: Adding Suffixes
//Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.


function add_suffix(suffix) {
	return function (addition) {
        console.log(addition + suffix)
        return addition + suffix
    }
}


console.log(add_suffix("less")("fear"))