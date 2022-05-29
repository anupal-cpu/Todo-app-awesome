import './src/css/style.css';
import './src/sass/main.scss';
import checkIcon from './src/images/check.svg';
import trashIcon from './src/images/trash.svg';

// selectors

const addTodoInput = document.querySelector('[data-add_input]');
const addTodoBtn = document.querySelector('[data-add--todo_btn]');
const todoParent = document.querySelector('[data-todos_parent]');
const todoItself = document.querySelector('[data-todo_itself]');

class TodoApp {
  constructor() {
    //   add todo listener
    addTodoBtn.addEventListener('click', this.addTodo);
  }

  //   method for adding todos
  addTodo() {
    const markup = `  <div
      class="todo flex min-w-[20rem] max-w-max h-[2rem] justify-between items-center"
      data-todo_itself
    >
      <ul class="list pr-5">
        <li class="list--items text-white text-sm">${addTodoInput.value}</li>
      </ul>
      <div
        class="actions--btns flex justify-center items-center "
      >
        <button
          class="complete w-[2rem] h-[2rem] flex justify-center items-center"
        >
          <i>
            <img
              class="w-[1rem] h-[1rem]"
              src="${checkIcon}"
              alt="complete"
          /></i>
        </button>
        <button
          class="delete w-[2rem] h-[2rem] flex justify-center items-center"
        >
          <i>
            <img
              class="w-[0.8rem] h-[0.8rem]"
              src="${trashIcon}"
              alt="delete"
          /></i>
        </button>
        <button class="delete"></button>
      </div>
    </div>`;
    if (addTodoInput.value !== '' && addTodoInput.value !== null)
      todoParent.innerHTML += markup;
  }
}

const todos = new TodoApp();
