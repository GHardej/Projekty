const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const button = document.querySelector('.count');
const errorInfo = document.querySelector('.error');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');

const checkForm = () => {
  if ((price.value !== '') & (people.value !== '')) {
    calculate();
    errorInfo.textContent = '';
    costInfo.style.display = 'block';
  } else if (price.value === '') {
    errorInfo.textContent = 'Wprowadź kwotę rachunku.';
    costInfo.style.display = 'none';
  } else {
    errorInfo.textContent = 'Wprowadź liczbę osób.';
    costInfo.style.display = 'none';
  }
};

const calculate = (priceNumber, peopleNumber, tipNumber) => {
  priceNumber = parseFloat(price.value);
  peopleNumber = parseInt(people.value);
  tipNumber = parseFloat(tip.value);

  const calculation = (priceNumber + priceNumber * tipNumber) / peopleNumber;
  cost.textContent = calculation.toFixed(2);
};

button.addEventListener('click', checkForm);
