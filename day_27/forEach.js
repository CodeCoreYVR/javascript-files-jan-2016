[1,2,3,4,5].forEach(function(x){
  console.log(x);
});

var map = function(array, fn) {
  var newArray = [];
  array.forEach(function(x){
    newArray.push(fn(x));
  });
  return newArray;
}

map([1,2,3], function(x){
  return x * x;
});
