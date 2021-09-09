function possibleBonus(a, b) {
	const difference = b-a
    if (Math.sign(difference) === 1 && difference <= 6) {
        return true
    }else{
        return false
    }    
}
console.log(possibleBonus(5,3))