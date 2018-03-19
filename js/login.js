function validate() {
  const user = {
    username:  $('#uname').val() , password: $('#pwd').val()
  }
  debugger;
  if (user.username !== "" && user.username !== undefined) {
    console.log(getUser(user.username));
  }
}

function getUser(userName) {
  const url = 'http://localhost:3009/students/'+userName;

  // TODO: convert this to synchronus call and get value
  const userObject = loadAJAX(url);
  return userObject;
}

function loadAJAX(url) {
  let request;
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }

  request.open('GET', url);
  request.onreadystatechange = function() {
    if ((request.readyState === 4) && (request.status === 200)) {
      return request.responseText;
    }
  }
  request.send();
}
