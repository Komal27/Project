function getSubjects() {
  getFromServer('http://localhost:3009/allSubjects/sem1').then(function(responseData) {
    setSubjectsInPage(responseData.subjects);
  });
}
