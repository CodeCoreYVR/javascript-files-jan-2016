// var count = 1;
//
// var counter = setInterval(function(){
//   console.log(count++);
// }, 1000);
//
// setTimeout(function(){
//   clearInterval(counter);
// }, 10000);

counter = 10;

var interval = setInterval(function(){
  if(counter < 1) {
    console.log("Blast Off!");
    clearInterval(interval);
  } else {
    console.log(counter--);
  }
}, 1000);
