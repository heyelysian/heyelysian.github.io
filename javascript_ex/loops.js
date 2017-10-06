var mul = function(n, m) {
    return (n * m);
}


//outer - FOR LOOP
for (var outer = 2; outer < 13; outer++) {
    console.info("\nMultiplication table: %d", outer)
    for (var inner = 1; inner < 13; inner++) {
        //string interpolation
        console.log("%d * %d = %d", outer, inner, mul(outer, inner));
    }
}

// for (var i = 1; i < 13; i++) {
//     console.log(i + " * 3 = " + mul(i));
// }


// manual version of outer code - WHILE LOOP
var i = 0;

while (i <10) {
    console.log("i = %d", i);
    i++
}

//for loop is better than while loop - FL is more flexible but more dangerous