//function myAjax(method, url, callBack, data) {
// const xhr = new XMLHttpRequest();

// xhr.responseType = 'json';

// xhr.onreadystatechange = () => {
//     // UNSENT = 0; исходное состояние
//     // OPENED = 1; вызван метод open
//     // HEADERS_RECEIVED = 2; получены заголовки ответа
//     // LOADING = 3; ответ в процессе передачи (данные частично получены)
//     // DONE = 4; запрос завершён

//     if (xhr.readyState === 4 && xhr.status < 400) {
//         console.log(xhr.response);
//     } else if (xhr.readyState === 4 && xhr.status > 400) {
//         console.error(xhr.response, xhr.status);
//     }
// };

// xhr.onload = () => {
//     if (xhr.status < 400) {
//         if (callBack) callBack(xhr.response);
//     } else {
//         console.error(xhr.response, xhr.status);
//     }
// };

// xhr.onerror = () => {
//     console.error(xhr.response, xhr.status);
// };

// xhr.onprogress = (e) => {
//     if (e.lengthComputable) {
//         console.log(`Получено ${e.loaded} из ${e.total}`);
//     } else {
//         console.log(`Получено ${e.loaded} байт.`);
//     }
// };

// xhr.open(method, url);

// if (method.toUpperCase() === 'GET') {
//     xhr.send();
// } else {
//     xhr.setRequestHeader('Content-type', 'application/json');
//     xhr.send(JSON.stringify(data));
// }



//}

function myAjax(url, options) {
    return fetch(url, options).then(response => {
        if (response.ok) {
            return response.json();
        }
    });
}

export default myAjax;
