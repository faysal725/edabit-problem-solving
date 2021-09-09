//Triangular Number Sequence
//This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:

// 1, 3, 6, 10, 15


function triangle(n) {
    console.log(n)
    const dots = (n+1)/2
    const total= n*dots
	return total
}


console.log(triangle(4))