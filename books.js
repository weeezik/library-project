const myLibrary = []
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

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

function addCardDiv(bookObj) {
  const bookCard = document.createElement("div");
  bookCard.className = "card"
  const cardContent = document.createTextNode(bookObj.info());
  bookCard.appendChild(cardContent);
  const theDialog = document.querySelector("dialog");
  document.body.insertBefore(bookCard, theDialog);
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  for (book of myLibrary) {
    addCardDiv(book)
  }
}


// DIALOG LOGIC

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${favDialog.returnValue}`; // Have to check for "default" rather than empty string
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(title.value); // Have to send the select box value here.
  addBookToLibrary(title.value, author.value, pages.value, read.checked);
});

