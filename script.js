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
// window.addEventListener('click', () => {
  //   console.log('input title value: ', inputTitle.value)
//   console.log('input author value: ', inputAuthor.value)
//   console.log('input pages value: ', inputPages.value)
//   console.log('input date value: ', inputDate.value)
// })

let myLibrary = [];

function Book(title, author, pages, date, read) {
  this.title = title
  this.author = author
  this.pages = pages 
  this.date = date
  this.read = read
}
console.log(inputRead.checked)
addBtn.addEventListener('click', addBookToLibrary)
function addBookToLibrary() {
  let buttonAllow = false;
  if(inputTitle.value !== '' && inputAuthor.value !== '' && inputPages.value !== '' && inputDate.value !== '') {
    buttonAllow = true;
    // console.log(buttonAllow)
  }
  if(buttonAllow === true) {
    const book = new Book(`${inputTitle.value}`, `${inputAuthor.value}`, `${inputPages.value}`, `${inputDate.value}`, `${inputRead.checked}`)
    myLibrary.push(book)
    console.log(myLibrary)
    buttonAllow = false;
    empyInputs() 
  }
}
function empyInputs() {
  inputText.forEach( input => {
    input.textContent = ''
    input.value = ''
  })
  inputDate.value = ''
  inputRead.checked = false;
}
window.addEventListener('click', abc); // experimental

function abc() {
  for(let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].title)  // perhaps loop through  the array to check if item exists using .includes(), if not then add 
  }
}



function createCard() {
  const container = document.getElementById('card-container')
  const content = document.createElement('div');
  content.classList.add('card');
  container.appendChild(content);
  content.innerHTML = `              
                        <span class="card__icon"><img src="./icon/close-bold-svgrepo-com.svg" alt="close-icon"></span>
                        <h2 class="card__title">How to Win Friends and Influence People</h2>
                        <h3 class="card__author">Author: <span class="card__author-span">Dale Carnegie</span></h3>
                        <h3 class="card__pages">Number of pages: <span class="card__pages-span">291</span> </h3>
                        <h3 class="card__publish-date">originally published: <span class="card__publish-date-span">01/10/1936</span></h3>
                        <button class="card__button">Read</button>
                      `
}