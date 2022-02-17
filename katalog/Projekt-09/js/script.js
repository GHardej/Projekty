console.log('%c------------------------LEKCJA 101 - Projekt 1', 'color: red');

const item1 = document.querySelector('.item1');
const btn = document.querySelector('.arrow');
const arrow = document.querySelector('.fas');

const showPic = () => {
	item1.classList.toggle('hide');
	// item1.classList.contains('hide') ? arrow.style.transform = 'Rotate(180deg)' : arrow.style.transform = 'Rotate(0)';
	arrow.classList.toggle('fas-rotate');
};

btn.addEventListener('click', showPic);
