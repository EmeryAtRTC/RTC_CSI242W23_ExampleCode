//Create our fields
let groceryList;
//use a load event to assign the fields
window.addEventListener('load', function(){
    //assigns the fields
    groceryList = document.getElementById('grocery-list');
    //add an event
    groceryList.addEventListener('click', groceryClick);
    this.document.body.addEventListener('click', bodyClick);
});

function groceryClick(event){
    console.log("==Grocery Click==");
    //log the target, this is the LI element
    console.log(event.target);
    //I need to know the listener that fired
    console.log(event.currentTarget);
    //Lets say that we do not want this event to bubble up
    //to the body
    //there is an event called stopPropagation()
    event.stopPropagation();
}
function bodyClick(event) {
    console.log('==Body Click==');
    //Log the target = element that got clicked
    console.log(event.target);
    //log the current target - listener that fired
    console.log(event.currentTarget);
}