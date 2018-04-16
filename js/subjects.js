function getSubjects() {
  const user = getFromSession('userLoggedIn')
  let semester = user.semester;
  getFromServer('http://localhost:3009/allSubjects/' + semester).then(function(responseData) {
    setSubjectsInPage(responseData.subjects);
  });
}

function setSubjectInUserCourseWork(subs) {
  const userID = getFromSession('userLoggedIn');
  const url = 'http://localhost:3009/students/' + userID.id;
  let classesArray = [];
  for (var i = 0; i < subs.length; i++) {
    const classToPush = {
      name: subs[i],
      grade: "",
      remarks: ""
    }
    classesArray.push(classToPush);
  }

  for (var i = 0; i < userID.courseWork.length; i++) {
    if (userID.courseWork[i].id === userID.semester) {
      userID.courseWork[i].classes = classesArray;
    }
  }

  putToServer(url, userID).then(function(data) {
    setInSession('userLoggedIn', userID);
  });
}


function checkUserSubjects() {
  const user = getFromSession('userLoggedIn');
  const userSem = user.semester;
  const userCourseWork = user.courseWork;
  let userClasses = null;
  for (var i = 0; i < userCourseWork.length; i++) {
    if (userCourseWork[i].id === userSem) {
      userClasses = userCourseWork[i].classes;
    }
  }
  for (var i = 0; i < userClasses.length; i++) {
    document.querySelectorAll('input[id=' + userClasses[i].name + ']')[0].checked = true;
  }
}

function getNextSemSub() {
  const updatedSem = document.getElementById('student-sem').innerHTML;
  console.log(updatedSem);
  getFromServer('http://localhost:3009/allSubjects/' + updatedSem).then(function(responseData) {
    setSubjectsInPage(responseData.subjects);
    console.log(responseData.subjects);
  });
}
