function loadAJAX() {
  var request;
  var user = $('#uname').val();
  var password = $('#pwd').val();

  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }
  request.open('GET', 'db1.json');
  request.onreadystatechange = function() {
    if ((request.readyState === 4) && (request.status === 200)) {
      var items = JSON.parse(request.responseText);
      for (var key in items) {
        if ((user == items[key].fName) && (password == items[key].password)) {
          alert("Valid User");
          //window.location="welcome.html"
        } else {
         window.location="index.html";
        }
      }

    }
  }
  request.send();
}
