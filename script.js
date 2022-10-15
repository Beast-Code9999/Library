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
const deleteAll = document.getElementById('delete-all');
// end of header selection
// start main selection
const settingsDate = document.getElementById('settings__date');
const settingsAscDesc = document.getElementById('settings__ascending-descending');
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
// where all books are going to be pushed into
let myLibrary = [
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K Rowling',
    pages: '317',
    date: '1999-07-19',
    read: 'read',
  }
];
// Constructor function
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
    return 'not read'
  }
}
// push book to button on addBtn click
addBtn.addEventListener('click', addBookToLibrary)
function addBookToLibrary() {
  let buttonAllow = false;
  if(inputTitle.value !== '' && inputAuthor.value !== '' && inputPages.value !== '' && inputDate.value !== '') {
    buttonAllow = true;
  }
  if(buttonAllow === true) {
    const book = new Book(`${inputTitle.value}`, `${inputAuthor.value}`, `${inputPages.value}`, `${inputDate.value}`, `${changeInputReadValue()}`)
    myLibrary.push(book)
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
    createCard(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].date, myLibrary[i].read, i)
  }
}
// create and erase card from container
const container = document.getElementById('card-container')
function eraseContainerContent() {
  container.innerHTML = ''
}

function createCard(title, author, pages, date, read, counter) {
  const content = document.createElement('div');
  content.classList.add('card');
  container.appendChild(content);
  content.innerHTML = `              
                        <span class="card__icon" data-counter="${counter}" id="delete-span"><img data-counter="${counter}" id="delete-img" src="./icon/close-bold-svgrepo-com.svg" alt="close-icon"></span>
                        <h2 class="card__title">${title}</h2>
                        <h3 class="card__author">Author: <span class="card__author-span">${author}</span></h3>
                        <h3 class="card__pages">Number of pages: <span class="card__pages-span">${pages}</span> </h3>
                        <h3 class="card__publish-date">Originally published: <span class="card__publish-date-span">${date}</span></h3>
                        <button class="card__button" id="status-btn">${read}</button>
                      `
  if( read === 'read' ) {
    content.classList.add('card--read');
    content.lastElementChild.classList.add('card__button--read')
  }
  else if( read === 'not read' ) {
    content.classList.add('card--unread');
    content.lastElementChild.classList.add('card__button--unread')
  }
}
function addReadCSS() {
  
}
// change read status
window.addEventListener("click", (e) => {
  // console.log(e.target)
  const target = e.target;
  toggleReadStatus(target);
  deleteCard( target )
  countBooks()
})
// toggle read or unread on card
function toggleReadStatus(target) {
  if( target.id === 'status-btn' ) {
    for(let i = 0; i < myLibrary.length; i++) {
      if(myLibrary[i].title === target.parentNode.childNodes[3].textContent) {
        if( myLibrary[i].read === 'read' ) {
          target.classList.remove('card__button--read');
          target.classList.add('card__button--unread');
          target.textContent = 'not read'
          target.parentNode.classList.remove('card--read')
          target.parentNode.classList.add('card--unread')
          myLibrary[i].read = 'not read';
        }
        else if( myLibrary[i].read !== 'read' ) {
          target.classList.remove('card__button--unread');
          target.classList.add('card__button--read');
          target.textContent = 'read'
          target.parentNode.classList.remove('card--unread')
          target.parentNode.classList.add('card--read')
          myLibrary[i].read = 'read'; 
        }
      }
    }
  }
}
// window.addEventListener( 'click', (e) => {
//   console.log( e.target.dataset.counter )
//   console.log(myLibrary)
// })
// delete individual card
function deleteCard( target ) {
  if( target.id === 'delete-img' || target.id === 'delete-span' ) {
    myLibrary.splice(Number(target.dataset.counter), 1)
    eraseContainerContent()
    loopAndCreateCard()
  }
}
// delete all of the cards
deleteAll.addEventListener('click', deleteAllCards)
function deleteAllCards() {
  myLibrary = []
  eraseContainerContent()
}
// count how many books are there
function countBooks() {
  const totalNum = document.getElementById('total-num');
  const readNum = document.getElementById('read-num');
  const unreadNum = document.getElementById('unread-num');
  totalNum.textContent = myLibrary.length;
  let readBooksCounter = 0;
  let unreadBooksCounter = 0;
  readNum.textContent = 0;
  unreadNum.textContent = 0;
  for( let i = 0; i < myLibrary.length; i += 1 ) {
    if( myLibrary[i].read === 'read' ) {
      readBooksCounter += 1;
      readNum.textContent = readBooksCounter;
    } 
    else if( myLibrary[i].read !== 'read' ) {
      unreadBooksCounter += 1;
      unreadNum.textContent = unreadBooksCounter;
    }
  }
}
