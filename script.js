// start of sidebar selection
const inputTitle = document.getElementById('input-title');
const inputAuthor = document.getElementById('input-author');
const inputPages = document.getElementById('input-pages');
const inputDate = document.getElementById('input-date');
const inputRead = document.getElementById('input-read');
const addBtn = document.getElementById('add-button');
const inputText = document.querySelectorAll('.input__text');
const form = document.querySelector('form');
// end of sidebar selection
//start of header selection
const totalNum = document.getElementById('total-num');
const readNum = document.getElementById('read-num');
const unreadNum = document.getElementById('unread-num');
const deleteAll = document.getElementById('delete-all');
// end of header selection
// start main selection
const settingsDate = document.getElementById('settings__date');
const settingsAscDesc = document.getElementById('settings__ascending-descending');
console.log(settingsAscDesc)
// end of mmain selection
// preventDefault behaviour of form on submit to prevent reload
function handleForm(event) { event.preventDefault() }
form.addEventListener('submit', handleForm)
// input label dynamic adding or removing of css attribute 
inputText.forEach( item => {
  item.addEventListener('input', () => {
    if(item.value !== "") {
      item.nextElementSibling.classList.add('input__text-notnull');
    }
    else {
      item.nextElementSibling.classList.remove('input__text-notnull');
    }
  })
})
// to make sure that inputPages only receives numbers
inputPages.addEventListener('input', checkInputNum)

function checkInputNum() {
  if(isNaN(inputPages.value)) {
    inputPages.nextElementSibling.classList.add('input__label-pages');
  }
  else {
    inputPages.nextElementSibling.classList.remove('input__label-pages');
  }
}

inputRead.addEventListener('click', () => {
  console.log(inputRead.checked)
})

inputDate.addEventListener('input', () => {
  console.log(inputDate.value)
})
//


let myLibrary = [];

function Book(title, author, pages, date, read) {
  this.title = title
  this.author = author
  this.pages = pages 
  this.date = date
  this.read = read
}

function addBookToLibrary() {
  // do stuff here
}

