let parks = ['Zion', 'Yellowstone', 'Acadia', 'Yosemite']; 

// let newParks = []; 
// for (let i = 0; i < parks.length; i++) { 
//     let park = parks[i]; 
//     newParks.push(park); 
// }
// console.log(newParks); 

// iterate through the array 
// pass each element into the function 
// store it into a new array 

// can delcare the method inside the function directly
// ensure to return a value

// use to get the same number of array and modify elements of an array 
let newParks = parks.map(function(park) { 
    return park.toUpperCase(); 
}); 

console.log(newParks); 
