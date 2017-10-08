var TIMES = 5; //uppercase means CONSTANT - WON'T CHANGE

var toGuess = 7;
var counter = 1;
var myGuess = -1;
var result = "";

var evaluate = function(myNum, toGuess) {
    if (myNum < toGuess)
        return("HIGHER");
    
        else if (myNum == toGuess)
        return ("CORRECT");
    
        return ("LOWER");
}

while (counter < TIMES) {
    myGuess = parseInt(prompt("Number between 1 - 10"));
    
    result = evaluate(myGuess, toGuess);

    console.log("Times: %d my guess: %d, result: %s"
        , counter, myGuess, result);

        if (result == "CORRECT")
        break; //means exit from the loop (break is better method than 'counter = TIMES')
        //counter = TIMES;

    counter++;
}

console.log("counter = %d", counter);
if (myGuess != toGuess)
    console.log("YOU LOSE");