// that takes in a sentence string and returns the word of the sentence that contains the most vowels.

function mostVowels(sentence) {
    let counts = [];
    let words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        counts[word] = countVowels(word);
    }

    let largestNum = 0;
    let largestWord = "";

    for (key in counts) {
        if (counts[key] > largestNum) {
            largestNum = counts[key];
            largestWord = key;
        }
    }

    return largestWord;
}

function countVowels(word) {
    let count = 0;
    let vowels ="aeiou";

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count++;
        }
    }

    return count;
}


console.log(mostVowels("what a wonderful life")); // "wonderful"
