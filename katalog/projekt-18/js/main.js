const input = document.querySelector('.search');
const beverageList = document.querySelectorAll('li');

const search = () => {
  beverageList.forEach((item) => {
    // if (item.innerText.toLowerCase().includes(input.value.toLowerCase())) {
    //     item.style.display = 'block'
    // } else {
    //   item.style.display = 'none';
    // }

    const match = new RegExp(input.value, 'i').test(item.innerText);

    if (match) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
};
input.addEventListener('keyup', search);
