// Your code here

const chai = require("chai");
const expect = chai.expect;

const { returnsThree, reciprocal } = require('../problems/number-fun.js');

describe("returnsThree()", () => { 
    it ("should return the number 3", () => { 
        expect(returnsThree()).to.equal(3); 
    }); 
}); 

describe("reciprocal(num)", () => { 
    it ("should return the reciprocal of the number", () => { 
        expect(reciprocal(2)).to.equal(.5); 
    }); 

    it ("should only intake arguments between 1 and 1000000", () => { 
        expect(() => reciprocal(10000000)).to.throw(Error); 
        expect(() => reciprocal(0)).to.throw(Error);
        expect(() => reciprocal(-1)).to.throw(Error);
    }); 
}); 
