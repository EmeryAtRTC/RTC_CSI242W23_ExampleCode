//Conditional Operators
if(2 < 4){
    console.log("2 is less than 4");
}
//== is equality but it is different in JavaScript
if(2 == "2"){
    console.log("2 as a string equals 2 as a number");
}
//=== identity check that the data types match AND the value
console.log(2 === "2");
//We can use the not operator with identity !==
console.log(2 !== "2");
console.log(2 != "2");

//Truthy and Falsy values
let x = 5;
if(x){
    console.log("This code will run");
}

//Lets say we want to get user input
//get user input with prompt()
// let firstName = prompt("Enter your name");
// while(!firstName){
//     //Inside of this loop they didnt type anything, and i prompt again
//     firstName = prompt("You didnt type anything in, try again");
// }

//switch
switch(x){
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    default:
        console.log("You did not enter 1 or 2");
}

//Ternary Operator ?
let number = 1;
//condition ? What to do if true : What to do if false
let output = number > 2 ? "Number is greater than 2" : "Number is less or equal 2";
console.log(output);


