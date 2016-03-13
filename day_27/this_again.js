var car = {
  speed: 200,
  drive: function() {
    console.log(this);
    console.log("Driving at " + this.speed + " km/hr");
    var myAwesomeFunction = function() {
      console.log(this);
    };

    // var that = this;
    // var myAwesomeFunction = function() {
    //   console.log(that);
    // };

    // var myAwesomeFunction = function() {
    //   console.log(this);
    // }.bind(this);
    myAwesomeFunction();
    myAwesomeFunction.call({a: 123});
    myAwesomeFunction.call(this); // I'm passing `this` which is from the `drive` function which references the `car` object
  }
}

car.drive();
