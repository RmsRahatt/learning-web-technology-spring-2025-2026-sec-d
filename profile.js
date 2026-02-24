function validatePic() {
  let uId = document.myForm.userid.value;
  let p = document.myForm.pic.value;

  if (uId == "") {
    alert("UserId cannot be empty");
    return false;
  }

  if (uId <= 0) {
    alert("UserId has to be a positive number");
    return false;
  }

  if (p == "") {
    alert("Picture cannot be empty");
    return false;
  }

  return true;
}
