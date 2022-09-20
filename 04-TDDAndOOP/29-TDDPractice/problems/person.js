class Person {
  // Your code here

  constructor(name, age) { 
    this.name = name; 
    this.age = age; 
  }

  sayHello() { 
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}.`;
  }

  switchVisit(otherPerson) {
    return this.visit(otherPerson); 
  }

  update(obj) { 
    if (typeof obj !== "object") { 
      throw new TypeError("Argument must be an object."); 
    }

    if (!obj.name && !obj.age) { 
      throw new TypeError("Must provide a name or age."); 
    }

    this.name = obj.name; 
    this.age = obj.age; 
  }

  tryUpdate(obj) { 
    try { 
      this.update(obj); 
      return true; 
    } catch (e) { 
      return false;
    }
  }

  static greetAll(obj) { 
    return obj.map(person => person.sayHello()); 
  }
}

module.exports = Person;
