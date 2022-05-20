// function should return a two dimensional array with subarrays of length 2 
// that contain elements at corresponding indices from the input arrays
// assume input arrays have same length 

function zip(numArr, wordArr) { 
    let zip = []; 

    for (let i = 0; i < numArr.length; i++) { 
        zip.push([numArr[i], wordArr[i]]); 
    }

    return zip; 
}

console.log(zip([1, 2, 3, 4], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

console.log(zip(['eins', 'zwei', 'drei'], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

console.log(zip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
