const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// Js script for the timer of the questionary

// Define the semicircle from the html
const semicircles = document.querySelectorAll(".semicircle");
const timer = document.querySelector(".timer");

// input for the timer
const hr = 0;
const min = 0;
const sec = 200;

const hour = hr * 3600000;
const minutes = min * 60000;
const seconds = sec * 1000;
const setTime = hour + minutes + seconds;
const startTime = Date.now();
const futureTime = startTime + setTime;

const timerLoop = setInterval(countDownTimer);

function countDownTimer() {
  const currentTime = Date.now();
  const remainingTime = futureTime - currentTime;
  const angle = (remainingTime / setTime) * 360;

  // progress indicator
  if (angle > 180) {
    semicircles[2].style.display = "none";
    semicircles[0].style.transform = `rotate(180deg)`;
    semicircles[1].style.transform = `rotate(${angle}deg)`;
  } else {
    semicircles[2].style.display = "block";
    semicircles[0].style.transform = `rotate(${angle}deg)`;
    semicircles[1].style.transform = `rotate(${angle}deg)`;
  }
  // timer
  const hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  const min = Math.floor((remainingTime / (1000 * 60)) % 60);
  const sec = Math.floor(remainingTime / 1000);

  timer.innerHTML = `<div>${sec}</div>`;
  // end
  if (remainingTime < 0) {
    clearInterval(timerLoop);
    semicircles[0].style.display = "none";
    semicircles[1].style.display = "none";
    semicircles[2].style.display = "none";

    timer.innerHTML = `
    <!--<div class="timer-label">SECONDS</div>-->
    <div>0</div>
    <!--<div class="timer-label">REMAINING</div>-->
    `;

    incrementIndex();
  }
}

// Created the variables to define the fathers of the new elements
const questionContainer = document.getElementById("question");
const answersFather = document.getElementById("answers");
const myButtonsCollection = document.getElementsByTagName("button");
const myButtonsArray = Array.from(myButtonsCollection);

// Create a function that calculate the score of the test based on the picked answers of the user
let score = 0;
let globalscore = 0;

let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    let buttonValue = event.target.textContent;
    if (num === 0) {
      num = 1;
    }
    if (buttonValue === questions[num - 1].correct_answer) {
      score += 1;
      globalscore = score;
    }
  });
}

// Add eventListener for each button in the html
for (let i = 0; i < myButtonsArray.length; i++) {
  myButtonsArray[i].addEventListener("click", incrementIndex);
}

// Create an empty array to store other array containing all the possible answer to a specific question.
const questionsArray = [];

for (let i = 0; i < questions.length; i++) {
  let allAnswers = questions[i].incorrect_answers;
  allAnswers.push(questions[i].correct_answer);
  let shuffled = allAnswers
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  questionsArray.push(shuffled);
}

// Created an index for the question
let num = 0;
function incrementIndex() {
  myQuestionary();
  num += 1;
}

// Create a function that display the question number on the bottom of the webpage
function counterQuestion() {
  const counter = document.getElementById("counter");
  const questionsAmount = questions.length;
  if (num < 10) {
    let newNum = num + 1;
    return (counter.innerHTML = `Question ${newNum} / ${questionsAmount}`);
  } else {
    return (counter.innerHTML = `Question 10 / ${questionsAmount}`);
  }
}

// Create a function that replace the question text at every button clicked
const questionDisplayer = () => {
  if (num === 10) {
    questionContainer.innerText = questions[num - 1].question;
  } else {
    questionContainer.innerText = questions[num].question;
  }
};

// script to passing the global score obtained to the result page

let url = "./ResultPage.html";
const objectResult = {};

const passingScore = () => {
  objectResult.correct = globalscore;
  objectResult.wrong = 10 - globalscore;
};

let queryString = "";
const urlParams = () => {
  const searchParams = new URLSearchParams(objectResult);
  queryString = searchParams.toString();
};

const passingValue = (obj) => {
  window.location.href = url + "?" + obj;
};

//Create a function that replace the answer text in each button at click event.
const answersDisplayer = () => {
  if (num === 10) {
    for (let i = 0; i < 4; i++) {
      const currentQuestionArray = questionsArray[num - 1];
      myButtonsArray[i].innerText = currentQuestionArray[i];
      myButtonsArray[i].classList.remove("missingAnswers");
    }
  } else {
    if (questionsArray[num].length === 4) {
      for (let i = 0; i < 4; i++) {
        const currentQuestionArray = questionsArray[num];
        myButtonsArray[i].innerText = currentQuestionArray[i];
        myButtonsArray[i].classList.remove("missingAnswers");
      }
    } else {
      for (let i = 0; i < 4; i++) {
        if (i < 2) {
          // insert the correct text inside the 2 buttons needed
          const currentQuestionArray = questionsArray[num];
          myButtonsArray[i].innerText = currentQuestionArray[i];
        } else {
          // add a class to hide the extra buttons
          myButtonsArray[i].classList.add("missingAnswers");
        }
      }
    }
  }
};

// Create a function to resume and recall all the functions built for the questionary
const myQuestionary = () => {
  if (num < 10) {
    questionDisplayer();
    answersDisplayer();
    counterQuestion();
    passingScore();
    urlParams();
  } else {
    questionDisplayer();
    answersDisplayer();
    counterQuestion();
    passingScore();
    urlParams();
    passingValue(queryString);
  }
};

myQuestionary();
