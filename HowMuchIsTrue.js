function countTrue(arr) {
    console.log(arr)

    const index =arr.filter(bool=> bool === true)

    return index.length
}


console.log(countTrue([true,  false, true,
    true,  false, false,
    false, false, false]))