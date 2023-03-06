//A Promise in JavaScript is an alternative to using callback functions
//This is the newer way of handling callbacks (ES6)
//A Promise has results, it is either successful (resolve)
//or unsuccessful (reject)

//The promise constructor takes a function which serves as a callback
//for the promise, the function has two parameters, resolve and reject
//When the promise is completed either the resolve of the reject is called

//create a promise
let promise1 = new Promise(function(resolve, reject){
    //some processing happens
    //check the result
    //if success you call resolve
    if(false){
        resolve('Success');
    }
    //check for failure
    reject('Failed');
});
//how to call a promise
//You have to use the then() method
//console.log(promise1.then());
//call this the correct way, pass functions to both the resolve and reject
promise1.then(
    function(value){
        document.write(value);
    },
    function(error){
        console.log(error);
    }
);
//Promise that could either fail or pass
let promise2 = new Promise(function(resolve, reject){
    //lets generate random number between 0 and 10
    //simulate some processing
    let number = Math.floor(Math.random() * 11);
    //we can ask questions about the processing
    if(number % 2 == 1){
        resolve(`Yay, we like odd numbers ${number}`);
    }
    else{
        reject(`Error, no even numbers allowed ${number}`);
    }
});

//call with .then
promise2.then((success) => {
        display(success);
    },
    (error) => {
        console.log(error);
    }
);
//You can also call a promise with a then() and a catch()
//then() runs on success, catch() on error
promise2.then((success) => {
    display(success);
}).catch((error) => {
    console.log(error);
});

//Another way to declare a promise is to use the async keyword
async function getData(){
    //simulate a delay
    //create a promise
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data Retrieved'), 2000);
    });
    //we can await a response from a promise
    let response = await promise;
    return response;
}

function display(data){
    document.querySelector('p').innerHTML = data;
}
//When you are calling an async function you use the parentheses
//when you are calling a promise variable you do not
getData().then((success) => {console.log(success)});