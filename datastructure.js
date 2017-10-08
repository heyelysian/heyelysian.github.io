//array - a container/collection
var basket = [""];
fred[] = FRED CHANGE NAME

//person
var fred = ["fred","fred@gmail.com","12345678"];
barney.name = BARNEY CHANGE NAME
barney["name"] = BARNEY CHANGE NAME

//object is a collection of key/value pairs
var barney = {
    //left-hand side = label/key, {} = object 
    name: "fred",
    email: "fred@gmail.com",
    number: "12345678",
    age: "50",
    basket: ["apple","orange","grapes"],
    spouse: {
        name: "betty",
        email: "betty@gmail.com"
    }
}
//barney is array, spouse is obj

barney.spouse.name
//this means spouse is not a var, spouse is the actual name of key
barney["spouse"]["name"]
//to access var - use []

//list out every KEYS in barney - array is sequential numbers, only concerned w numbers/values
for (var i in barney)
    console.log("i= ", i)


//list out the values - obj is string, concerned about elements
for (var i in barney)
    console.log(">", [i])

    array.length
    barney.name
    //