function getUserResponse(url) {
  var promiseObj = new Promise(function(resolve, reject) {
    let request;
    if (window.XMLHttpRequest) {
      request = new XMLHttpRequest();
    } else {
      request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.open('GET', url);
    request.onreadystatechange = function() {
      if (request.readyState === 4 && request.status === 200) {
        var respJson = JSON.parse(this.responseText);
        return resolve(respJson);
      }
    }
    try {
      request.send();
    } catch (e) {
      return reject(e)
    }
  });
  return promiseObj;
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
      console.log(responseData);
    });
    userDataPromise.catch(function(error) {
      console.log(error);
    });

  }
}
