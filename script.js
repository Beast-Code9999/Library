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

let myLibrary = [
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K Rowling',
    pages: '317',
    date: '1999-07-19',
    read: 'read',

  }
];

function Book(title, author, pages, date, read) {
  this.title = title
  this.author = author
  this.pages = pages 
  this.date = date
  this.read = read
}

function changeInputReadValue() {
  if(inputRead.checked === true) {
    return 'read'
  }
  else {
    return 'not yet'
  }
}

addBtn.addEventListener('click', addBookToLibrary)
function addBookToLibrary() {
  let buttonAllow = false;
  if(inputTitle.value !== '' && inputAuthor.value !== '' && inputPages.value !== '' && inputDate.value !== '') {
    buttonAllow = true;
    // console.log(buttonAllow)
  }
  if(buttonAllow === true) {
    const book = new Book(`${inputTitle.value}`, `${inputAuthor.value}`, `${inputPages.value}`, `${inputDate.value}`, `${changeInputReadValue()}`)
    myLibrary.push(book)
    console.log(myLibrary)
    eraseContainerContent()
    loopAndCreateCard()
    buttonAllow = false;
    empyInputs() 
  }
}
function empyInputs() {
  inputText.forEach( input => {
    input.textContent = ''
    input.value = ''
    input.nextElementSibling.classList.remove('input__text-notnull');
  })
  inputDate.value = ''
  inputRead.checked = false;
}

function loopAndCreateCard() {
  for(let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].title)  
    createCard(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].date, myLibrary[i].read)
  }
}

const container = document.getElementById('card-container')

function eraseContainerContent() {
  container.innerHTML = ''
}

function createCard(title, author, pages, date, read) {
  const content = document.createElement('div');
  content.classList.add('card');
  container.appendChild(content);
  content.innerHTML = `              
                        <span class="card__icon"><img src="./icon/close-bold-svgrepo-com.svg" alt="close-icon"></span>
                        <h2 class="card__title">${title}</h2>
                        <h3 class="card__author">Author: <span class="card__author-span">${author}</span></h3>
                        <h3 class="card__pages">Number of pages: <span class="card__pages-span">${pages}</span> </h3>
                        <h3 class="card__publish-date">originally published: <span class="card__publish-date-span">${date}</span></h3>
                        <button class="card__button">${read}</button>
                      `
}