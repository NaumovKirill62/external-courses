const requestURL = 'https://jsonplaceholder.typicode.com/posts';

const get = {
  name: 'GET',
  doctype: 'json'
}

const post = {
  name: 'POST',
  doctype: 'json',
  postObject: {
    title: 'foo',
    body: 'bar',
    userId: 11,
  }
}

function sendRequest(request) {
  return new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(request.name, requestURL);

    xhr.responseType = request.doctype;
    
    if (request.name === 'POST') {
      xhr.send(JSON.stringify(request.postObject));
    } else {
      xhr.send();
    };

    xhr.onload = () => {
      if (xhr.status !== 200 || 302 || 201) {
        resolve(xhr.response); 
      } else {
        reject(`not correct`);
      }
    };
    xhr.onerror = () => {
      reject(`ERROR`);
    };
  })
}
sendRequest(post)
  .then((el) => console.log(el) )
  .catch((er) => { console.log(er)})
  