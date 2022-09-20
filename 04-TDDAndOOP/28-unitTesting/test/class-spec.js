const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let word; 
  let word1; 

  beforeEach(() => { 
    word = new Word("Hello World");
    word1 = new Word("Apple"); 
  })

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(word).to.have.own.property("word");
    });
  
    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal("Hello World");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(word.removeVowels()).to.equal("Hll Wrld");

      expect(word1.removeVowels()).to.equal("ppl");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(word.removeConsonants()).to.equal("eo o");
      
      expect(word1.removeConsonants()).to.equal("Ae"); 
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(word.pigLatin()).to.equal("ello WorldHay");

      expect(word1.pigLatin()).to.equal("Appleyay");
    });
  });
});
