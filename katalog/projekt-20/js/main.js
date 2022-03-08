const username = document.querySelector('#username');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');
const inputArr = [username, password, password2, email];

const showError = (input, msg) => {
  // argument INPUT przechowuje element z tablicy z INPUTami
  // argument MSG przechowuje placeholder

  const formBox = input.parentElement;
  const errorMsg = formBox.querySelector('.error-text');
  formBox.classList.add('error');
  errorMsg.textContent = msg;
};

const clearError = (input) => {
  const formBox = input.parentElement;
  formBox.classList.remove('error');
};

const checkForm = (input) => {
  input.forEach((el) => {
    if (el.value === '') {
      showError(el, el.placeholder);
    } else {
      clearError(el);
    }
  });
};

// argument INPUT z funkcji "checkform" przechowuje tablicę z inputami
// argument EL odnosi się do każdej zmiennej umieszczonej w tablicy

const checkLength = (input, min) => {
  if (input.value.length < min) {
    showError(
      input,
      `${input.previousElementSibling.innerText.slice(
        0,
        -1
      )} składa się z min. ${min} znaków`
    );
  }
};

const checkPassword = (pass1, pass2) => {
  if (pass1.value !== pass2.value) {
    showError(pass2, 'Hasła różnią się.');
  }
};

const checkMail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(email.value)) {
    clearError(email);
  } else {
    showError(email, 'E-mail jest niepoprawny');
  }
};

const checkErrors = () => {
  const allInputsBox = document.querySelectorAll('.form-box');
  let errorCount = 0;

  allInputsBox.forEach((el) => {
    if (el.classList.contains('error')) {
      errorCount++;
    }
  });

  if (errorCount === 0) {
    popup.classList.add('show-popup');
  }

  console.log(errorCount);
};

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();
  checkForm(inputArr);
  checkLength(username, 3);
  checkLength(password, 8);
  checkPassword(password, password2);
  checkMail(email);
  checkErrors();
});

clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  inputArr.forEach((el) => {
    el.value = '';
    clearError(el);
  });
});
