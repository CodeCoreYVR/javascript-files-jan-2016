var car = {
  speed: 200,
  drive: function() { // drive here is a method of the `car` object
    console.log("Vroooooom");
  },
  stop: function() {
    console.log("Screeeeetch");
  }
};

console.log(car.speed);
car.drive();

var vroom = function() { console.log("Vroooooom"); };
var stop  = function() { console.log("Screeeeetch"); };
var car = {
  speed: 200, drive: vroom, stop: stop
};
