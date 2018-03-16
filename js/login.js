$(document).ready(function() {
  $('#login').click(function() {
  var user = $('#uname').val();
  var password = $('#pwd').val();
  var error = true;

    $.ajax({
      type: "POST",
      url: "db1.json",
      dataType: "json",
      success: function(data) {
        $each(data, function(key,value) {
          if(user == students.fName && password == students.password) {
        error = false;
          }
        });
          if(error == false) {
            document.location="save_ss.php?user" +user;
          } else {
            alert("Invalid Details");
          }
        }
        });
          return false;


  });
});
