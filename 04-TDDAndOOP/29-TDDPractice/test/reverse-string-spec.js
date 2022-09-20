// Your code here

const chai = require("chai");
const expect = chai.expect;

const reverseString = require('../problems/reverse-string.js');

describe("reverseString(string)", () => { 
    it("should reverse the string regardless of case", () => { 
        const string = "fun"; 
        const number = 1; 

        const reverse = reverseString(string); 
        expect(reverse).to.eql("nuf");

        expect(() => reverseString(number)).to.throw(Error);

    })
}) 
