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

// Smooth scroll to main container that has sidebar and book grid
const main = document.getElementById("main");
const beginButton = document.getElementById("begin-btn");

beginButton.addEventListener(("click"), () => {
    main.scrollIntoView({behavior: "smooth"})
});