function getUserResponse(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(JSON.parse(xhr.responseText));
    xhr.onerror = () => reject(JSON.parse(xhr.statusText));
    xhr.send();
  });
}


function validate() {
  var name = document.forms["login"]["uname"].value;
  var pass = document.forms["login"]["pwd"].value;

  if (name === "" && pass === "") {
    document.getElementById('error').innerHTML = 'Enter Username & Password';
    return;
  }
  if (name === "" && pass !== null) {
    document.getElementById('error').innerHTML = 'Enter Username';
    return;
  }

  if (pass === "" && name !== null) {
    document.getElementById('error').innerHTML = 'Enter Password';
    return;
  }

  if (pass !== "" && name !== "") {
    var userDataPromise = getUserResponse('http://localhost:3009/students/' + name);
    userDataPromise.then(function(responseData) {
      if (responseData.password == pass) {
        console.log('authorized');
      } else {
        console.log(' do not match');
      }
    });


  }
}
