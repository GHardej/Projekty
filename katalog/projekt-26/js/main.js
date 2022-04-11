const settings = document.querySelector('.settings');
const settingsBtn = document.querySelector('.settings-btn');
const imageSection = document.querySelector('.image-section');

const eventName = document.querySelector('#event-name');
const eventDay = document.querySelector('#event-day');
const eventMonth = document.querySelector('#event-month');
const eventYear = document.querySelector('#event-year');
const eventImage = document.querySelector('#event-image');
const eventSpan = document.querySelector('.event');

const saveBtn = document.querySelector('.save');

const daysCount = document.querySelector('.days-count');
const hoursCount = document.querySelector('.hours-count');
const minutesCount = document.querySelector('.minutes-count');
const secondsCount = document.querySelector('.seconds-count');

let usersTime;

const setTime = () => {
  const currentTime = new Date();
  const result = usersTime - currentTime;

  const days = Math.floor(result / 1000 / 60 / 60 / 24);
  const hours = Math.floor((result / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((result / 1000 / 60) % 60);
  const seconds = Math.floor((result / 1000) % 60);

  daysCount.textContent = days;
  hoursCount.textContent = hours;
  minutesCount.textContent = minutes;
  secondsCount.textContent = seconds;

  if (result < 0) {
    daysCount.textContent = 0;
    hoursCount.textContent = 0;
    minutesCount.textContent = 0;
    secondsCount.textContent = 0;
  }
};

// https://cdn.pixabay.com/photo/2022/03/27/18/00/feather-7095765_960_720.jpg
const appUpdate = () => {
  eventSpan.textContent = eventName.value;
  imageSection.style.backgroundImage = `url('${eventImage.value}')`;
  usersTime = new Date(
    `${eventMonth.value} ${eventDay.value} ${eventYear.value}`
  );
  setTime();
};

settingsBtn.addEventListener('click', () => {
  settings.classList.toggle('active');
});

saveBtn.addEventListener('click', appUpdate);

appUpdate();
setInterval(setTime, 1000);
