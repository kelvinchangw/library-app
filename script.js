window.addEventListener('load', function() {
    setTimeout(function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 1);
});


const myLibrary = [];

function Book() {
    
}

function addBookToLibrary() {
    
}

const main = document.getElementById("main");
const beginButton = document.getElementById("begin-btn");

beginButton.addEventListener(("click"), () => {
    main.scrollIntoView({behavior: "smooth"})
});