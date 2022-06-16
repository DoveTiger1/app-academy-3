# DRY WET CODE

> a principle of software development aimed to reducing repition of software patterns, replacing it with abstractions or using data normlisation to avoid redundancy  

> DRY: don't repeat yourself 
> WET: write everything twice 

- makes code easier to change and refactor 

## Consecutive Numbers 
Suppose you have a function that returns true when an array of numbers when three numbers are consecutive, otherwise return false. 

```js
const isConsecutive = function(nums) { 
    for (let i = 0; i < nums.length - 2; i++) { 
        if (nums[i] + 1 === nums[i + 1] && nums[i + 1] + 1 === nums[i + 2]) { 
            return true; 
        }
    }
    return false; 
}

console.log(threeIncreasing([5, 1, 2, 3, 6])); // true
console.log(threeIncreasing([5, 1, 2, 4, 6])); // false
```

However we can refactor this function to make it DRYer. 

```js 
const isConsecutive = function(nums) { 
    const separatedBy = 1; 

    for (let i = 0; i < nums.length; i++) { 
        const num1 = nums[i]; 
        const num2 = nums[i + 1]; 

        if (num1 + separatedBy !== nums2) { 
            return false; 
        }
    }
    return true; 
}

const threeIncreasing = function(nums) { 
    for (let i = 0; i < nums.length - 2; i++) { 
        const consecutiveNums = []; 
        
        for (let j = i; j < 3; i++) { 
            consecutiveNums.push(nums[j]); 
        }

        if (isConsecutive(consecutiveNums)) { 
            return true; 
        }
    }
    return false; 
}

console.log(threeIncreasing([5, 1, 2, 3, 6])); // false
console.log(threeIncreasing([5, 1, 2, 4, 6])); // true
```

With this prefactored version 
- change the increment of consecutive numebers 
- change how many numbers need to be consecutive 
- whether to return true or false 
