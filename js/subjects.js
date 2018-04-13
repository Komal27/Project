function getSubjects() {
  getFromServer('http://localhost:3009/allSubjects/sem1').then(function(responseData) {
    setSubjectsInPage(responseData.subjects);
  });
}

function setSubjectInUserCourseWork(subs) {
  const userID = getFromSession('userLoggedIn');
  const url = 'http://localhost:3009/students/'+userID.id;
  userID.courseWork = subs;
  putToServer(url,userID).then(function(data) {
    console.log('data posted', data);
  });
}
