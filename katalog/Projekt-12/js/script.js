console.log('%c------------------------LEKCJA 104 - Projekt 4', 'color: red');

const converter = document.querySelector('#converter');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');

// T(°C) = (T(°F) - 32) / 1.8
// T(°F) = T(°C) × 1.8 + 32

const change = () => {
	one.textContent == '°C'
		? (one.textContent = '°F') && (two.textContent = '°C')
		: (one.textContent = '°C') && (two.textContent = '°F');
	result.textContent = 'Wynik: ';
};

const celsToFahr = () => {
	degrees = converter.value;
	const fahrenheit = degrees * 1.8 + 32;
	// x = Math.round(fahrenheit);
	result.textContent = `Wynik: ${degrees}°C to ${fahrenheit.toFixed(1)}°F`;
};

const fahrToCels = () => {
	degrees = converter.value;
	const celsius = (degrees - 32) / 1.8;
	result.textContent = `Wynik: ${degrees}°F to ${celsius.toFixed(1)}°C`;
};

const convert = () => {
	if (converter.value == '') {
		result.textContent = 'Musisz podać wartość';
	} else {
		one.textContent == '°C' ? celsToFahr() : fahrToCels();
		// converter.value = '';
	}
};

const reset = () => {
	converter.value = '';
	result.textContent = 'Wynik: ';
};

convBtn.addEventListener('click', convert);
changeBtn.addEventListener('click', change);
resetBtn.addEventListener('click', reset);
