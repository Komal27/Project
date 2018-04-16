function getsubforGrades() {
  const userID = getFromSession('userLoggedIn').id;
    getFromServer('http://localhost:3009/students/' + userID).then(function(responseData) {
    setCourses(responseData.courseWork.courses);
  });
}

function gradesForUser(submitGrades) {
  const userID = getFromSession('userLoggedIn');

  const url = 'http://localhost:3009/students/'+userID.id;
  userID.courseWork.grades = submitGrades;
console.log(userID.courseWork);
  putToServer(url,userID).then(function(data) {
    setInSession('userLoggedIn', userID);
  });
}
