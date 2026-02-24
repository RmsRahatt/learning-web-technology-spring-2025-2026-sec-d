function validateName() {
  let name = document.myForm.username.value;

  if (name == "") {
    alert("Name cannot be empty");
    return false;
  }

  if (name.indexOf(" ") == -1) {
    alert("Name must contain at least two words");
    return false;
  }

  let isLetter = false;
  let first = name[0];

  if (first >= "a") {
    if (first <= "z") {
      isLetter = true;
    }
  }

  if (first >= "A") {
    if (first <= "Z") {
      isLetter = true;
    }
  }

  if (isLetter == false) {
    alert("Name must start with a letter");
    return false;
  }

  return true;
}
