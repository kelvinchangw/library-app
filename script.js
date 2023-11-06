// Smooth scroll back to top of page on load of page
window.addEventListener("load", function() {
    setTimeout(function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 1);
});


const myLibrary = [];

function Book() {
    
}

function addBookToLibrary() {
    
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
const addNewBookBtn = document.getElementById("add-book-button");
addNewBookBtn.addEventListener("click", checkForm);

// Smooth scroll to main container that has sidebar and book grid
const main = document.getElementById("main");
const beginButton = document.getElementById("begin-btn");

beginButton.addEventListener(("click"), () => {
    main.scrollIntoView({behavior: "smooth"})
});