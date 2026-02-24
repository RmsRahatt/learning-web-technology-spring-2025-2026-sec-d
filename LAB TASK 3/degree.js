function validateDegree() {
  let s = document.myForm.ssc.checked;
  let h = document.myForm.hsc.checked;
  let b = document.myForm.bsc.checked;

  if (s == false) {
    if (h == false) {
      if (b == false) {
        alert("At least one degree has to be selected");
        return false;
      }
    }
  }

  return true;
}
