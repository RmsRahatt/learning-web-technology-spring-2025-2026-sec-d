function validateDOB() {
  let day = document.myForm.day.value;
  let month = document.myForm.month.value;
  let year = document.myForm.year.value;

  if (day == "") {
    alert("Day cannot be empty");
    return false;
  }
  if (month == "") {
    alert("Month cannot be empty");
    return false;
  }
  if (year == "") {
    alert("Year cannot be empty");
    return false;
  }

  if (day < 1) {
    alert("Day must be 1 or more");
    return false;
  }
  if (day > 31) {
    alert("Day must be 31 or less");
    return false;
  }

  if (month < 1) {
    alert("Month must be 1 or more");
    return false;
  }
  if (month > 12) {
    alert("Month must be 12 or less");
    return false;
  }

  if (year < 1900) {
    alert("Year cannot be less than 1900");
    return false;
  }
  if (year > 2099) {
    alert("Year cannot be more than 2016");
    return false;
  }

  return true;
}
