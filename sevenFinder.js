

function sevenBoom(arr) {

    //.includes method can find either this string or array has this word or number 
    //it return boolean value
    let oneArr   = arr.join('')
    console.log(oneArr, typeof(oneArr))
    let matchMaker= oneArr.includes('8')
    if (matchMaker === true) {

        console.log("Boom")
    }
    
    
}

sevenBoom([ 8, 1, 23])