let btnRequest;
let displayArea;
let btnJSONRequest;
let displayAreaJSON;

window.addEventListener('load', function(){
    btnRequest = document.getElementById('btn-request');
    displayArea = document.getElementById('display-area');
    btnJSONRequest = document.getElementById('btn-json-request');
    displayAreaJSON = document.getElementById('display-area-json');


    btnRequest.addEventListener('click', getDataFromFile);
    btnJSONRequest.addEventListener('click', getJSONFromFile);
});

//Lets send an ajax request
function getDataFromFile(){
    //create an XMLHttpRequest()
    let xhttp = new XMLHttpRequest();
    //next we need to call an open method
    //open takes 3 parameters
    //First is the type of request
    //GET - retrieving data
    //Second parameter is the location of that data
    //The third is a bool to indicate whether
    //the request will be async. In this class it
    //will always be true
    xhttp.open('GET', 'text.txt', true);
    //onload() method
    //onload is fired when the request is complete
    xhttp.onload = function(){
        //lets log this
        //console.log(this);
        //check to see if the request worked
        if(this.status === 200){
            displayArea.innerHTML = this.responseText;
        }
    }
    //send the request
    xhttp.send();
}
function getJSONFromFile(){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'students2.json', true);
    xhttp.onload = function(){
        //IF the request was successful
        if(this.status === 200){
            //Parse the JSON String
            let students = JSON.parse(this.responseText);
            //console.log(students);
            students.forEach(student => {
                let li = document.createElement('li');
                li.innerHTML = `Name: ${student.firstName} ${student.lastName} ID: ${student.studentId}`;
                displayAreaJSON.appendChild(li);
            });
        }
    }
    xhttp.send();
}