import '../img/icon-128.png'
import '../img/icon-34.png'
import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyCGcz6tGFlzuhIXWYCy1wiLmZkhbRzhYfw",
  authDomain: "timechainalpha.firebaseapp.com",
  databaseURL: "https://timechainalpha.firebaseio.com",
  projectId: "timechainalpha",
  storageBucket: "timechainalpha.appspot.com",
  messagingSenderId: "462930798271"
};
firebase.initializeApp(config);
var provider = new firebase.auth.GoogleAuthProvider();
function initApp() {
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  console.log(error)
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}

window.onload = function() {
  initApp();
};