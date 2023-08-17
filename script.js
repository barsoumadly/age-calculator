'use strict';

// Selecting input field
const dateInput = document.getElementById('date-input');

// Selecting button
const btnCalc = document.querySelector('.btn-calc');

// Selecting output fields
const yearsEL = document.getElementById('years');
const monthsEL = document.getElementById('months');
const daysEL = document.getElementById('days');

// Calculating difference between dates
const calcDifference = function (birthDate) {
  const now = new Date();
  const years = Math.abs(now.getFullYear() - birthDate.getFullYear());
  const months = Math.abs(now.getMonth() - birthDate.getMonth());
  const days = Math.abs(now.getDate() - birthDate.getDate());
  return [years, months, days];
};

// Showing age
const showAge = function (years, months, days) {
  yearsEL.textContent = years;
  monthsEL.textContent = months;
  daysEL.textContent = days;
};

btnCalc.addEventListener('click', function (event) {
  event.preventDefault();

  const birthDate = dateInput.value;
  if (birthDate) {
    const age = calcDifference(new Date(birthDate));
    showAge(...age);
  }
  dateInput.value = '';
});
