function setInSession(key, value) {
  window.sessionStorage.setItem(key, JSON.stringify(value));
}

function getFromSession(key) {
  return JSON.parse(window.sessionStorage.getItem(key));
}
