// Readline Module 

// Module is a package of code 

// import the readline module into our file 

const readline = require("readline");
// object that contains all of the methods we can use from the moudle 

// create an interface where we can talk to the user 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask question one 
rl.question("What's up, doc? ", answer => {
  console.log("you responded: " + answer);
  rl.close();
  // place that command inside of the callback to occur 
  // directly after a callback is invoked asynchronously 
  console.log("DONE!");

  // ask quesiton two 
    rl.question("What's down, clown? ", secondAnswer => { 
        console.log(secondAnswer + " is down."); 
        rl.close(); 
    });
}); 

/* 
What's up, doc? the sky
the sky is up.
What's down, clown? the ground
the ground is down.
*/

/* will never ask second question
since this occurs straight after question one is processed 
no response will be taken 

ask quesiton two 
rl.question("What's down, clown? ", secondAnswer => { 
    console.log(secondAnswer + " is down."); 
    rl.close(); 
}); 
*/
