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
