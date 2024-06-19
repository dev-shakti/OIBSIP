const degreeEl = document.getElementById('degree');
const typeEl = document.getElementById('type');
const btnEl = document.getElementById('convert-btn');
const resultsEl = document.getElementById('results');

function convertTemp() {
  const degree = parseFloat(degreeEl.value);
  const type = typeEl.value;

  if (isNaN(degree)) {
    resultsEl.value = 'Please enter a valid number';
    return;
  }

  let result;
  if (type === 'kelvin') {
    result = degree + 273.15;
  } else if (type === 'fahrenheit') {
    result = (degree * 9/5) + 32;
  }

  resultsEl.value = result;
}

btnEl.addEventListener('click', convertTemp);

