function loadAJAX() {
  let request;
  var url = "http://localhost:3009/students";
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }

request.open('GET', url,true);
  request.onreadystatechange = function() {
    if ((request.readyState === 4) && (request.status === 200)) {

      var jsonData = JSON.stringify(url);
      var jsonObj = JSON.parse(jsonData);
      for (var i=0;i<jsonObj.length;i++){

          console.log(jsonObj.fName);

      }
    }
  }

  request.send();
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
    return loadAJAX();
  }

}
