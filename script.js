
var errormessage = "";
var missingField = "";
function isEmail(email){
  var regex =
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$("#submitbutton").click(function () {
  errormessage = "";
  missingField = "";

  if ($("#email").val() == "") {
    missingField += "<p>Email is not Filled.</p>";
  }

  if ($("#phoneno").val() == "") {
    missingField += "<p>Phone no. is not Filled.</p>";
  }

  if ($("#password").val() == "") {
    missingField += "<p>Password is not Filled.</p>";
  }

  if ($("#confirmpassword").val() == "") {
    missingField += "<p>Confirm Password is not Filled.</p>";
  }

  if (isEmail($("#email").val()) == false) {
    errormessage += "<p>Email is not Valid</p>";
  }

  if ($.isNumeric($("#phoneno").val()) == false) {
    errormessage += "<p>Phono number is not valid.</p>";
  }

  if ($("#password").val() != $("#confirmpassword").val()) {
    errormessage += "<p>Password do not match.</p>";
  }
  
  if (errormessage == "") {
    $("#errors").html("You Successfully Registered.");
  } else {
    $("#errors").html(errormessage + missingField);

  }
});
  


