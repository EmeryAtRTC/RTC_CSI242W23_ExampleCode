//declare your fields
let groceryList;
let txtGroceryItem;
let btnAdd;
let btnRemove;
//add a new field
let keyPressLog;

//think of this like a constructor
window.addEventListener('load', function(){
    //Assign the fields
    groceryList = document.getElementById('grocery-list');
    txtGroceryItem = document.getElementById('txt-grocery-item');
    btnAdd = document.getElementById('btn-add');
    btnRemove = document.getElementById('btn-remove');
    keyPressLog = document.getElementById('key-press-log');
    
    //now that we have references to the elements we can add eventlisteners to them
    btnAdd.addEventListener('click', addButton)
    //This event will fire whenever the mouse cursor goes over the remove button
    btnRemove.addEventListener('mouseover', removeButton)
    //add focus in and out events to the textbox, calling the same method with each
    txtGroceryItem.addEventListener('focusin', toggleBorder)
    txtGroceryItem.addEventListener('focusout', toggleBorder)
    //add the focus event to the buttons
    btnAdd.addEventListener('focusin', toggleBorder);
    btnAdd.addEventListener('focusout', toggleBorder);
    btnRemove.addEventListener('focusin', toggleBorder);
    btnRemove.addEventListener('focusout', toggleBorder);
    //listeners for keypress
    //add keypress listeners to the window
    window.addEventListener('keydown', function(event){
        keyPressLog.innerHTML += `${event.key} ${event.type} <br>`;
    });
    //lets do key up, using an arrow function
    this.window.addEventListener('keyup', event => {
        keyPressLog.innerHTML += `${event.key} ${event.type} <br>`;
    });
    //lets do one more keypress
    this.window.addEventListener('keypress', event => {
        keyPressLog.innerHTML += `${event.key} ${event.type} <br>`;
    });
});

//There is a parameter that is sent to any function associated with an event
function addButton(event){
    console.log(`You clicked Add ${event}`);
    console.log(event);
    console.log(event.target);
    console.log(event.type);
}
function removeButton(event){
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    //lets say I needed the ID of the element that caused the event
    console.log(event.target.id);
}
//This function will set a border if the event is focusin and remove the border
//if the event is focsout
function toggleBorder(event){
    if(event.type === 'focusin'){
        document.getElementById(event.target.id).style.border = '5px solid red';
    }
    else{
        document.getElementById(event.target.id).style.border = '1px solid black';
    }
}

