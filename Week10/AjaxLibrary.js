//Constructor function
function AjaxLibrary(){
    this.xhttp = new XMLHttpRequest();
}

//I want to define a get request
//I am going to add a new method to the Ajax Library
//using the prototype
AjaxLibrary.prototype.get = function(url, callback){
    //open a location
    //open('Type', location, true)
    this.xhttp.open('GET', url, true);
    //onload - runs when we get a response
    //get a reference to this before i go inside
    //the function
    let self = this;
    this.xhttp.onload = function(){
        //is the request successful
        if(self.xhttp.status === 200){
            callback(null, self.xhttp.responseText);
        }
        else{
            callback(`Error: ${self.xhttp.status}`, null);
        }
    }
    this.xhttp.send();
}

//Define a POST request (Create new records)
AjaxLibrary.prototype.post = function(url, data, callback){
    this.xhttp.open("POST", url, true);
    this.xhttp.setRequestHeader('Content-type', 'application/json');
    let self = this;
    this.xhttp.onload = function(){
        callback(null, self.xhttp.responseText);
    }
    this.xhttp.send(JSON.stringify(data));
}

//Define a PUT Request
AjaxLibrary.prototype.put = function(url, data, callback){
    this.xhttp.open("PUT", url, true);
    this.xhttp.setRequestHeader('content-type', 'application/json');
    let self = this;
    this.xhttp.onload = function(){
        callback(self.xhttp.responseText);
    }
    this.xhttp.send(JSON.stringify(data));
}

//Define a delete request
AjaxLibrary.prototype.delete = function(url, callback){
    this.xhttp.open("DELETE", url, true);

    let self = this;
    this.xhttp.onload = function(){
        if(self.xhttp.status === 200){
            callback(null, "Post Deleted")
        }
        else{
            callback(`Error: ${self.xhttp.status}`, null);
        }
    }
    this.xhttp.send();
}