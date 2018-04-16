function getuserDetails() {
  var userValues = getFromSession('userLoggedIn');
  const userDescArray = ["Welcome " + userValues.firstName, "semester NO: " + userValues.semester];
  for (var i = 0; i < userDescArray.length; i++) {
    let $p = document.createElement('P');
    let $text = document.createTextNode(userDescArray[i]);
    $p.appendChild($text);
    document.querySelector('#student-desc').appendChild($p);
  }
}

function setSubjectsInPage(subject) {
  for (var i = 0; i < subject.length; i++) {
    let inputCheckbox = document.createElement('INPUT');
    inputCheckbox.setAttribute('type', 'checkbox');
    inputCheckbox.setAttribute('id', subject[i]);
    inputCheckbox.setAttribute('value', subject[i]);
    inputCheckbox.setAttribute('name', 'selectedSubjects');
    inputCheckbox.setAttribute('class', 'sub-check');
    inputCheckbox.setAttribute('autocomplete', 'off');

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

function enrollSelectedSub() {
  let allSubjects = document.querySelectorAll('input[name=selectedSubjects]');
  let selectedResult = [];
  for (var i = 0; i < allSubjects.length; i++) {
    if (allSubjects[i].checked) {
      selectedResult.push(allSubjects[i].value);
    }
  }
  setSubjectInUserCourseWork(selectedResult);
}

function newSubjects() {
  var userValues = getFromSession('userLoggedIn');
  let allGrades = userValues.grades;
  var failgrade = allGrades.includes('d');
  if (failgrade === true) {
    document.getElementById('message').innerHTML = "You cannot Enroll";
  } else {
    incrementSem();
    getNextSemSub();
  }
}
