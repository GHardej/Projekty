const incomeArea = document.querySelector('.income-area');
const expensesArea = document.querySelector('.expenses-area');
const availableMoney = document.querySelector('.available-money');

const addBtn = document.querySelector('.add-transaction');
const delBtn = document.querySelector('.delete');
const delAllBtn = document.querySelector('.delete-all');
const lightBtn = document.querySelector('.light');
const darkBtn = document.querySelector('.dark');

const transactionPanel = document.querySelector('.add-transaction-panel');
const transactionName = document.querySelector('#name');
const transactionAmount = document.querySelector('#amount');
const transactionCategory = document.querySelector('#category');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');

let root = document.documentElement;
let ID = 0;
let categoryIcon;
let selectedCategory;
let moneyArr = [0];

const showPanel = () => {
  transactionPanel.style.display = 'flex';
};

const hidePanel = () => {
  transactionPanel.style.display = 'none';
  clearInputs();
};

const checkForm = () => {
  if (
    transactionName.value !== '' &&
    transactionAmount.value !== '' &&
    transactionCategory.value !== 'none'
  ) {
    createTransaction();
    console.log('ok');
  } else {
    alert('Wypełnij wszystkie pola!');
  }
};

const clearInputs = () => {
  transactionName.value = '';
  transactionAmount.value = '';
  transactionCategory.selectedIndex = 0;
};

const createTransaction = () => {
  const newTransaction = document.createElement('div');
  newTransaction.classList.add('transaction');
  newTransaction.setAttribute('id', ID);
  checkCategory(selectedCategory);

  newTransaction.innerHTML = `
  <p class="transaction-name">
  ${categoryIcon} ${transactionName.value}
  </p>
  <p class="transaction-amount">
  ${transactionAmount.value}zł 
  <button class="delete" onclick="deleteTransaction(${ID})"><i class="fas fa-times"></i></button>
  </p>`;

  transactionAmount.value > 0
    ? incomeArea.appendChild(newTransaction) &&
      newTransaction.classList.add('income')
    : expensesArea.appendChild(newTransaction) &&
      newTransaction.classList.add('expense');
  moneyArr.push(parseFloat(transactionAmount.value));
  
  //   if (selectedCategory === 'income') {
  //     incomeArea.appendChild(newTransaction);
  //     newTransaction.classList.add('income');
  //     moneyArr.push(parseFloat(transactionAmount.value));
  //   } else {
  //     expensesArea.appendChild(newTransaction);
  //     newTransaction.classList.add('expense');
  //     moneyArr.push(parseFloat(-transactionAmount.value));
  //   }
  countMoney(moneyArr);
  hidePanel();
  ID++;
};

const checkCategory = (transaction) => {
  switch (transaction) {
    case 'income':
      categoryIcon = '<i class="fas fa-money-bill-wave"></i>';
      break;
    case 'shopping':
      categoryIcon = '<i class="fas fa-cart-arrow-down"></i>';
      break;
    case 'food':
      categoryIcon = '<i class="fas fa-hamburger"></i>';
      break;
    case 'cinema':
      categoryIcon = '<i class="fas fa-film"></i>';
      break;
  }
};

const countMoney = (money) => {
  const newMoney = money.reduce((x, y) => x + y);
  availableMoney.textContent = `${newMoney}zł`;
};

const deleteTransaction = (id) => {
  const transactionToDelete = document.getElementById(id);
  const amount = parseFloat(transactionToDelete.childNodes[2].innerText);

  const indexOfTransaction = moneyArr.indexOf(amount);
  moneyArr.splice(indexOfTransaction, 1);

  transactionToDelete.classList.contains('income')
    ? incomeArea.removeChild(transactionToDelete)
    : expensesArea.removeChild(transactionToDelete);
  countMoney(moneyArr);
};

const deleteAllTransactions = () => {
  incomeArea.innerHTML = '<h3>Przychód:</h3>';
  expensesArea.innerHTML = '<h3>Wydatki:</h3>';
  availableMoney.textContent = '0zł';
  moneyArr = [0];
};

const changeStyleToLight = () => {
  root.style.setProperty('--first-color', '#f9f9f9');
  root.style.setProperty('--second-color', '#14161f');
  root.style.setProperty('--border-color', 'rgba(0, 0, 0, 0.2)');
};

const changeStyleToDark = () => {
  root.style.setProperty('--first-color', '#14161f');
  root.style.setProperty('--second-color', '#f9f9f9');
  root.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.4)');
};

addBtn.addEventListener('click', showPanel);
cancelBtn.addEventListener('click', hidePanel);
saveBtn.addEventListener('click', checkForm);

transactionCategory.addEventListener('change', (e) => {
  selectedCategory = e.target.value;
});

// equivalent code for change listener using onchange with select html tag :
// const selectCategory = () => {
//   selectedCategory =
//     transactionCategory.options[transactionCategory.selectedIndex].value;
// };

delAllBtn.addEventListener('click', deleteAllTransactions);
lightBtn.addEventListener('click', changeStyleToLight);
darkBtn.addEventListener('click', changeStyleToDark);
