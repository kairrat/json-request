let sendRequest  = (url,method,data) => {

   return fetch(url)



}

sendRequest("https://jsonplaceholder.typicode.com/posts","GET").then((data) => {
    return data.json();
}).then(response => {
    console.log(response);
})