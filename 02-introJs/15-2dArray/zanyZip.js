// return two dimensional array with subarrays of length 2 
// that contain elements at corresponding indices from the input arrays
// if one of the arrays is shorter than the other, then substitute 
// null for the missing elements 

function zanyZip(numArr, wordArr) { 
    let zip = []; 

    // iterate through both arrays
    for (let i = 0; i < numArr.length || i < wordArr.length; i++) { 
        // if the num is undefined meaning no numArr[i] return null
        if (numArr[i] === undefined) { 
            numArr[i] = null;
        }

        if (wordArr[i] === undefined) {
            wordArr[i] = null; 
        }

        // push the second dimesion array to the first dimension
        zip.push([numArr[i], wordArr[i]]); 
    }
    
    return zip; 
}

console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
