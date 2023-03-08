let ajaxLibrary = new AjaxLibrary();

// ajaxLibrary.get('https://jsonplaceholder.typicode.com/posts/100', function(error, posts){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(posts);
//     }
// });

//Create a post to add
let data = {
    userId: 10,
    title: "This is my post",
    body: "I am very upset about the delay of Elden Ring 2"
};

// ajaxLibrary.post('https://jsonplaceholder.typicode.com/posts/', data, function(error, post){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(post);
//     }
// })

// ajaxLibrary.put('https://jsonplaceholder.typicode.com/posts/10', data, function(post){
//     console.log(post);
// });

ajaxLibrary.delete('https://jsonplaceholder.typicode.com/posts/200', function(error, response){
    if(error){
        console.log(error);
    }
    else{
        console.log(response);
    }
})
