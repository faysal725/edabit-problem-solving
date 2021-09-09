//The right shift operation is similar to floor division by powers of two.

// Sample calculation using the right shift operator ( >> )
// 80 >> 3 = floor(80/2^3) = floor(80/8) = 10
// -24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
// -5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3

function shiftToRight(x, y) {
    
	const YCalc=Math.pow(2, y)
    console.log(YCalc)
    return Math.floor(x/YCalc)
}

console.log(shiftToRight(4666, 6))