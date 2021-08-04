// let url = "https://jsonplaceholder.typicode.com/posts";
// let request = new XMLHttpRequest();

// request.open("GET", url);
// request.responseType = 'json';
// request.send();

const url = "https://jsonplaceholder.typicode.com/posts";

async function getData(url, id){
    
    const response = await fetch(url);
    const data = await response.json();
    let result;
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {  
            document.getElementById("json").innerHTML = JSON.stringify(data[i], undefined, 2);
            return await data[i];
        }
    }
}

getData(url, 5);