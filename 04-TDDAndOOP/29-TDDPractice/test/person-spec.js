// Your code here

const chai = require("chai");
const expect = chai.expect; 

const Person = require("../problems/person.js");

describe("Person", () => { 
    let person;
    let otherPerson;
    beforeEach(() => {
        person = new Person("John", 30);
        otherPerson = new Person("Jane", 25);
    });

    it ("should have a name and age", () => {
        expect(person.name).to.equal("John"); 
        expect(person.age).to.equal(30); 
    });

    it ("should have a sayHello method", () => {
        expect(person.sayHello()).to.equal("Hello, my name is John and I am 30 years old.");
    });

    it ("should have a visit method", () => {
        expect(person.visit(otherPerson)).to.equal("John visited Jane.");
    }); 

    it ("should have a switchVisit method", () => {
        expect(person.switchVisit(otherPerson)).to.equal("John visited Jane.");
    }); 

    it ("should have an update method", () => {
        person.update({ name: "Jack", age: 40 });
        expect(person.name).to.equal("Jack");
        expect(person.age).to.equal(40);
    }); 

    it ("in update method should throw an error if the name or age is not provided", () => {
        expect(() => person.update({ name: "Jack" })).to.not.throw(TypeError);
        expect(() => person.update({ age: 40 })).to.not.throw(TypeError);
    });

    it ("in update method throw an error if the argument is not an object", () => {
        expect(() => person.update("hello")).to.throw(TypeError);
        expect(() => person.update(40)).to.throw(TypeError);
        expect(() => person.update([1, 2, 3])).to.throw(TypeError);
        expect(() => person.update({})).to.throw(TypeError);
    });

    it ("should have a tryUpdate method", () => {
        expect(person.tryUpdate({ name: "Jack", age: 40 })).to.equal(true);
        expect(person.name).to.equal("Jack");
        expect(person.age).to.equal(40);
        
        expect(person.tryUpdate("hello")).to.equal(false);
        expect(person.tryUpdate({})).to.equal(false);
    });

    it("in tryUpdate method, date should throw an error if the name or age is not provided", () => {
        expect(() => person.tryUpdate({ name: "Jack" })).to.not.throw(TypeError);
        expect(() => person.tryUpdate({ age: 40 })).to.not.throw(TypeError);
    });

    it("in tryUpdate method, should throw an error if the argument is not an object", () => {
        expect(person.tryUpdate("hello")).to.eql(false);
        expect(person.tryUpdate(40)).to.eql(false); 
        expect(person.tryUpdate([1, 2, 3])).to.eql(false); 
        expect(person.tryUpdate({})).to.eql(false); 
    });

    it ("should have a greetAll method", () => {
        expect(Person.greetAll([person, otherPerson])).to.eql(["Hello, my name is John and I am 30 years old.", "Hello, my name is Jane and I am 25 years old."]);
    });
});
