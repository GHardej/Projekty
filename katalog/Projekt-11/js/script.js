console.log('%c------------------------LEKCJA 103 - Projekt 3', 'color: red');

const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

// REGEXP, walidator adresu e-mail
/^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;

// i powyżej oznacza flagę, która dopuszcza małe i duże litery
// REGEXP zapisujemy w dwóch slash'ach

const showMsg = () => {
	// console.log(pass.value);
	console.log(pass.value.length);
	if (
		pass.value.length >= minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.textContent = 'Masz bardzo dobre hasło!';
		p.style.color = 'lime';
	} else if (
		pass.value.length >= minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers)
	) {
		p.textContent = 'Masz dobre hasło!';
		p.style.color = 'orange';
	} else {
		p.textContent = 'Masz słabe hasło!';
		p.style.color = 'tomato';
	}
};

const checkPassword = () => {
	if (pass.value !== '') {
		showMsg();
	} else {
		p.textContent = 'Nie podałeś hasła...';
		p.style.color = '';
	}
};

pass.addEventListener('keyup', checkPassword);
