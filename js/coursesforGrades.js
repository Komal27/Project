function getsubforGrades() {
  const user = getFromSession('userLoggedIn');
  let coursesToPopulate = [];
  getFromServer('http://localhost:3009/students/' + user.id).then(function(responseData) {
    const courses = responseData.courseWork;
    for (var i = 0; i < courses.length; i++) {
      if (responseData.semester === courses[i].id) {
        for (var j = 0; j < courses[i].classes.length; j++) {
          coursesToPopulate.push(courses[i].classes[j].name);
        }
      }
    }
    setCourses(coursesToPopulate);
  });
}

function submitStudentGradesInDB(submitGrades) {

  const userID = getFromSession('userLoggedIn');
  const url = 'http://localhost:3009/students/' + userID.id;
  let gradesArray = [];
  for (var i = 0; i < submitGrades.length; i++) {
    const gradesToPush = {
      name: submitGrades[i].name,
      grade: submitGrades[i].grade,
      remarks: ""
    }
    gradesArray.push(gradesToPush);

  }

  for (var i = 0; i < userID.courseWork.length; i++) {
    if (userID.courseWork[i].id === userID.semester) {
      for(var j=0;j<userID.courseWork[i].classes.length;j++) {
        userID.courseWork[i].classes = gradesArray;
      }
      console.log(userID.courseWork[i].classes);
    }
  }

  putToServer(url, userID).then(function(data) {
    setInSession('userLoggedIn', userID);
  });

}
