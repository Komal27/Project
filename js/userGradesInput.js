function userDetails() {
  var userDetails = getFromSession('userLoggedIn');
  document.getElementById('student-title').innerHTML = "Name:" + userDetails.firstName;
  document.getElementById('student-sem').innerHTML = "Semester: " + userDetails.semester;
}


function setCourses(courses) {
  for(var i=0;i<courses.length;i++) {
    let textbox = document.createElement('INPUT');
    textbox.setAttribute('type','textbox');
    textbox.setAttribute('id',courses[i]);
    textbox.setAttribute('name', 'userselectedCourses');
    textbox.setAttribute('class', 'coursesGrade');

    let textboxlabel = document.createElement('LABEL');
    let textboxlabelText = document.createTextNode(courses[i].split('_').join(" "));
    textboxlabel.setAttribute('for', courses[i]);
    textboxlabel.appendChild(textboxlabelText);

    document.querySelector('#student-courses').appendChild(textbox);
    document.querySelector('#student-courses').appendChild(textboxlabel);
    document.querySelector('#student-courses').appendChild(document.createElement('BR'));
  }

  }

  function gradeSubjects() {
    let allCourses = document.querySelectorAll('input[name=userselectedCourses]');
  //  console.log(allCourses);
    let submitGrades = [];
    for(var i = 0; i<allCourses.length;i++) {
      if(allCourses[i].value!="") {
        submitGrades.push(allCourses[i].value);
    }
    }
    gradesForUser(submitGrades);
    console.log(submitGrades);
  }
