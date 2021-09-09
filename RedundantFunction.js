
//A Redundant Function
// Write a function redundant that takes in a string str and returns a function that returns str.

function redundant(str) {
    console.log(str)
    return function () {
        return str
    }
  };

  console.log(f1("apple"))

//   alternet solution 

const redundant = str => () => str;


//   alternet solution 
function redundant(str) {
	return () => str;
}


//   alternet solution 
function redundant(str) {
	function value(){
		return str;
	}
	return value;
}