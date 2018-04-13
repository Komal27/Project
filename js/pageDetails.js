function getuserDetails() {
  var userValues = getFromSession('userLoggedIn');
  document.getElementById('student-title').innerHTML = "Welcome " + userValues.firstName;
  document.getElementById('student-sem').innerHTML = "Semester: " + userValues.semester;
}

function setSubjectsInPage(subject) {
  for (var i = 0; i < subject.length; i++) {
    let inputCheckbox = document.createElement('INPUT');
    inputCheckbox.setAttribute('type', 'checkbox');
    inputCheckbox.setAttribute('id', subject[i]);
    inputCheckbox.setAttribute('value', subject[i]);
    inputCheckbox.setAttribute('name', 'selectedSubjects');
    inputCheckbox.setAttribute('class', 'sub-check');

    let inputCheckboxLabel = document.createElement('LABEL');
    let inputCheckboxLabelText = document.createTextNode(subject[i].split('_').join(' '));
    inputCheckboxLabel.setAttribute('for', subject[i]);
    inputCheckboxLabel.appendChild(inputCheckboxLabelText);

    document.querySelector('#subjects-div').appendChild(inputCheckbox);
    document.querySelector('#subjects-div').appendChild(inputCheckboxLabel);
    document.querySelector('#subjects-div').appendChild(document.createElement('BR'));
  }
  checkUserSubjects();
}

function selectedSub() {
    let allSubjects = document.querySelectorAll('input[name=selectedSubjects]');
    let selectedResult = [];
    for (var i = 0; i < allSubjects.length; i++) {
      if (allSubjects[i].checked) {
          selectedResult.push(allSubjects[i].value);
      }
    }
    setSubjectInUserCourseWork(selectedResult);
}
