function nextSem() {
  var userValues = getFromSession('userLoggedIn');
  let allGrades = userValues.grades;

  var failgrade = allGrades.includes('d');
  if (failgrade) {
    console.log("Fail");
    document.getElementById('message').innerHTML = "You cannot Enroll";
  } else {
    console.log("Pass");
    window.location.href = "nextsem.html";
  }
}
