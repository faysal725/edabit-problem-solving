function matchHouses(step) {
    let sticks

	if (step > 1) {
         sticks = (step * 6)-(step-1)
	
    }else if(step === 1){
        sticks = 6
    }else {
        sticks =0
    }
    console.log(sticks)
	return sticks
}


matchHouses(0)