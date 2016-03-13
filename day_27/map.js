var map = function(a, fn) {
  var newArray = [];
  if(Array.isArray(fn)) {
    for(var i = 0; i < a.length; i++) {
      var subArray = [];
      for(var j = 0; j < fn.length; j++) {
        var innerFunction = fn[j];
        subArray[j] = innerFunction(a[i]);
      }
      newArray[i] = subArray;
    }
  } else {
    for(var i = 0; i < a.length; i++) {
      newArray[i] = fn(a[i]);
    }
  }
  return newArray;
}

var addOne = function(x) {
  return x +  1;
}

var multiplyByFive = function(x) {
  return x * 5;
}

console.log(map([1,2,3,4], addOne));
console.log(map([1,2,3,4], [addOne, multiplyByFive]));

map([1,2,4,445,6,6], function(x){
  return x * x;
});

map(['hello', 'hi', 'eat', 'cheese'], function(string){
  return string.length;
});
