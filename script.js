// Smooth scroll back to top of page on load of page
window.addEventListener("load", function() {
    setTimeout(function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 1);
});

// Library to store Book objects
const myLibrary = [];

// Constructor for creating a new Book object
function Book(title, author, pageCount, read = false) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
}

// DOM Elements
const titleInput = document.getElementById("book-title");
const authorInput = document.getElementById("book-author");
const pageCountInput = document.getElementById("page-count");
const booksGrid = document.querySelector(".books-grid");
const readCheckbox = document.getElementById("read-checkbox");

function addBookToLibrary() {
    const newBook = new Book(titleInput.value, authorInput.value, pageCountInput.value, readCheckbox.checked);

    myLibrary.push(newBook);

    displayBooks();

    eraseForm();
}

function displayBooks() {
    booksGrid.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        if (book.read) {
            bookCard.classList.add('read-complete');
        } else {
            bookCard.classList.remove('read-complete');
        }
          

        bookCard.innerHTML = `
            <p class="book-title">${book.title}</p>
            <br>
            <div class="book-bottom">
                <div class="book-info">
                    <p class="book-author">${book.author}</p>
                    <p class="book-pages">${book.pageCount} Pages</p>
                </div>
                <div class="read-status">
                    <button class="read-button">COMPLETE</button>
                </div>
            </div>
        `;

        booksGrid.appendChild(bookCard);
    })
}

// Clears form input fields
function eraseForm() {
    titleInput.value = "";
    authorInput.value = "";
    pageCountInput.value = "";
    readCheckbox.checked = false;
}

const newBookForm = document.getElementsByClassName("add-book-form");

// Checks if form is valid before adding book to library
function checkForm() {
    const inputs = document.querySelectorAll("input");
    let allValid = true;

    for(let input of inputs) {
        if(input.value === "") {
            input.classList.add("invalid");
            allValid = false;
        }
        else {
            input.classList.remove("invalid");
        }
    }

    if(allValid) addBookToLibrary();
}

// Listens for add new book button
const addNewBookBtn = document.getElementById("add-book-btn");
addNewBookBtn.addEventListener("click", checkForm);

// Smooth scroll to main container that has sidebar and book grid
const main = document.getElementById("main");
const beginButton = document.getElementById("begin-btn");

beginButton.addEventListener(("click"), () => {
    main.scrollIntoView({behavior: "smooth"})
});



// Read status for each card
const bookCards = document.querySelectorAll(".book-card");

function changeReadStatus() {
    this.closest(".book-card").classList.toggle("read-complete");
}

booksGrid.addEventListener("click", function(event) {
    if(event.target && event.target.matches(".read-button")) {
        const bookCard = event.target.closest(".book-card");
        const bookIndex = Array.from(booksGrid.children).indexOf(bookCard);
        myLibrary[bookIndex].read = !myLibrary[bookIndex].read;
        
        bookCard.classList.toggle("read-complete", myLibrary[bookIndex].read);
    }
});