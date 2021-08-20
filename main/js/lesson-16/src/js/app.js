import myAjax from "./myajax";
import renderHTML from "./renderHtml";

//myAjax('GET', 'https://jsonplaceholder.typicode.com/posts', renderHTML);

//myAjax('GET', 'https://jsonplaceholder.typicode.com/users', renderHTML);

const myData = {
    user: "Viktor",
    email: "test@gmail.com"
};

//myAjax('POST', 'https://jsonplaceholder.typicode.com/users', renderHTML, myData);


myAjax('https://jsonplaceholder.typicode.com/users').then(data => {
    renderHTML(data);
});

myAjax('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify(myData),
    headers: {
        'Content-type': 'application/json'
    }
}).then(data => {
    renderHTML(data);
});
