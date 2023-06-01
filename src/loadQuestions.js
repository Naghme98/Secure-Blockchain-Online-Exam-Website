
var questionText = "What is 2+2?"
console.log(questionText)
var questionElement = document.getElementById('question');
questionElement.innerHTML = questionText;

let loginForm = document.querySelector("#exam-form");

loginForm.addEventListener("submit", submitExam);

// function loadQuestion() {
  // var xhr = new XMLHttpRequest();
  // xhr.open('GET', 'http://localhost:8080/api/loadQuestions', true);

  // xhr.onload = function() {
  //   if (xhr.status === 200) {
  //     question = xhr.responseText; // Output the received text
  //   } else {
  //     console.error('Request failed. Status:', xhr.status);
  //   }
  // };

  // xhr.onerror = function() {
  //   console.error('Request failed');
  // };

  // xhr.send();
// }

function submitExam() {

  let answer = document.getElementById("answer").value;
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

  
