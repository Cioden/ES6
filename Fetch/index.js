/**
 * Fetch
 * 
 * RESTFul API - https://jsonplaceholder.typicode.com/
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */



/*fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())
    .then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/comments', {
        method: "POST",
        body: JSON.stringify( {
            postId: 1,
            name: "Dylan",
            email: "dylansemail310@gmail.com",
            body: "Post Body!"
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))*/


fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json()).then(data => console.log(data) )

fetch('https://jsonplaceholder.typicode.com/comments', {
    method: "POST",
    body: JSON.stringify( {
        postId: 26,
        name: "Dylan",
        email: "dylanemail@gmail.com",
        body: "POST success"
    })
}).then(response => response.json()).then(data => console.log(data) )