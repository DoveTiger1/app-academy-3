// Array forEach 

let parks = ['Zion', 'Yellowstone', 'Acadia', 'Yosemite']; 

// for (let i = 0; i < parks.length; i++) { 
//     let park = parks[i]; 
//     console.log(park); 
// }

let str = ""; 
// iterates through each element in the array 
let eachPark = parks.forEach(function(ele, idx, array) { 
    console.log(ele); 
    console.log(idx); 
    console.log(array); 

    str += ele;
}); 

console.log(str); 
