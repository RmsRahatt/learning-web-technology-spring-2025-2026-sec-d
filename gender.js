function validateGender() {
  let genderValue = document.myForm.gender.value;

  if (genderValue == "") {
    alert("At least one gender has to be selected");
    return false;
  }

  return true;
}
