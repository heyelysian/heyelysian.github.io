// var hungry = true;
// var thirsty = true;

// if (hungry){
//     console.warn("I am very hungry");
// }

// if (thirsty){
//     console.error("but i am thirsty");
// }


// if (hungry) { //then
//  console.error("I am hungry");
//  console.warn("I am very hungry");

// }else if (thirsty) { //else
//     console.error("but I'm thirsty");

// } else {
//     console.log("i'm bored");
// }

// single = is assignment. age = 30. double == is equality.

var buffetprice = function(age) {
    // var price = 0;

    if (age <=0)
    // return(NaN); or
    return (-1);

    else if (age < 10) {
        return (20);
        //price = 20;
    } else if ((age >= 10) && (age <21)){
        return (30);
        //price = 30;
    }

    //age >= 21
        return (40);
        //price = 40;

    //return (price);
}

console.log("age = 9: $" + buffetprice(9));
console.log("age = 15: $" + buffetprice(15));
console.log("age = 25: $" + buffetprice(25));



// var children = false;
// var teenagers = true;

// if (children){
//     console.warn("$20");


// }else if (teenagers) {
//     console.error("$30");


// }else {
//     console.log("$40");
// }
