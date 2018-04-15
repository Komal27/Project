function getsubforGrades() {
  const userID = getFromSession('userLoggedIn');
  getFromServer('http://localhost:3009/students/' + userID.id).then(function(responseData) {
  setCourses(responseData.courseWork);

  });
}

function gradesForUser(submitGrades) {
  const userID = getFromSession('userLoggedIn');
  const url = 'http://localhost:3009/students/'+userID.id;
  userID.grades = submitGrades;
  putToServer(url,userID).then(function(data) {
    setInSession('userLoggedIn', userID);
  
  });
}
