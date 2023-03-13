let connectionStatus = document.getElementById('connectionStatus');
let btnConnect = document.getElementById('btnConnect');
let btnDisconnect = document.getElementById('btnDisconnect');
let btnSend = document.getElementById('btnSend');
let message = document.getElementById('message');
let response = document.getElementById('response');
connectionStatus.innerHTML = "Disconnected";

//Websockets are a protocol that allows for real-time communication between
//a client and a server
//Before websockets, applications used HTTP to communicate. HTTP only
//allows for one way communication
//With websockets, both the client and the server can send messages to 
//each other at any time
//Websockets are particularly useful for applications that require real-time updates:
//Chat apps
//Multiplayer Games
//Stock Market ticker

//Websockets work by establishing a persistent connection between the client and
//the server. This means that once the connection is established, messages can
//be sent back and forth without the need for a new request/response cycle

let webSocket = null;

btnConnect.addEventListener('click', function(){
    //assign our webSocket
    webSocket = new WebSocket('wss://echo.websocket.events');

    //set the onopen()
    webSocket.onopen = function(){
        connectionStatus.innerHTML = 'Connected';
    };
    //onclose()
    webSocket.onclose = function(){
        connectionStatus.innerHTML = 'Disconnected';
    };
    //onmessage() we receive new information from the server
    webSocket.onmessage = function(e){
        response.innerHTML = e.data;
    }
    //onerror()
    webSocket.onerror = function(e){
        console.log(e);
    }
    console.log(webSocket);
    // 0 - Connecting - Socket is created, connection isnt open yet
    // 1 - Open - Connection is ready for use
    // 2 - Closing - Connection is in process of closing
    // 3 - Closed - Connection is closed or could not be opened
});
btnDisconnect.addEventListener('click', function(){
    webSocket.close();
    connectionStatus.innerHTML = 'Disconnected';
});

btnSend.addEventListener('click', function(){
    //console.log(`Testing ${message.value}`);
    //before we send lets check to make sure the connection is open
    if(webSocket === null || webSocket.readyState !== 1){
        alert('Connect before you send');
    }
    else{
        webSocket.send(message.value);
    }
});