console.log('%c------------------------LEKCJA 102 - Projekt 2', 'color: red');

const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const color = document.querySelector('.color');
const text = document.querySelector('p');

let i = 36;

const sizeUpFunction = () => {
	if (i <= 70) return;
	i += 2;
	text.style.fontSize = i + 'px';
	console.log(i);
};

const sizeDownFunction = () => {
	if (i <= 10) return;
	i -= 2;
	text.style.fontSize = i + 'px';
	console.log(i);
};

// const setRandomColor = () => {
// 	const getRandomColor =
// 		'#' + Math.floor(Math.random() * 16777215).toString(16);

// 	text.style.color = getRandomColor;
// 	console.log(getRandomColor);
// };

const setRandomColor = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	const randomColor = `rgb(${r},${g},${b})`;
	console.log(randomColor);
	text.style.color = randomColor;
};

sizeUp.addEventListener('click', sizeUpFunction);
sizeDown.addEventListener('click', sizeDownFunction);
color.addEventListener('click', setRandomColor);
