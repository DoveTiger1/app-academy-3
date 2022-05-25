// Recursion Types 

// Direct Recursive Functions 
function pythagoreanCup() {
    pythagoreanCup();
};

pythagoreanCup();

// Indirect Recursive Functions 
function didYouDoTheThing() {
    ofCourseIDidTheThing();
}

function ofCourseIDidTheThing() {
    didYouDoTheThing();
}

didYouDoTheThing();
