//Fetch is ES6
//We have access to classes
class FetchLibrary{

    //create a get()
    get(url){
        //return a promise
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        })
    }
    //post - create
    //fetch takes an optional second parameter
    //options object
    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
    }
}