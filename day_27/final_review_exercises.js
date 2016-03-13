// 1. Write a function that takes one parameter, a person's age. If the person is older than 50, return `'old'`. Otherwise, return `'young'`.
//

var personAge = function(age) {
  if(age > 50) {
    return "Old";
  } else {
    return "Young";
  }
}

// 2. Write a function `forEach` that takes two parameters, an array and a function. It should call the function on each item in the array.
//
var forEach = function(arr, fn) {
  var returnArray = [];
  for(var i = 0; i < arr.length; i++) {
    returnArray.push(fn(arr[i]));
  }
  return returnArray;
}


// 3. Write a function called `sayLater` that takes one parameter, a string. It should log the string to the console 5 seconds later.
//
var sayLater = function(str) {
  setTimeout(function(){
    console.log(str);
  }, 5000);
}


// 4. [Stretch] Research how to loop over an object. Use this to count the number of properties that the `window` object has.
var objectCount = function(obj) {
  return Object.keys(obj).length;
}

console.log(objectCount(window));
