// Initialize Firebase
var config = {
  apiKey: "AIzaSyDAVpSMgJ5t2CgT-7n8WkBVpy2YFTG7ROk",
  authDomain: "smilemore-524e0.firebaseapp.com",
  databaseURL: "https://smilemore-524e0.firebaseio.com",
  projectId: "smilemore-524e0",
  storageBucket: "smilemore-524e0.appspot.com",
  messagingSenderId: "1813970716"
};
  firebase.initializeApp(config);

$('#login-form-link').click(function(e) {
  $("#login-form").delay(100).fadeIn(100);
  $("#register-form").fadeOut(100);
  $('#register-form-link').removeClass('active');
  $(this).addClass('active');
  e.preventDefault();
});

$('#register-form-link').click(function(e) {
  $("#register-form").delay(100).fadeIn(100);
  $("#login-form").fadeOut(100);
  $('#login-form-link').removeClass('active');
  $(this).addClass('active');
  e.preventDefault();
});

$('#login-submit').click(function(e){
  firebase.auth().signInWithEmailAndPassword($('#login-email').val(),$('#login-password').val()).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
  });
});

$('register-submit').click(function(e){
  firebase.auth().createUserWithEmailAndPassword($('#register-email').val(),$('#register-password').val()).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
});
