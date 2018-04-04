function CreateUser(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    // Create a new User
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error Code: " + errorCode);
        console.log("Error Message: " + errorMessage);
      });


}