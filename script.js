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
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const date = new Date();
// date.setMonth(4);
// date.setFullYear(2020);

function renderCalender() {
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const lastMonthDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

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

  for (let i = firstDayIndex; i > 0; i--) {
    monthDays += `<div class="prev-date">${lastMonthDay - i + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth() &&
      date.getFullYear() === new Date().getFullYear()
    ) {
      monthDays += `<div class="today">${i}</div>`;
    } else {
      monthDays += `<div>${i}</div>`;
    }
  }

  for (let i = 1; i <= 7 - lastDayIndex - 1; i++) {
    monthDays += `<div class="next-date">${i}</div>`;
  }

  days.innerHTML = monthDays;
}
leftArrow.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalender();
});

rightArrow.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalender();
});

renderCalender();
