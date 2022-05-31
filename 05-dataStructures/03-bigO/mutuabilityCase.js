// Modifying Arrays in Place 

nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function increaseByone(nums) { 
    const increased = []; 

    for (let i = 0; i < nums.length; i++) { 
        increased.push(nums[i] + 1); 
    }

    return increased; 

    // returns a new array since a a new arrays contains n elements 
    // function has O(n) complexity 
}

console.log(increaseByOne(nums));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(nums);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function increaseByoneInPlace(nums) { 
    for (let i = 0; i < nums.length; i++) { 
        nums[i]++; 
    }

    return nums; 

    // mutates the original array by one 
    // the original array has a constant amount of elements 
    // function has constant complexity O(1)
    // more space efficient however this may not be desired 
    // if wanted a clean copy of the original array 
}

console.log(increaseByOneInPlace(nums));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(nums);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
