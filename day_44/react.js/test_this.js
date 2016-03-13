var person = {
  age: 10,
  display: function(){
    console.log(this.age);
    subFunction = function() {
      console.log(this.age);
    }.bind(this)
    subFunction();
  }
}

person.display();
