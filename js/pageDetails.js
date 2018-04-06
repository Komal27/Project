function getuserDetails() {
  var userValues = getFromSession('userLoggedIn');
  document.getElementById('student-title').innerHTML = "Welcome " + userValues.firstName;
  document.getElementById('student-sem').innerHTML = "Semester: " + userValues.semester;
}

function setSubjectsInPage(subject) {
  for(var i=0;i<=subject.length;i++) {
    document.getElementById('cpsc121').innerHTML = subject[0];
    document.getElementById('cpsc122').innerHTML = subject[1];
    document.getElementById('math150').innerHTML = subject[2];
    document.getElementById('math270').innerHTML = subject[3];
  }

}

function confirmSubjects() {
  var sub = document.getElementsByName('name');
  		var selectedsub = "";
  		for(var i=0; i<sub.length; i++)
  			if(sub[i].checked === true) {
  				selectedsub+= sub[i].value+"\n";
  		}
      console.log('selectedsub',selectedsub);

}
