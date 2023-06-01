let question = "What is 2+2?"
let answer = 5

let loginForm = document.querySelector("#grading-form");

loginForm.addEventListener("submit", submitGrade);

function submitGrade() {

  let answer = document.getElementById("grade").value;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://127.0.0.1:8080/api/saveGrade/asset100', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log('Response submitted successfully.');
        window.location.href = 'index.html';
    }
    else {
      console.error('Request failed. Status:', xhr.status);
    }
  };
  
  xhr.onerror = function() {
    console.error('Request failed');
  };
  
  var requestBody = JSON.stringify({ assetId: "asset100", grade: 2.2 });
  xhr.send(requestBody);
}