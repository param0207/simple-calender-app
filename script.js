const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// ALL ELEMENTS
const monthHTML = document.querySelector(".month");
const dayMonthDate = document.querySelector(".day-month-date");
const days = document.querySelector(".days");

const date = new Date();
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
console.log(lastDay);

const monthNumber = date.getMonth();

// SET MONTH
function setMonth(element, monthNumber) {
  element.innerText = MONTHS[monthNumber];
}

setMonth(monthHTML, monthNumber);

// SET FULL DATE
function setFullDate(element, date) {
  element.innerText = date.toDateString();
}

setFullDate(dayMonthDate, date);

let monthDays = "";

for (let i = 1; i <= lastDay; i++) {
  monthDays += `<div>${i}</div>`;
}
days.innerHTML = monthDays;
