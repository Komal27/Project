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
        let pageToLand;
        if (responseData.semester === 1) {
          pageToLand = 'sem1.html';
        } else {
          pageTogo = 'portal.html';
        }
        setInSession('userLoggedIn', responseData);
        window.location.href = pageToLand;
      } else {
        document.getElementById('error').innerHTML = 'Enter Correct Password';
      }
    });
  }
}
