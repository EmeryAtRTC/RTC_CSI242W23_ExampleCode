//In JavaScript there is something called the global object
x = 2;
console.log(x);
//Why does this work?
//This works because of something called the global object(window)
console.log("Logging the global object");
console.log(window);
console.log(this);
//Everything we have been doing so far prompt() alert()
//window.alert("Window.Alert");
window.console.log("The console is inside of the window");

//The window contains a lot of properties and functions
//Any methods or libraries we have been using so far
//have come from the window

let y = 5;
console.log(this);

//You can tell how big the users screen is with innerheight and innerwidth
console.log(window.innerHeight);
//notice what happens - do not declare variables by adding them
//to the window
innerHeight = 10;
console.log(window.innerHeight);
//information about your browser
console.log(navigator);
//information about the url webhost
console.log(location);
