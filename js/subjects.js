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
    setInSession('userLoggedIn', userID);
  });
}

function checkUserSubjects() {
  const userSelectedSubjects = getFromSession('userLoggedIn').courseWork;
  for (var i = 0; i < userSelectedSubjects.length; i++) {
    console.log(userSelectedSubjects[i]);
    document.querySelectorAll('input[id='+userSelectedSubjects[i]+']')[0].checked = true;
  }
}
