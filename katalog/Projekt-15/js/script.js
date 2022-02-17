'use strict';
console.log('%c------------------------LEKCJA 107 - Projekt 7', 'color: red');

// let todoInput, errorInfo, addBtn, ulList;
let todoInput; // place for entering a task name
let errorInfo; // info of tasks' lack of description / input text
let addBtn; // ADD button - adds new elements to the list
let ulList; // list of tasks, UL tag
// let newTask; // adding task, new Li tag
// let allTasksArr = [];
let popup; // popup
let popupInfo; // warning in popup in case of empty input text
let taskToEdit; // edited task
let popupInput; // input in popup
let popupAddBtn; // accept button in popup
let popupCloseBtn; // cancel button in popup

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

// selectors of elements
const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input');
	errorInfo = document.querySelector('.error-info');
	addBtn = document.querySelector('.btn-add');
	ulList = document.querySelector('.todolist ul');

	popup = document.querySelector('.popup');
	popupInfo = document.querySelector('.popup-info');
	popupInput = document.querySelector('.popup-input');
	popupAddBtn = document.querySelector('.accept');
	popupCloseBtn = document.querySelector('.cancel');
};

// event listeners
const prepareDOMEvents = () => {
	addBtn.addEventListener('click', createTask);
	ulList.addEventListener('click', checkClick);
	popupCloseBtn.addEventListener('click', closePopup);
	popupAddBtn.addEventListener('click', changeTaskText);
	todoInput.addEventListener('keypress', enterKeyCheck);
};

const createTask = () => {
	if (todoInput.value !== '') {
		const newTask = document.createElement('li');
		newTask.textContent = todoInput.value;
		createTools(newTask);
		ulList.append(newTask);

		// adding new task to array
		// createTasksArray(newTask);

		// adding data-id to new task according to array length
		// newTask.dataset.id = 'test' + allTasksArr.length;
		todoInput.value = '';
		errorInfo.textContent = '';
	} else {
		errorInfo.textContent = 'Wprowadź treść zadania!';
	}
};

// const createTasksArray = (newTask) => {
// 	allTasksArr.push(newTask);
// 	console.log(allTasksArr);
// };

const createTools = (newTask) => {
	const divTag = document.createElement('div');
	divTag.classList.add('tools');
	newTask.append(divTag);

	// tool #1
	const completeBtn = document.createElement('button');
	completeBtn.classList.add('complete');
	completeBtn.innerHTML = '<i class="fas fa-check"></i>';

	// tool #2
	const editBtn = document.createElement('button');
	editBtn.classList.add('edit');
	editBtn.textContent = 'EDIT';

	// tool #3
	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete');
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

	divTag.append(completeBtn, editBtn, deleteBtn);
};

const checkClick = (e) => {
	// console.log(e.target.classList.contains('complete')); // targeting for desirable element
	if (e.target.matches('.complete')) {
		// console.log('Completed');
		e.target.closest('li').classList.toggle('completed');
		e.target.classList.toggle('completed');
	} else if (e.target.matches('.edit')) {
		// console.log('Edit');
		editTask(e);
	} else if (e.target.matches('.delete')) {
		// console.log('Delete');
		deleteTask(e);
	}
};

const editTask = (e) => {
	taskToEdit = e.target.closest('li');
	popupInput.value = taskToEdit.firstChild.textContent;
	// popup.style.display = 'flex';
	popup.classList.toggle('popup-active'); // alternative, better solution to style
};

const closePopup = () => {
	// popup.style.display = 'none';
	popup.classList.toggle('popup-active');
};

const changeTaskText = () => {
	if (popupInput.value !== '') {
		taskToEdit.firstChild.textContent = popupInput.value;
		// popup.style.display = 'none';
		popup.classList.toggle('popup-active');
	} else {
		popupInfo.textContent = 'Wpisz treść zadania...';
	}
};

const deleteTask = (e) => {
	// if (window.confirm('Potwierdź usunięcie zadania')) {
	// e.target.closest('li').remove();
	// };

	e.target.closest('li').remove();
	const allTasks = ulList.querySelectorAll('li');

	if (allTasks.length === 0) {
		errorInfo.textContent = 'Brak zadań na liście.';
	}
};

const enterKeyCheck = (e) => {
	if (e.key === 'Enter') {
		console.log('enter');
		createTask();
	}
};

document.addEventListener('DOMContentLoaded', main);
