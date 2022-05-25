// Pythagorean Cup 

let justEnoughWine = false;

function pythagoreanCup() {
    // Base case: end the recursion 
    // - Is `justEnoughWine` true? Return & exit.
    if (justEnoughWine === true) {
        console.log("That's plenty, thanks!");
        return true;
    }

    // Recursive case: action that moves us towards the base case
    // - justEnoughWine must not have been true,
    //   so let's set it and check again.
    justEnoughWine = true;
    pythagoreanCup();
};

pythagoreanCup();
