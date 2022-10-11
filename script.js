// start of sidebar selection
const inputTitle = document.getElementById('input-title');
const inputAuthor = document.getElementById('input-author');
const inputPages = document.getElementById('input-pages');
const inputDate = document.getElementById('input-date');
const inputRead = document.getElementById('input-read');
const addBtn = document.getElementById('add-button');
const inputText = document.querySelectorAll('.input__text')
// end of sidebar selection
//start of header selection
const totalNum = document.getElementById('total-num');
const readNum = document.getElementById('read-num');
const unreadNum = document.getElementById('unread-num');
const deleteAll = document.getElementById('delete-all');
// end of header selection
// start main selection

// end of mmain selection


// input label style
inputText.forEach( item => {
  item.addEventListener('input', () => {
    if(item.value !== "") {
      item.nextElementSibling.classList.add('input__text-notnull')
    }
    else {
      item.nextElementSibling.classList.remove('input__text-notnull')
    }
  })
})


let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

