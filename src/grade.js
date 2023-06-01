let question = "What is 2+2?"
let answer = 5

let loginForm = document.querySelector("#grading-form");

loginForm.addEventListener("submit", submitGrade);

function submitGrade() {

  let answer = document.getElementById("grade").value;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:8080/api/submitResponse', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  
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
  
  var requestBody = JSON.stringify({ question: questionText, answer: answer });
  xhr.send(requestBody);
}