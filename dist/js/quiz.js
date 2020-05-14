
window.onload = function () {
    show(0);
}
//******************************************************************************* */
//call ajax
var ajax = new XMLHttpRequest();
var method = "GET";
var url = "temp.php";
var asynchronous = true;

ajax.open(method, url, asynchronous);
//sending request
ajax.send();
//reciving response from temp.php
var questions;
ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //converting json back to array
        questions = JSON.parse(this.responseText);
    }
}



//******************************************************************************* */
// let questions = [
//     {
//         id: 1,
//         question: "What is the full form of RAM ?",
//         answer: "Random Access Memory",
//         options: [
//             "Random Access Memory",
//             "Randomely Access Memory",
//             "Run Aceapt Memory",
//             "None of these"
//         ]
//     },
//     {
//         id: 2,
//         question: "What is the full form of CPU?",
//         answer: "Central Processing Unit",
//         options: [
//             "Central Program Unit",
//             "Central Processing Unit",
//             "Central Preload Unit",
//             "None of these"
//         ]
//     },
//     {
//         id: 3,
//         question: "What is the full form of E-mail",
//         answer: "Electronic Mail",
//         options: [
//             "Electronic Mail",
//             "Electric Mail",
//             "Engine Mail",
//             "None of these"
//         ]
//     }
// ];

function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["username"].value;
    //store player name
    sessionStorage.setItem("name", name);
    location.href = "quiz.html";
}

let question_count = 0;
let point = 0;
function next() {
    //check answer
    let user_answer = document.querySelector("li.option.active").innerHTML;
    
    if (user_answer == questions[question_count].answer) {
        point += 10;
        sessionStorage.setItem("points", point);
    }
    if(question_count == questions.length - 1){
        sessionStorage.setItem("time",`${minutes} minutes and ${seconds} seconds`);
        clearInterval(temp);
        location.href = "end.html";
        return; 
    }
    
    question_count++;
    show(question_count);
}

function show(count) {
    let question = document.getElementById("questions");
    // question.innerHTML = "<h2>"+ questions[count].question+"</h2>";
    question.innerHTML = `
    <h2>Q${questions[count].id}.${questions[count].question}</h2>
    <ul class="option_group">
        <li class="option">${questions[count].option1}</li>
        <li class="option">${questions[count].option2}</li>
        <li class="option">${questions[count].option3}</li>
        <li class="option">${questions[count].option4}</li>
    </ul>
    `;
    toggleActive();
}


function toggleActive() {
    let option = document.querySelectorAll("li.option")
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
} 