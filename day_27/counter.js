// var i = 0;
//
// setInterval(function(){
//   console.log(i++);
// }, 1000);

// Stretch Solution 1
// var count = function(){
//   var odd = 1, even = 2;
//   setInterval(function(){
//     console.log("Odd: " + odd + " Even: " + even);
//     odd += 2;
//     even += 2;
//   }, 1000);
// }();

// Stretch Solution 2
var num = 0;

setInterval(function(){
  if(num % 2 == 0) {
    console.log("Counter 1: " + num);
  }
  num++;
}, 1000);

setInterval(function(){
  if(num % 2 == 1) {
    console.log("Counter 2: " + num);
  }
  num++;
}, 1000);
