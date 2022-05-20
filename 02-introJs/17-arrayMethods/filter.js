// Array #filter 

let parks = ['Zion', 'Yellowstone', 'Acadia', 'Yosemite']; 

// let yParks = []; 
// for (let i = 0; i < parks.length; i++) { 
//     let park = parks[i]; 

//     if (park[0] === 'Y') { 
//         yParks.push(park); 
//     }
// }

// console.log(yParks); 

// iterates through the whole array one by one 
// pass that arguemnt into a function 
// function returns a boolean condition
let yParks = parks.filter(function(ele, i, array) { 
    // if true push to the array 
    // return ele[0] === 'Y'; 
    // return ele.length > 7; 
    return ele.includes("o"); 
}); 

console.log(yParks); 
