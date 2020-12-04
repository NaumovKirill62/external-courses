const requestURL = 'https://jsonplaceholder.typicode.com/todos/';
const get = {
  name: 'GET',
  doctype: 'json'
}
const post = {
  name: 'POST',
  doctype: 'json'
}

function sendRequest(request) {
  return new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest()

  xhr.open(request.name, requestURL);
  xhr.send();
  xhr.onload = () => {
    xhr.responseType = request.doctype
    if (xhr.status !== (200 || 302)) {
      reject("not correct");
    } 

    resolve(xhr.response);
  };
  xhr.onerror = () => {
    reject(`ERROR`);
  };
  })
}
