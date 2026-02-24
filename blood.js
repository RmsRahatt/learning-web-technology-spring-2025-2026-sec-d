function validateBlood() {
  let blood = document.myForm.bg.value;

  if (blood == "") {
    alert("Blood Group must be selected");
    return false;
  }

  return true;
}
