var myFunction = function(anotherFunction) {
  console.log(anotherFunction(10));
};

var addFive = function(x){
  return x + 5;
}

myFunction(addFive);

var multiplyByTen = function(x){
  return x * 10;
}

myFunction(multiplyByTen);

var myFunction2  = function(){
  var myFunction3 = function(x){
    return x * x;
  }
  return myFunction3;
}
