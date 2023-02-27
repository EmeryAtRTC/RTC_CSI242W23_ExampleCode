//let result = someData();
//lets call get some data and pass a function
someData(function(data){
    console.log(data);
})

//we can define a function with an arrow function
someData(data => {
    console.log(`Display from array function ${data}`);
});
//call someData and pass displayToConsole
someData(displayToUL);


//foreach through this - foreach takes a function as a parameter
// result.forEach((element) => {
//     console.log(element);
// })

//function that creates a an array of 5 random numbers 0-10
//this method takes a function as a parameter
function someData(callBack){
    let array = [];
    for(let i = 0; i < 5; i++){
        //put a random number from 1-10 in the array
        array[i] = Math.floor(Math.random() * 11);
    }
    //call the callBack function and pass the array
    callBack(array);
}

//function that displays to the console
function displayToConsole(data){
    console.log(`Display from displayToConsole function ${data}`);
}
//function that takes in an array and displays the array
//to the unordered list
function displayToUL(data){
    let ul = document.querySelector('ul');
    console.log(ul);
    data.forEach(element => {
        let li = document.createElement('li');
        li.textContent = element;
        ul.appendChild(li);
    });
}
