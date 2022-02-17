const barDaysElapsed = document.querySelector('.progress__bar-days-elapsed');
const daysElapsedPercentageInfo = document.querySelector(
	'.progress__bar-days-elapsed-percentage'
);
const progressInfo = document.querySelector('.progress__info');
const daysElapsedInfo = document.querySelector('.progress__info-days-elapsed');
const daysToFinishInfo = document.querySelector(
	'.progress__info-days-to-finish'
);

const actualDate = new Date();
const startDate = new Date(2020, 05, 27);
const endDate = new Date(2023, 06, 27);
const contractDuration = endDate.getTime() - startDate.getTime();

const elapsedDays = Math.ceil(
	(actualDate.getTime() - startDate.getTime()) /
	(24 * 60 * 60 * 1000)
);

const daysElapsedPercentage = Math.round(
	((actualDate.getTime() - startDate.getTime()) / contractDuration) *
	100
);

const daysToFinish = Math.ceil(
	(endDate.getTime() - actualDate.getTime() + 24 * 60 * 60 * 1000) /
	(24 * 60 * 60 * 1000)
);

barDaysElapsed.style.width = daysElapsedPercentage + '%';
progressInfo.style.width = daysElapsedPercentage + '%';

daysElapsedInfo.textContent = elapsedDays;
daysToFinishInfo.textContent = daysToFinish;
daysElapsedPercentageInfo.textContent = daysElapsedPercentage + '%';

console.log(elapsedDays);
console.log(daysElapsedPercentage);
console.log(daysToFinish);
