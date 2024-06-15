let nameElem = document.querySelectorAll("input")[0];
let cardNumberElem = document.querySelectorAll("input")[1];
let monthElem = document.querySelectorAll("input")[2];
let yearElem = document.querySelectorAll("input")[3];

// Get the corresponding elements in the card
let nameDisplay = document.querySelector(".left-para p");
let cardNumDisplay = document.querySelector(".card-number");
let monthDisplay = document.querySelector(".month");
let yearDisplay = document.querySelector(".year");

let error = document.querySelector(".number-format-error");
let alphaError = document.querySelector(".number-format-error.username");

nameElem.addEventListener("input", function(e) {
    let store = e.target.value;
    if (store.trim() === '') {
        alphaError.style.display = "block";
    } else {
        alphaError.style.display = "none";
        nameDisplay.textContent = store.toUpperCase();
        localStorage.setItem('name', store.toUpperCase());
    }
});

cardNumberElem.addEventListener("input", function(e) {
    let store = e.target.value;

    // Check for alphabet characters
    if (/[^0-9\s]/.test(store)) {
        error.style.display = "block";
    } else {
        error.style.display = "none";
        cardNumDisplay.textContent = store;
    }

    e.target.value = store.replace(/\s/g, "").replace(/(.{4})/g, "$1 ").trim();

    if (store.length === 19) {
        cardNumberElem.disabled = true;
    }
    localStorage.setItem('number', store)
});

monthElem.addEventListener("input", function(e) {
    let store = e.target.value;
    monthDisplay.textContent = store.padStart(2, '0'); // Ensure month is always two digits
    localStorage.setItem('month', store.padStart(2, '0'));
});

yearElem.addEventListener("input", function(e) {
    let store = e.target.value;
    yearDisplay.textContent = store;
    localStorage.setItem('year', store);
});

const confirm = () => {
    window.location.href = "afterindex.html";
};

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    confirm();
});

localStorage.clear
