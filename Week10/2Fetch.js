let btnGetText;
let btnGetJSON;
let btnGetAPI;
let displayArea;

window.addEventListener('load', function(){
    btnGetText = this.document.getElementById('btnGetText');
    btnGetJSON = this.document.getElementById('btnGetJSON');
    btnGetAPI = this.document.getElementById('btnGetAPI');
    displayArea = this.document.querySelector('p');

    btnGetText.addEventListener('click', getText);
    btnGetJSON.addEventListener('click', getJSON);
});

function getText(){
    //fetch(locationOfData)
    //fetch returns a promise
    fetch('text.txt')
    .then(function(response){
        //This method is going to run on success
        console.log(response);
        //we got back a response, to get the text out
        //i call .text()
        return response.text();
    })
    .then(function(text){
        displayArea.innerHTML = text;
    })
    .catch(function(error){
        displayArea.innerHTML = error;
    });
}

function getJSON(){
    //template
    //fetch(loaction).then(parse to JSON).then(display the data).catch(what to do if error)
    fetch('data.JSON')
    .then((response) => {
        //Here we have the response object
        //console.log(reponse);
        //we pass the json to the next then method
        return response.json();
    })
    .then((json) => {
        //here you have the json objects
        console.log(json);
        //loop through the objects and display them
        let output = '';
        json.forEach(element => {
            output += `Title: ${element.title}, Year ${element.year}</br>`;
        });
        displayArea.innerHTML = output;
    })
    .catch((error) => {
        console.log(error);
    });
}
//fetch template
fetch()
.then((response) => {

})
.then((data) => {

})
.catch((error) => {

})