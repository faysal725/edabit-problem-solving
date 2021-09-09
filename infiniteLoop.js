function printArray(number) {
    var newArray = [];

    console.log(number)

  for(var i = 1; i <= number; i++) {
    newArray.push(i);
  }
  console.log(newArray)
  return newArray;
  }


  printArray(3)