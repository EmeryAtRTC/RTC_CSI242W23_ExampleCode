//method called document.createElement('tagName');
const btnSubmit = document.createElement('button');
//you must create the element, prepare the element, then add to the page
btnSubmit.innerHTML = "Submit";
//Add it somewhere on the page
//add to the body, this is not good practice
document.body.appendChild(btnSubmit);

//how to add a child to the unordered list?
//we need a reference.
const list = document.getElementById('grocery-list');
//create the new element
const liElement = document.createElement('li');
//now we prepare
liElement.innerHTML = 'Ice cream';
liElement.classList.add('grocery-item');
liElement.id = 'iceCream';
//add it to the parent element
list.appendChild(liElement);
