function nextSem() {
  var userValues = getFromSession('userLoggedIn');
  let allGrades = userValues.grades;

  var failgrade = allGrades.includes('d');
  if (failgrade) {
    document.getElementById('message').innerHTML = "You cannot Enroll";
  } else {
    window.location.href = "nextsem.html";
  }
}
