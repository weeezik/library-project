const myLibrary = []
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const submitButton = document.querySelector(".submit-button")
const library = document.querySelector(".library");


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${title} by ${author} is ${pages} pages long. You have ${bookRead(read)}read this book.\n`
  }
}

function bookRead(read) {
  if (read==false)
    return "not "
  else
    return ""
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  library.innerText = "";
  for (book of myLibrary) {
    library.innerText += book.info();
  }
}

submitButton.addEventListener('click', (event) => {
  addBookToLibrary(title.value, author.value, pages.value, read.checked);
});

