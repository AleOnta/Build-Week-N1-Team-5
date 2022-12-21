const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
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
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
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
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let questionDisplayer = document.getElementById("question");

let answerDisplayerA = document.getElementById("answer_a");
let answerDisplayerB = document.getElementById("answer_b");
let answerDisplayerC = document.getElementById("answer_c");
let answerDisplayerD = document.getElementById("answer_d");

answerDisplayerA.addEventListener("click", incrementIndex);
answerDisplayerA.addEventListener("click", correctAnswer);
//answerDisplayerA.addEventListener("click", counterQuestion);
answerDisplayerB.addEventListener("click", incrementIndex);
answerDisplayerC.addEventListener("click", incrementIndex);
answerDisplayerD.addEventListener("click", incrementIndex);

let num = 0;

function incrementIndex() {
  randomQuestion(questions);
  num += 1;
}

let punteggio = 0;

function correctAnswer() {
  return (punteggio += 1);
}

function redirectToResult() {
  location.replace("./ResultPage.html");
}

function counterQuestion() {
  const counter = document.getElementById("counter");
  const tot = questions.length;
  let newNum = num + 1;
  return (counter.innerHTML = `Question ${newNum} / ${tot}`);
}

const randomQuestion = (array) => {
  if (num < array.length) {
    if (array[num].incorrect_answers.length === 3) {
      let currentQuestion = array[num].question;
      questionDisplayer.innerText = currentQuestion;

      let currentAnswerA = array[num].correct_answer;
      answerDisplayerA.innerText = currentAnswerA;

      //crea un for loop per le tre errate

      let currentAnswerB = array[num].incorrect_answers[0];
      answerDisplayerB.innerText = currentAnswerB;

      let currentAnswerC = array[num].incorrect_answers[1];
      answerDisplayerC.classList.remove("missingAnswers");
      answerDisplayerC.innerText = currentAnswerC;

      let currentAnswerD = array[num].incorrect_answers[2];
      answerDisplayerD.classList.remove("missingAnswers");
      answerDisplayerD.innerText = currentAnswerD;

      counterQuestion();

      console.log("domanda n.", num);
      console.log("punteggio", punteggio);

      return {
        num,
        punteggio,
        questionDisplayer,
        answerDisplayerA,
        answerDisplayerB,
        answerDisplayerC,
        answerDisplayerD,
      };
    } else {
      let currentQuestion = array[num].question;
      questionDisplayer.innerText = currentQuestion;

      let currentAnswerA = array[num].correct_answer;
      answerDisplayerA.innerText = currentAnswerA;

      let currentAnswerB = array[num].incorrect_answers[0];
      answerDisplayerB.innerText = currentAnswerB;

      answerDisplayerC.classList.add("missingAnswers");
      answerDisplayerD.classList.add("missingAnswers");

      counterQuestion();

      console.log("domanda n.", num);
      console.log("punteggio", punteggio);

      return {
        num,
        punteggio,
        questionDisplayer,
        answerDisplayerA,
        answerDisplayerB,
      };
    }
  } else {
    answerDisplayerA.addEventListener("click", redirectToResult());
    answerDisplayerB.addEventListener("click", redirectToResult());
    answerDisplayerC.addEventListener("click", redirectToResult());
    answerDisplayerD.addEventListener("click", redirectToResult());
  }
  return num;
};
