import './src/css/style.css';
import './src/sass/main.scss';
import checkIcon from './src/images/check.svg';
import trashIcon from './src/images/trash.svg';

// selectors

const addTodoInput = document.querySelector('[data-add_input]');
const addTodoBtn = document.querySelector('[data-add--todo_btn]');
const todoParent = document.querySelector('[data-todos_parent]');
const todoItself = document.querySelector('[data-todo_itself]');
const body = document.querySelector('.main');
const modalDes = document.querySelector('.des-modal');
const modalTitle = document.querySelector('.title-text');

// classes

class TodoApp {
  constructor() {
    // addTodo handler
    addTodoBtn.addEventListener('click', this.addTodo);
    // deleteTodo handler
    todoParent.addEventListener('click', this.deleteCompleteTodo);

    // show description handler
    todoParent.addEventListener('click', this.showDetails);
  }

  // add todo method

  addTodo() {
    const markup = `<div
    class="todo h-effect hover:shadow-xl overflow-hidden flex min-w-[20rem] max-w-max h-[2rem] justify-between items-center"
    data-todo_itself
  >
    <ul class="list">
      <li class="list--items text-white text-sm">${addTodoInput.value}</li>
    </ul>
    <div class="actions--btns flex justify-end items-center">
      <button
        class="complete w-[2rem] h-[2rem] flex justify-center items-center"
      >
        <i class='svg'>
          <img
            class="w-[1rem] h-[1rem] svg"
            src="${checkIcon}"
            alt="complete"
        /></i>
      </button>
      <button
        class="delete w-[2rem] h-[2rem] flex justify-center items-center"
      >
        <i class="svg">
          <img
            class="w-[0.8rem] h-[0.8rem] svg"
            src="${trashIcon}"
            alt="delete"
        /></i>
      </button>
    </div>
  </div>`;
    if (
      addTodoInput.value !== '' &&
      addTodoInput.value !== null &&
      addTodoInput.value.length <= 37
    )
      todoParent.innerHTML += markup;
  }

  // delete and complete todo method

  deleteCompleteTodo(e) {
    const target = e.target;
    const targetParent = target.parentElement.parentElement;
    if (target.classList.contains('delete')) {
      targetParent.classList.add('fadeout');
      targetParent.addEventListener('transitionend', function () {
        targetParent.remove();
      });
    } else if (target.classList.contains('complete')) {
      targetParent.classList.add('completed-todo');
      targetParent.style.pointerEvents = 'none';
      targetParent.classList.remove('h-effect');
      targetParent.querySelector('.delete').style.pointerEvents = 'all';
    }
  }

  // show description of the todo method

  showDetails(e) {
    // show modal
    const target = e.target;
    if (target.classList.contains('todo')) {
      const layer = document.createElement('div');
      layer.classList.add('overlay');
      body.appendChild(layer);
      modalDes.classList.add('show');

      // remove modal

      layer.addEventListener('click', () => {
        modalDes.classList.remove('show');
        layer.remove();
      });

      // change text
      const titleTodo = target.querySelector('.list--items');
      modalTitle.innerHTML = titleTodo.innerHTML;
    }
  }
}

new TodoApp();
