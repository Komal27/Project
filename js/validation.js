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
    var userDataPromise = getFromServer('http://localhost:3009/students/' + name);
    userDataPromise.then(function(responseData) {
        if (responseData.password == pass) {
            setInSession('userLoggedIn', responseData);
          window.location.href = 'portal.html'
        } else {
          document.getElementById('error').innerHTML = 'Enter Correct Password';
        }
    });
}
}

function userGrades() {
  var username = document.forms["proflogin"]["username"].value;
  var cwid = document.forms["proflogin"]["cwid"].value;
  if (username === "") {
    document.getElementById('error').innerHTML = 'Enter Username';
    return;
  }

  if (username !== "" && username !== null) {
    var userPromise = getFromServer('http://localhost:3009/students/' + username);
    userPromise.then(function(responseData) {
      if (cwid === responseData.cwid)
        setInSession('userLoggedIn', responseData);
      window.location.href = "userGradesInput.html";
    });
  }
}
