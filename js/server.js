function getFromServer(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(JSON.parse(xhr.responseText));
    xhr.onerror = () => reject(JSON.parse(xhr.statusText));
    xhr.send();
  });
}

function postToServer(url, data) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = () => resolve(JSON.parse(xhr.responseText));
    xhr.onerror = () => reject(JSON.parse(xhr.statusText));
    xhr.send(JSON.stringify(data));
  });
}

function putToServer(url, data) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("PUT", url);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = () => resolve(JSON.parse(xhr.responseText));
    xhr.onerror = () => reject(JSON.parse(xhr.statusText));
    xhr.send(JSON.stringify(data));
  });
}
