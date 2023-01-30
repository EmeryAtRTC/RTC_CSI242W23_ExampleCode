//Get elements by className
//instead of let, use const
//getElementsByClassName('className')
const listItems = document.getElementsByClassName('grocery-item');
console.log(listItems);
//HTML collections are kind of like an array, can be accessed by index
console.log(listItems[0]);
//Change the item in index 1
listItems[1].innerHTML = `<em>Chicken</em>`;

//Another multi selector
//document.getElementsByTagName('tagName')
const listItems2 = document.getElementsByTagName('li');
console.log(listItems2);
//HTML collection is like an array and you can iterate through
//with a for loop
//foreach does not work on an HTMLCollection by default
//it is possible to make an array out of the collection
const listArray = Array.from(listItems2);
console.log(listArray);
//this list array can be accessed with foreach
console.log('logging with a forEach loop:');
listArray.forEach(element => {
    console.log(element);
});

//QuerySelectorAll - Gets you multiple elements. This takes in any css
//reference
const listItems3 = document.querySelectorAll('.grocery-item');
console.log(listItems3);
//Nodelist can be foreached through without any conversion
console.log(listItems3[3]);
//foreach
listItems3.forEach(element => {
    console.log(element);
});