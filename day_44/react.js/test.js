class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

var dog = new Animal("Fido", "White");

class Dog extends Animal {

  bark() {
    console.log("Wooof");
  }
}

var dog1 = new Dog("Fido 1", "White");
dog1.bark();
