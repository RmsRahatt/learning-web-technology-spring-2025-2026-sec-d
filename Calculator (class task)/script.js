let display = document.getElementById("display");
let buttons = document.getElementsByTagName("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    let current = this.innerHTML;

    if (current == "C") {
      display.value = "";
    } else if (current == "=") {
      display.value = eval(display.value);
    } else {
      display.value += current;
    }
  });
}
