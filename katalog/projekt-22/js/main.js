const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const infoBtn = document.querySelector('.fa-question');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');

let countTime;
let minutes = 0;
let seconds = 0;
let timesArr = [];
// let flag = true;

const colorBtn = document.querySelector('.fa-paint-brush');
const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
const colorFour = document.querySelector('.four');
const colors = document.querySelector('.colors');
let root = document.documentElement;

const handleStart = () => {
  // if (flag) {
  countTime = setInterval(() => {
    if (seconds < 9) {
      seconds++;
      stopwatch.textContent = `${minutes}:0${seconds}`;
    } else if (seconds >= 9 && seconds < 59) {
      seconds++;
      stopwatch.textContent = `${minutes}:${seconds}`;
    } else {
      seconds = 0;
      minutes++;
      stopwatch.textContent = `${minutes}:0${seconds}`;
    }
    if (stopwatch.textContent !== '0:00') {
      startBtn.removeEventListener('click', handleStart);
    }
  }, 1000);
  // }
  // flag = false;
};

const handlePause = () => {
  clearInterval(countTime);
  startBtn.addEventListener('click', handleStart);
  // flag = true
};

const handleStop = () => {
  time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`;
  if (stopwatch.textContent !== '0:00') {
    time.style.visibility = 'visible';
    timesArr.push(stopwatch.textContent);
    console.log(timesArr);
  } else {
    time.style.visibility = 'hidden';
  }
  clearCount();
  startBtn.addEventListener('click', handleStart);
  // flag = true
};

const handleReset = () => {
  clearCount();
  time.style.visibility = 'hidden';
  timesArr = [];
};

const clearCount = () => {
  clearInterval(countTime);
  stopwatch.textContent = '0:00';
  timeList.textContent = '';
  seconds = 0;
  minutes = 0;
};

const showHistory = () => {
  timeList.textContent = '';
  let num = 1;
  timesArr.forEach((time) => {
    const newTime = document.createElement('li');
    timeList.append(newTime);
    newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`;
    num++;
  });
};

const showModal = () => {
  if (!(modalShadow.style.display === 'block')) {
    modalShadow.style.display = 'block';
  } else {
    modalShadow.style.display = 'none';
  }

  modalShadow.classList.toggle('modal-animation');
};

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', showHistory);

infoBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', showModal);
window.addEventListener('click', (e) =>
  e.target === modalShadow ? showModal() : false
);

colorOne.addEventListener('click', () => {
  root.style.setProperty('--first-color', 'rgb(250, 20, 6)');
  root.style.setProperty('--hover-color', 'rgb(200, 20, 6)');
});
colorTwo.addEventListener('click', () => {
  root.style.setProperty('--first-color', 'rgb(6, 173, 250)');
  root.style.setProperty('--hover-color', 'rgb(6, 133, 250)');
});
colorThree.addEventListener('click', () => {
  root.style.setProperty('--first-color', 'rgb(0, 255, 42)');
  root.style.setProperty('--hover-color', 'rgb(0, 205, 26)');
});
colorFour.addEventListener('click', () => {
  root.style.setProperty('--first-color', 'rgb(193, 6, 250)');
  root.style.setProperty('--hover-color', 'rgb(153, 2, 206)');
});

colorBtn.addEventListener('click', () => {
  colors.classList.toggle('show-colors');
});
