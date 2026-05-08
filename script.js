// Signup AJAX
function ajaxSignup() {
  let user = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  let xhttp = new XMLHttpRequest();
  xhttp.open("POST", "../controller/signupCheck.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("user=" + JSON.stringify(user));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("msg").innerHTML = JSON.parse(
        this.responseText,
      ).message;
      setTimeout(() => (window.location.href = "login.php"), 1000);
    }
  };
}

function ajaxLogin() {
  let user = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
  let xhttp = new XMLHttpRequest();
  xhttp.open("POST", "../controller/loginCheck.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("user=" + JSON.stringify(user));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let res = JSON.parse(this.responseText);
      if (res.status === "success") {
        window.location.href = "home.php";
      } else {
        document.getElementById("msg").innerHTML = res.message;
      }
    }
  };
}

function loadUsers() {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "../controller/getUsers.php", true);
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let users = JSON.parse(this.responseText);
      let html = "";
      users.forEach((u) => {
        html += `<tr>
                    <td>${u.username}</td>
                    <td>${u.email}</td>
                    <td>
                        <a href="edit.php?id=${u.id}">Edit</a> | 
                        <a href="delete.php?id=${u.id}">Delete</a>
                    </td>
                </tr>`;
      });
      document.getElementById("userTable").innerHTML = html;
    }
  };
  xhttp.send();
}

function ajaxUpdate() {
  let user = {
    id: document.getElementById("userId").value,
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
  };
  let xhttp = new XMLHttpRequest();
  xhttp.open("POST", "../controller/updateCheck.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("user=" + JSON.stringify(user));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("msg").innerHTML = JSON.parse(
        this.responseText,
      ).message;
      setTimeout(() => (window.location.href = "user_list.php"), 1000);
    }
  };
}

function ajaxDelete(id) {
  let user = { id: id };
  let xhttp = new XMLHttpRequest();
  xhttp.open("POST", "../controller/delete.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("user=" + JSON.stringify(user));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("msg").innerHTML = JSON.parse(
        this.responseText,
      ).message;
      setTimeout(() => (window.location.href = "user_list.php"), 1000);
    }
  };
}
