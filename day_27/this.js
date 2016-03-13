var car = {
  speed: 200,
  drive: function() { // drive here is a method of the `car` object
    // in this context `this` references the `car` object
    console.log("Vroooooom! Driving at " + this.speed + "km/hr");
  },
  stop: function() {
    if(typeof(this.speed) === "number") {
      console.log("Scr" + ("e".repeat(this.speed)) + "tch!");
    } else {
      if(this.speed === "fast") {
        console.log("Screeeetch!");
      } else if(this.speed === "medium") {
        console.log("Aarch!");
      } else if(this.speed === "slow") {
        console.log("sh");
      } else {
        console.log("Yikes, I don't know how fast I'm going!!!");
      }
    }
  }
};

car.drive();
