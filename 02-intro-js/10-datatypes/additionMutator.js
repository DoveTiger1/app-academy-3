// function that accepts an array and a number as arguments 
// mutat ethe input array such that every input has the given 
// number added to it 

let additionMutator = function(arr, num) { 
    for (let i = 0; i < arr.length; i++) { 
        arr[i] += num
    }
}; 

let nums1 = [3, 7, 1, 2];
additionMutator(nums1, 4);
console.log(nums1);     // [ 7, 11, 5, 6 ]

let nums2 = [11, 9, 4];
additionMutator(nums2, -1);
console.log(nums2);     // [ 10, 8, 3 ]
