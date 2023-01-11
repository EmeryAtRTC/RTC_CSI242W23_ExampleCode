//While loop is pre test - tests before it runs
while(false){
    console.log("Will this while loop run?");
}
//A do while loop is a post test loop - tests after it runs
do{
    console.log("Will this do while loop run?");
}
while(false);

let numbers = [5, 6, 7, 8];

//for loop that goes through an array
for(let i = 0; i < numbers.length; i++){
    console.log("The element: " + numbers[i] + " The index " + i);
}

//foreach(int x in numbers) = for of
for(let element of numbers){
    console.log(element);
}

//foreach loop
//foreach is a method - a method specifically refers to a function
//that is called on an object
console.log("For Each");
//foreach takes what is called a call back function as a parameter
//It calls that function for each element in the array
numbers.forEach(displayElement);

function displayElement(element, index){
    console.log(element + " " + index);    
}

//foreach using an arrow function
numbers.forEach((element, index) => {
    console.log("The element " + element + " The index " + index);
});