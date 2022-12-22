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

// Working on the
const correctRecap = document.getElementById("correct-recap");
const wrongRecap = document.getElementById("missed-recap");

correctRecap.innerHTML = `${correctArray[1]} / 10 Questions`;
wrongRecap.innerHTML = `${wrongArray[1]} / 10 Questions`;

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
