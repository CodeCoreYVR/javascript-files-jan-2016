var numbers = prompt("Enter a list of numbers").
              split(" ").
              map(function(x){ return parseInt(x) });
// var sum     = numbers.reduce(function(sum, x) { return sum += x; }, 0 );
// var product = numbers.reduce(function(prod, x) { return prod *= x});
var sum     = 0,
    product = 1;

for (var i = 0; i < numbers.length; i++) {
  var num = numbers[i];
  sum += num;
  product *= num;
}
var average = sum / numbers.length;
alert("sum is " + sum + " product is " + product + " average is " + average);
