// Your code here

const chai = require("chai"); 
const spies = require("chai-spies"); 
chai.use(spies); 
const expect = chai.expect; 

const myMap = require('../problems/my-map.js');

describe("myMap(array, callback)", () => {
    let arr; 
    const cb = (el) => el * 2;

    beforeEach(() => {
        arr = [1, 2, 3, 4, 5]; 
    }); 

    it("should not mutate the passed-in array argument", () => { 
        expect(arr.length).to.eql(5);
        expect(arr).to.eql([1, 2, 3, 4, 5]);

        const newArr = myMap(arr, cb);

        expect(arr).to.eql([1, 2, 3, 4, 5]);
        expect(arr.length).to.equal(5); 
    }); 

    it ("should not call the built in Array map", () => { 
        expect(arr.length).to.eql(5); 
        expect(arr).to.eql([1, 2, 3, 4, 5]);

        const newArr = myMap(arr, cb);

        chai.spy.on(arr, "map");
        chai.spy.on(newArr, "map"); 

        expect(arr.map).to.have.not.been.called();
        expect(newArr.map).to.have.not.been.called();

    }); 

    it ("ensure that passed-in callback is invoked once for each element in passed-in array argument", () => {  
        const spy = chai.spy(cb); 
        const newArr = myMap(arr, spy);

        expect(spy).to.have.been.called.exactly(5);
        expect(newArr).to.eql([2, 4, 6, 8, 10]);
    }); 
}); 
