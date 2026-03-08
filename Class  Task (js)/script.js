const name = "alamin";
let std = [1, "alamin", 2.5];

let btn = document.getElementById("btn");
btn.addEventListener("click", test);

function test() {
  let head = document.getElementsByTagName("h1")[0];
  let username = document.getElementById("username");

  if (username.value == "") {
    document.getElementById("msg").innerHTML = "please type username first!";
  } else {
    head.innerHTML = username.value;
    head.style.color = "red";
    document.getElementById("msg").innerHTML = "";
  }

  let div = document.getElementById("d2");
  let current = div.style.left;

  if (current === "" || current === null) {
    let current = 0;
    current += 10;
    div.style.left = current + "px";
  } else {
    let a = current.replace("px", "");
    a = parseInt(a);
    a += 10;
    div.style.left = a + "px";
  }

  console.log(div.style.left);
}

let move = document.getElementById("btn1");
move.addEventListener("click", () => {
  let d2 = document.getElementById("d2");
  let count = 0;

  let interval = setInterval(() => {
    if (count > 50) {
      clearInterval(interval);
    } else {
      let current = window.getComputedStyle(d2).left;

      if (parseInt(current) == 0) {
        d2.style.left = "10px";
      } else {
        current = parseInt(current) + 10 + "px";
        d2.style.left = current;
      }
    }
    count++;
  }, 100);
});
