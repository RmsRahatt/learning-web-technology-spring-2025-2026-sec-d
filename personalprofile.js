function validateProfile() {
  let n = document.myForm.pname.value;
  if (n == "") {
    alert("Name cannot be empty");
    return false;
  }
  if (n.indexOf(" ") == -1) {
    alert("Name needs at least two words");
    return false;
  }

  let e = document.myForm.email.value;
  if (e == "") {
    alert("Email cannot be empty");
    return false;
  }
  if (e.indexOf("@") == -1) {
    alert("Invalid Email address");
    return false;
  }
  if (e.indexOf(".") == -1) {
    alert("Invalid Email address");
    return false;
  }

  let m = document.myForm.gender[0].checked;
  let f = document.myForm.gender[1].checked;
  let o = document.myForm.gender[2].checked;

  if (m == false) {
    if (f == false) {
      if (o == false) {
        alert("Please select a gender");
        return false;
      }
    }
  }

  let d = document.myForm.day.value;
  let mo = document.myForm.month.value;
  let y = document.myForm.year.value;

  if (d == "") {
    alert("Day cannot be empty");
    return false;
  }
  if (mo == "") {
    alert("Month cannot be empty");
    return false;
  }
  if (y == "") {
    alert("Year cannot be empty");
    return false;
  }

  if (d < 1) {
    alert("Invalid Day");
    return false;
  }
  if (d > 31) {
    alert("Invalid Day");
    return false;
  }
  if (mo < 1) {
    alert("Invalid Month");
    return false;
  }
  if (mo > 12) {
    alert("Invalid Month");
    return false;
  }
  if (y < 1900) {
    alert("Invalid Year");
    return false;
  }
  if (y > 2016) {
    alert("Invalid Year");
    return false;
  }

  let bg = document.myForm.bg.value;
  if (bg == "") {
    alert("Please select a Blood Group");
    return false;
  }

  let s1 = document.myForm.ssc.checked;
  let s2 = document.myForm.hsc.checked;
  let s3 = document.myForm.bsc.checked;
  let s4 = document.myForm.msc.checked;

  if (s1 == false) {
    if (s2 == false) {
      if (s3 == false) {
        if (s4 == false) {
          alert("Please select at least one degree");
          return false;
        }
      }
    }
  }

  let pic = document.myForm.photo.value;
  if (pic == "") {
    alert("Picture cannot be empty");
    return false;
  }

  return true;
}
