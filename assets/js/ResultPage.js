// Getting the values received through the URL queryString
const url = window.location.href;
// Extract 'searchParams' from the URL
const searchParams = new URL(url).searchParams;
// Create a new URL searchParams with the datas recieved
const entries = new URLSearchParams(searchParams).entries();

const valuesArray = Array.from(entries);
const correctArray = valuesArray[0];
const wrongArray = valuesArray[1];

const percentageCalculator = (value) => {
  const percentage = value * 10;
  return percentage;
};
// Working on the DOM to adapt the values displayed with the values received
const correctPercentage = document.getElementById("correctPercentage");
const wrongPercentage = document.getElementById("wrongPercentage");
correctPercentage.innerText = percentageCalculator(correctArray[1]) + "%";
wrongPercentage.innerText = percentageCalculator(wrongArray[1]) + "%";

// Working on the summary of the questions displayed under the percentage on both sides
const correctRecap = document.getElementById("correct-recap");
const wrongRecap = document.getElementById("missed-recap");

correctRecap.innerHTML = `${correctArray[1]} / 10 Questions`;
wrongRecap.innerHTML = `${wrongArray[1]} / 10 Questions`;

// Working on the central text into the questionary chart
const firstPcircle = document.getElementById("toYou");
const secondPcircle = document.getElementById("outcome");
const thirdPcircle = document.getElementById("sentence");

if (correctArray[1] < 6) {
  firstPcircle.innerText = "Oops, try again...";
  secondPcircle.innerText = "You didn't pass the exam";
  thirdPcircle.innerHTML = `
  <p id="sentence">
  You won't receive any certificate<br />
  until you will pass the exam. <br />Contact your teaching assistant<br />
  to try again the test.
</p>
`;
} else {
  firstPcircle.innerText = "Congratulations!";
  secondPcircle.innerText = "You passed the exams";
  thirdPcircle.innerHTML = `
  <p id="sentence">
  We'll send you the certificate<br />
  in few minutes. <br />Check your email (including<br />
  promotions / spam folder)
</p>
`;
}

// Chart parameters and option
const correctAnswers = correctArray[1];
const wrongAnswers = wrongArray[1];
const myAnswers = [correctAnswers, wrongAnswers];
const ctx = document.getElementById("myChart");

const data = {
  datasets: [
    {
      label: "# of Answers",
      data: myAnswers,
      backgroundColor: ["#00ffff", "#900080"],
      borderColor: ["#00ffff", "#900080"],
      borderWidth: 1,
      cutout: "75%",
    },
  ],
};

new Chart(ctx, {
  type: "doughnut",
  data,
});
