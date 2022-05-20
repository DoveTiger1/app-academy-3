// mutate input array such words alternate between fully 
// uppercase or lowercase 
// first word is uppercase

let alternatingWords = function(arr) { 
    for (let i = 0; i < arr.length; i++) { 
    
        // cannot let str = arr[i] 
        // because not apart of the arr
        
        if (i % 2 === 0) { 
            arr[i] = arr[i].toUpperCase(); 
    
        } else { 
            arr[i] = arr[i].toLowerCase(); 
        }
    }
}; 

let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]
