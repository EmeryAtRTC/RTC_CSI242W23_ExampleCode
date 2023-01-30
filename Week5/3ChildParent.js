//get a reference to the ul using querySelector and id
const groceryList = document.querySelector('#grocery-list');
//I can get all of the children
//children gives you an html collection
//when you are starting out with JS
console.log(groceryList.children);
//Its kind of like an array, except that you cant foreach through it
//without converting to an array
//traditional for loop still works
for(let i = 0; i < groceryList.children.length; i++){
    console.log(groceryList.children[i]);
}

console.log('Logging childNodes');
//you can also get the nodeList
console.log(groceryList.childNodes);
//looping through childNodes
groceryList.childNodes.forEach(node => {
    if(node.nodeType === Node.ELEMENT_NODE){
        console.log(node);
    }
});

//get references to our input and our buttons
const btnAdd = document.getElementById('btn-add');
const btnRemove = document.getElementById('btn-remove');
const txtInput = document.getElementById('txt-grocery-item');
console.log(btnAdd);
console.log(btnRemove);
console.log(txtInput);

//in order to make a button do something i add an eventListener to it
//we add a click event
//addEventListener('eventName', functionName)
btnAdd.addEventListener('click', addElementToList);
btnRemove.addEventListener('click', removeFromList);

//lets create those functions
function addElementToList(){
    //alert('Add Button Working');
    //get a reference to the input
    //you can get the element and access its properties in one line
    let input = txtInput.value;
    if(!input){
        //getting the reference and changing a property in one line
        document.querySelector('.error-message').innerHTML = 'You did not enter a value';
        return;
    }
    //if we make it here, we know they typed in a value
    let newItem = document.createElement('li');
    newItem.innerHTML = input;
    //add it to our list
    groceryList.appendChild(newItem);
}

function removeFromList(){
    //alert('Remove button Working');
}