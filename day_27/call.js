var call = function(num, anotherFunction){
  return anotherFunction(num);
}

var doubleIt = function (x) {
  return 2 * x;
};

console.log(call(5, doubleIt));

var call = function(num, anotherFunction, count){
  for(var i = 0; i < count; i++) {
    num = anotherFunction(num);
  }
  return num;
}

var doubleIt = function (x) {
  return 2 * x;
};

console.log(call(5, doubleIt, 2));
