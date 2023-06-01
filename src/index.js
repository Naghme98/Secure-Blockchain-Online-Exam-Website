let loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", login);
// console.log(loginForm)

function login(event) {
  event.preventDefault();
  let username = document.getElementById("username-login").value;
  let role = document.getElementById("user-role").value;
  let password = document.getElementById("password-login").value;
  
  console.log(username+" ---- "+ role +" ----- "+ password);
  // window.location.href = 'question.html';

  submitResponse(username, role);
  
}

function submitResponse(name, role) {
  
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://127.0.0.1:8080/api/auth', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log('Response submitted successfully.');
      if (role === "student") {
        window.location.href = 'question.html';
      }
      else if (role === "teacher") {
        window.location.href = 'grade.html'
      }
    }
    else {
      console.error('Request failed. Status:', xhr.status);
    }
  };
  
  xhr.onerror = function() {
    console.error('Request failed');
  };
  
  var requestBody = JSON.stringify({ name: name, type: role });
  xhr.send(requestBody);
}
