//getElementById()
let header = document.getElementById('main-header');
//After you get a reference to an element in the dom
//always log it
console.log(header);
//add a class to an element
header.classList.add('blue-background');
//header.classList.remove('blue-background');
//I can also directly change the styling
header.style.color = 'white';
header.style.padding = "20px";
header.style.backgroundColor = "#aaa";

//querySelector() - only one element, takes a string representation of a
//CSS Selector
//Gives you one and it gives you the first matching element that it finds
let subHeader = document.querySelector('h2');
console.log(subHeader);
subHeader.innerHTML += ` for Today:`

let listItem = document.querySelector("li");
console.log(listItem);
//psuedo selectors
//:last-child
listItem = document.querySelector('li:last-child');
console.log(listItem);
//nth child
listItem = document.querySelector('li:nth-child(2)');
console.log(listItem);
