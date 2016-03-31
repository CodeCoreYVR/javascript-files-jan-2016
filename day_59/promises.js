var p = new Promise(function(acceptFunction, rejectFunction){
  var number = Math.floor(Math.random() * 100);

  if(number < 50) {
    acceptFunction();
  } else {
    rejectFunction();
  }
});

var greeting = function(name) {
  console.log("Hello " + name);
  return p;
}

greeting("Tam").then(function(){
  console.log("I'm inside then!");
}).catch(function(){
  console.log("I'm inside catch");
});
