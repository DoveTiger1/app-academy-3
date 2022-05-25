// Default Parameters 
// Verbose Flag 

// Add Flags : "Verbose" Flag which defaults to false 
// To use verbose flag pass the true value 

function sum(nums, verbose = false) { 
    let total = 0; 

    for (let i = 0; i < nums.length; i++) { 
        if (verbose) { 
            console.log(total + " + " + nums[i] + " = " (total + nums[i]));
        }
        total += nums[i]; 
    } 

    return total;
}


nums = [1, 2, 3, 4];

sum(nums);
// 10

sum(nums, true);
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10
