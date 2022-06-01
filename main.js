import './src/css/style.css';
import './src/sass/main.scss';
import checkIcon from './src/images/check.svg';
import trashIcon from './src/images/trash.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// selectors

const addTodoInput = document.querySelector('[data-add_input]');
const addTodoBtn = document.querySelector('[data-add--todo_btn]');
const todoParent = document.querySelector('[data-todos_parent]');
const todoItself = document.querySelector('[data-todo_itself]');
const body = document.querySelector('.main');
const modalDes = document.querySelector('.des-modal');
const modalTitle = document.querySelector('.title-text');
const todoHome = document.querySelector('.todos_home');
const knowMore = document.querySelector('.more');
const desText = document.querySelector('.description-text');
const emptyMsg = document.querySelector('.empty-msg');

// classes

// check empty markup

const ifEmptyMarkup = `<div class="todo h-effect hover:shadow-xl overflow-hidden flex min-w-[20rem] max-w-max h-[2rem] justify-between items-center" data-todo_itself="">
<ul class="list">
  <li class="list--items text-white text-sm">d</li>
</ul>
<div class="actions--btns flex justify-end items-center">
  <button class="complete w-[2rem] h-[2rem] flex justify-center items-center">
    <i class="svg">
      <img class="w-[1rem] h-[1rem] svg" src="/src/images/check.svg" alt="complete"></i>
  </button>
  <button class="delete w-[2rem] h-[2rem] flex justify-center items-center">
    <i class="svg">
      <img class="w-[0.8rem] h-[0.8rem] svg" src="/src/images/trash.svg" alt="delete"></i>
  </button>
</div>
</div>`;

class TodoApp {
  constructor() {
    // addTodo handler
    addTodoBtn.addEventListener('click', this.addTodo);
    // deleteTodo handler
    todoParent.addEventListener('click', this.deleteCompleteTodo);

    // show description handler
    todoParent.addEventListener('click', this.showDetails);

    // know more handler

    knowMore.addEventListener('click', this.moreDetails);
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
    ) {
      todoParent.innerHTML += markup;
      // removing empty msg
      const elPresent = document.querySelector('.empty-msg') || false;
      const emptyMsg = document.querySelector('.empty-msg');
      if (elPresent) {
        emptyMsg.remove();
      }

      //
    } else if (+addTodoInput.value.length > 37) {
    }
  }

  // delete and complete todo method

  deleteCompleteTodo(e) {
    const target = e.target;
    const targetParent = target.parentElement.parentElement;

    if (target.classList.contains('delete')) {
      // check if empty task
      if (todoHome.clientHeight <= 32) {
        todoHome.innerHTML = `<h1 class="empty-msg font-sans text-2xl font-semibold opacity-30  absolute bottom-[22%]">No task</h1>`;
      }

      // changing overflow off todoMainParent
      const todoList = document.querySelectorAll('.todo');
      const todoHomeContainer = document.querySelector('.main_todos_container');
      if (todoHomeContainer.clientWidth === 336 && todoList.length <= 8) {
        todoHomeContainer.classList.remove('change-overflow');
      } else if (todoHomeContainer.clientWidth > 336 && todoList.length <= 16) {
        todoHomeContainer.classList.remove('change-overflow');
      }
      // end of overflow change
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
        desText.classList.remove('show-more');
        layer.remove();
      });

      // change text
      const titleTodo = target.querySelector('.list--items');
      modalTitle.innerHTML = titleTodo.innerHTML;
    }
  }

  // know more modal btn

  moreDetails() {
    desText.classList.add('show-more');
  }
}

new TodoApp();

class designChange {
  constructor() {
    addTodoBtn.addEventListener('click', this.changeOverflow);
    this.ifEmptyTodo();
  }

  changeOverflow() {
    const allTodo = document.querySelectorAll('.todo');
    const todoContainer = document.querySelector('.main_todos_container');
    const todoHomeWidth = todoContainer.clientWidth;

    if (todoHomeWidth === 336 && allTodo.length > 7) {
      todoContainer.classList.add('change-overflow');
    } else if (todoHomeWidth > 336 && allTodo.length > 16) {
      todoContainer.classList.add('change-overflow');
    }
  }

  // if empty todo

  ifEmptyTodo() {
    if (todoHome.innerHTML === '') {
      todoHome.innerHTML = `<h1 class="empty-msg font-sans text-2xl font-semibold opacity-30  absolute bottom-[22%]">No task</h1>`;
    }
  }
}

new designChange();

document.querySelector('.error').addEventListener('click', () => {
  console.log(todoHome.innerHTML);
});
