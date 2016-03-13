// var isEven = function (x) { return x % 2 == 0; };
//
// filter([1, 2, 3, 4], isEven); // => [2, 4]

var filter = function(array, fn) {
  var result = [];
  array.forEach(function(element){
    if(fn(element)) {
      result.push(element);
    }
  });
  return result;
}

var isEven = function (x) { return x % 2 == 0; };

console.log(filter([1, 2, 3, 4], isEven)); // => [2, 4]
