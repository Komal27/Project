function getnewuserDetails() {
  var userValues = getFromSession('userLoggedIn');

  let newsem = userValues.semester+1;
  document.getElementById('student-title').innerHTML = "Welcome " + userValues.firstName;
  document.getElementById('student-sem').innerHTML =  newsem;
}

function getnewSubjects() {
  var userValues = getFromSession('userLoggedIn');
  let newsem = userValues.semester+1;
  console.log(newsem);
  getFromServer('http://localhost:3009/allSubjects/' + newsem).then(function(responseData) {
  setSubjectsInPage(responseData.subjects);
   });
 }

function incrementSem() {
  var userValues = getFromSession('userLoggedIn');
  let x = document.getElementById('student-sem').innerHTML;
  x++;
  document.getElementById('student-sem').innerHTML = x;
}
