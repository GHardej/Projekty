const billa = document.querySelector('img');
const input = document.querySelector('input');
const answerInfo = document.querySelector('.answer');
const errorInfo = document.querySelector('.error');
const answersArray = ['Nie', 'Tak', 'Być może', 'Zastanów się'];

const randomAnswer = () => {
  const max = answersArray.length;
  const answerNumber = Math.floor(Math.random() * max);
  answerInfo.innerHTML = `<span>Odpowiedź: </span> ${answersArray[answerNumber]}`;
};

const shakeBilla = () => {
  billa.classList.add('shake-animation');
  setTimeout(checkForm, 1000);
};

const checkForm = () => {
  if (input.value === '') {
    answerInfo.textContent = '';
    errorInfo.textContent = 'Wprowadź treść pytania';
  } else if (!input.value.endsWith('?')) {
    answerInfo.textContent = '';
    errorInfo.textContent = 'Musisz dodać znak zapytania...';
  } else {
    errorInfo.textContent = '';
    randomAnswer();
  }
  billa.classList.remove('shake-animation');
};

billa.addEventListener('click', shakeBilla);
