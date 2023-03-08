let fetchLibrary = new FetchLibrary();

//get users endpoint
// fetchLibrary.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(error => console.log(error));

let user = {
    name: 'Dimpy Gill',
    username: 'dgill1234',
    email: 'dgill@rtc.edu'
}

//post to the users endpoint
fetchLibrary.post('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(error => console.log(error));