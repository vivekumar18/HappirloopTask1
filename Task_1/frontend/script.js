function register() {
  fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.msg);
    if (data.msg === "Registration successful") {
      window.location = "login.html";
    }
  })
  .catch(err => alert("Error: " + err));
}

function login() {
  fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location = "profile.html";
    } else {
      alert("Invalid credentials");
    }
  })
  .catch(err => alert("Error: " + err));
}
