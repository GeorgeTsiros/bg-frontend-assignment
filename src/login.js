var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.

const idPattern = /[a-zA-Z0-9]{2,8}@[0-9]{4}\.[a-z]{2}/;


const validateID = function(input) {
  return idPattern.test(input);
};



function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( validateID(username) && validateID(password)){
alert ("Login successfully");
window.location = "units.html"; // Redirecting to other page.
return false;
}
else{
// attempt --;// Decrementing by one.
alert("Colonist ID is invalid");
// Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
}
}
// }



//	regex for ID
//   /[a-zA-Z0-9]{2,8}@[0-9]{4}\.[a-z]{2}/