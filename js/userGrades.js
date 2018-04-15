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
