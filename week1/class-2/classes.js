// Class is a blueprint for creating objects and defining their properties and behaviors.

class Animal {

  // Constructor is a special method for initializing objects.
  constructor(name, legs){
    this.name = name;
    this.legs = legs;
  }

  // Static method - belongs to the class itself and not to any specific object.
  static animalSound() {
    console.log("Animals make sounds.");
  }

  // We define its properties and methods.
  // Each method can be accessed using dot notation.
  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
  describe(){
    console.log(`${this.name} has ${this.legs} legs.`);
  }
}

// Creating new objects: An object is an instance of a class.

const dog = new Animal("Dog", 4);
dog.makeSound();
dog.describe();
Animal.animalSound(); // Calling static method