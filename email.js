function validateEmail() {
  let email = document.myForm.user_email.value;

  if (email == "") {
    alert("Email cannot be empty");
    return false;
  }

  if (email.indexOf("@") == -1) {
    alert("Not a valid e-mail address");
    return false;
  }

  if (email.indexOf(".") == -1) {
    alert("Not a valid e-mail address");
    return false;
  }

  return true;
}
