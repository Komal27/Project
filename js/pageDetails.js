function getuserDetails() {
  var userValues = getFromSession('userLoggedIn');
  document.getElementById('student-title').innerHTML = "Welcome " + userValues.firstName;
  document.getElementById('student-sem').innerHTML = "Semester: " + userValues.semester;
}

function setSubjectsInPage(subject) {
  for (var i = 0; i < subject.length; i++) {
    var inputBox = '<input type="checkbox" id="check" name="subcheck"><label for="subcheck' + subject[i] + '">' + subject[i] + '</label></input>';
    document.getElementById('subjects-div').innerHTML += inputBox;
  }
}

function GetSelection() {
  var x = document.getElementsByName('subcheck');
  var y = $(":checked").next('label').text();

  var checked = 0;
  for (var i = 0; i < x.length; i++) {
    if (x[i].checked)
      checked++;
  }

  if (checked > 2) {
    console.log("Selected", y);

  } else {
    console.log("Please select");
  }

}
