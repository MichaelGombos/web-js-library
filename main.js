//User can enter in name author pages and if they completed book
//I add this information to an object
//This object is placed into an array of books
//Once an object is placed or removed.. Display the library

//Getting dom elements
const domLibrary = document.getElementById("library-array");
//Library form
const libraryForm = document.getElementById("library-form");
const bookNameInput = document.getElementById("book");
const bookAuthorInput = document.getElementById("author");
const bookPagesInput = document.getElementById("pages");
const bookReadInput = document.getElementById("read");

const primarySubmitButton = document.getElementById("primary-submit");
primarySubmitButton.addEventListener("click", (e) => {
  let domBook = new Book(
    bookNameInput.value,
    bookAuthorInput.value,
    bookPagesInput.value,
    bookReadInput.value
  );

  addToLibrary(domBook);
});

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addToLibrary(book) {
  const bookElement = document.createElement("div");
  bookElement.classList.add("mt-4");
  bookElement.classList.add("col-8");
  bookElement.classList.add("text-white");
  bookElement.classList.add("book");

  bookElement.innerHTML = `
  <div class="row align-items-start">
  <div class="col-4 my-auto">
    <p class="my-auto book-name">${book.name}</p>
  </div>
  <div class="col-3 my-auto">
    <p class="my-auto book-author">${book.author}</p>
  </div>
  <div class="col-1 my-auto">
    <p class="my-auto book-pages">${book.pages}</p>
  </div>
  <div class="col-1 my-auto">
    <p class="my-auto book-read">${book.read}</p>
  </div>
  <div class="col-2 offset-1 btn btn-outline-danger remove-button">Remove</div>
</div>
  `;

  const removeButton = bookElement.getElementsByClassName("remove-button");
  console.log(Array.from(removeButton));

  removeButton[0].addEventListener("click", (e) =>
    domLibrary.removeChild(bookElement)
  );

  domLibrary.appendChild(bookElement);
}

function removeFromLibrary() {}
