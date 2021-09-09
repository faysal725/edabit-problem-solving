//Function Factory
// Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.

// Please check the examples below for a clearer representation of the behavior expected.

//solution
const plusFive = function makePlusFunction(baseNum) {
	return function(nb){
        console.log(baseNum+nb)
		return baseNum+nb;
	}
}

console.log(plusFive(2))


//solution
function makeAdder(x) {
    console.log(x)
    return function(y) {
        console.log(y)
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
//   var add10 = makeAdder(10);
  
//   console.log(makeAdder(5)(2));  // 7
  console.log(add5(2))


//যখন একটি ফাংশনের ভিতর আরেকটি ফাংশন লেখে ঐ ফাংশনের জন্যে আলাদা আর্গুমেন্ট দেয়ার প্রয়োজন পড়ে তখন ভিতরের ফাংশনটাতে আর্গুমেন্ট পাস করার জন্যে ডাবল ব্র্যাকেট দিতে হয় যেমনঃ makeAdder(5)(2) । প্রথম ব্র্যাকেটের ভ্যালু বাইরের ফাংশনে এবং পরের ব্র্যাকেটের ভ্যালু ভিতরের ফাংশনে পাস হয়। 
//এটা আরেকভাবেও করা যায় যেমন উপরের ফাংশনটায় একটা ভ্যালু সেট করে সেটা একটা ভ্যারিয়েবলের ভিতরে রাখলে ঐ ভ্যারিয়েবলটাও ফাংশন হয় যেমনঃ var add5 = makeAdder(5)। তখন ঐ ভ্যারিয়েবলে ব্যাকেট দিয়ে ভ্যালু পাস করলে সেটা ঐ ফাংশনের ভিতরের ফাংশনের আর্গুমেন্ট হিসেবে চলে যাবে এবং একই ফলাফল দিবে, যেমনঃ add5(2)।
  