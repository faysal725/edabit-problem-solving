// Burglary Series (04): Add its Name
// Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).

function addName(obj, name, value) {
	
	obj[name] =value
	return obj
}

addName({ piano: 500, stereo: 300 , point: 500, stan: 300} , "Brutus", 400)