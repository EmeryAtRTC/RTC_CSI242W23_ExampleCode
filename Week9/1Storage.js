//Locale storage and session storage is a location where information can be saved
//The take information in key value pairs. They only take strings. It is possible
//to store more complex object in store, however you must convert it to a JSON
//string first. If you retrieve an object from storage it comes out as a JSON string.
//You must parse the JSON string before you can use it like an object

//use localStorage
//to store an item we use setItem(key, value)
localStorage.setItem('number', '10');
//to retrieve an item use getItem(key)
let number = localStorage.getItem('number');
console.log(number);
console.log(typeof(number));
//log the whole object
console.log(localStorage);
//clear() method empties localStorage
// localStorage.clear();
// console.log(localStorage);
//remove one item removeItem(key)
// localStorage.removeItem('number');
// console.log(localStorage);

let character = {
    name: "Josh",
    class: "Wizard",
    level: 20,
    maxHealth: 100,
    gold: 200
}

console.log(character);
//to store an object we have to convert to a JSON string stringify()
console.log(JSON.stringify(character));

localStorage.setItem('Player1', JSON.stringify(character));
console.log(localStorage);

//when i retrieve an object from storage I have to parse
let retrievedData = localStorage.getItem('Player1');
console.log(retrievedData);
//before I can use the retrieved data like an object I have to parse
let retrievedCharacter = JSON.parse(retrievedData);
console.log(retrievedCharacter);
console.log(retrievedCharacter.name);

// Sessionstorage is temporary. it empties when the browser is closed. Sometimes
// it takes a full refresh and a close
let scores = [25, 80, 90, 100, 82];
//to store an array we would need to stringify
sessionStorage.setItem('scores', JSON.stringify(scores));
console.log(sessionStorage);
//retrieve our scores from session storage
let scoreString = sessionStorage.getItem('scores');
console.log(scoreString);
console.log(JSON.parse(scoreString));