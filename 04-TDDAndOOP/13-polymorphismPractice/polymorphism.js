// polymorphism.js

// Polymorphism is when a child class overrides a method of 
// its parent (or has a method with the same name as another 
// class to get the same result with a different "how").

class Charity {}

class Business {
  toString() { return 'Give us your money.'; }
}

class Restaurant extends Business {
  toString() { return 'Eat at Joe\'s!'; }
}

class AutoRepairShop extends Business {}

class Retail extends Business {
  toString() { return 'Buy some stuff!'; }
}

class ClothingStore extends Retail {}

class PhoneStore extends Retail {
  toString() { return 'Upgrade your perfectly good phone, now!'; }
}

console.log(new PhoneStore().toString());
console.log(new ClothingStore().toString());
console.log(new Restaurant().toString());
console.log(new AutoRepairShop().toString());
console.log(new Charity().toString());
