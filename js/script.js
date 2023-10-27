// Name Field:
const nameInput = document.getElementById('name');
nameInput.focus();

// Job Role Section:
let jobRoleText = document.querySelector('#other-job-role').style.display = "none";

const jobRole = document.querySelector('#title');
jobRole.addEventListener('change', (e) => {
    if (e.target.value == 'other') {
        document.querySelector('#other-job-role').style.display = 'block';
    } else {
        document.querySelector('#other-job-role').style.display = 'none';
    }
});

// T-Shirt Info Section:
let color = document.querySelector('#color');
color.disabled = true;
let designElement = document.querySelector('#design');
let colorOptions = color.children;

designElement.addEventListener('change', (e) => {
    document.querySelector('#color').disabled = false;

    for (let i = 0; i < colorOptions.length; i++) {
        let optionValue = e.target.value;
        let dataTheme = colorOptions[i].getAttribute("data-theme");
        if (optionValue === dataTheme) {
            colorOptions[i].hidden = false;
            colorOptions[i].setAttribute("selected", " ");
        } else {
            colorOptions[i].hidden = true;
            colorOptions[i].removeAttribute("selected");
        }
    }
});

// Activities Section:
const activities = document.querySelector("#activities");
let activity = document.querySelectorAll("input[type='checkbox']")
let totalCost = document.querySelector("#activities-cost");
let totalPrice = 0;

activities.addEventListener('change', (event) => {
    if (event.target.checked === true) {
        let dataCost = event.target.getAttribute("data-cost");
        dataCost = +dataCost; // transform string to a number.
        totalPrice += dataCost;
        totalCost.innerHTML = `Total: $${totalPrice}`
    }
    if (event.target.checked === false) {
        let dataCost = event.target.getAttribute("data-cost");
        dataCost = +dataCost; // transform string to a number.
        totalPrice -= dataCost;
        totalCost.innerHTML = `Total: $${totalPrice}`
    }
});

// Payment Info Section:
const payment = document.querySelector("#payment");
const creditCard = document.querySelector("#credit-card");
const paypal = document.querySelector("#paypal");
const bitcoin = document.querySelector("#bitcoin");
paypal.hidden = true;
bitcoin.hidden = true;
payment.children[1].setAttribute('selected', '');

payment.addEventListener('change', (event) => {
    if (event.target.value === payment.children[1].getAttribute("value")) {
        creditCard.style.display = 'block';
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
    }
    if (event.target.value === payment.children[2].getAttribute("value")) {
        paypal.style.display = 'block';
        creditCard.style.display = 'none';
        bitcoin.style.display = 'none';
    }
    if (event.target.value === payment.children[3].getAttribute("value")) {
        bitcoin.style.display = 'block';
        paypal.style.display = 'none';
        creditCard.style.display = 'none';
    }
});

// Form validation & Visual Validation Errors::
const form = document.querySelector('form');
const emailInput = document.querySelector("#email");
const cardInput = document.querySelector("#cc-num");
const zipInput = document.querySelector("#zip");
const cvvInput = document.querySelector("#cvv");
const isValidName = () => /^[a-zA-Z ]+$/.test(nameInput.value);
const isValidEmail = () => /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput.value);
const isValidRegistration = () => {
    for (i = 0; i < activity.length; i++) {
        if (activity[i].checked)
            return true;
    } return false;
};
const isValidCard = () => (payment.value === "credit-card") && /^\d{13,16}[^-, " "]$/i.test(cardInput.value);
const isValidZip = () => (payment.value === "credit-card") && /^\d{5}$/i.test(zipInput.value);
const isValidInput = () => (payment.value === "credit-card") && /^\d{3}$/i.test(cvvInput.value);

form.addEventListener("submit", (e) => {
    if (isValidName()) {
        nameInput.parentElement.classList.add("valid");
        nameInput.parentElement.classList.remove("not-valid");
        nameInput.parentElement.lastElementChild.style.display = "none";
    } else {
        e.preventDefault();
        nameInput.parentElement.classList.add("not-valid");
        nameInput.parentElement.classList.remove("valid");
        nameInput.parentElement.lastElementChild.style.display = "block";
    }

    if (isValidEmail()) {
        emailInput.parentElement.classList.add("valid");
        emailInput.parentElement.classList.remove("not-valid");
        emailInput.parentElement.lastElementChild.style.display = "none";
    } else {
        e.preventDefault();
        emailInput.parentElement.classList.add("not-valid");
        emailInput.parentElement.classList.remove("valid");
        emailInput.parentElement.lastElementChild.style.display = "block";
    }

    if (isValidRegistration()) {
        activities.parentElement.classList.add("valid");
        activities.parentElement.classList.remove("not-valid");
        activities.parentElement.lastElementChild.style.display = "none";
    } else {
        e.preventDefault();
        activities.parentElement.classList.add("not-valid");
        activities.parentElement.classList.remove("valid");
        activities.parentElement.lastElementChild.style.display = "block";
    }

    if (isValidCard()) {
        cardInput.parentElement.classList.add("valid");
        cardInput.parentElement.classList.remove("not-valid");
        cardInput.parentElement.lastElementChild.style.display = "none";
    } else {
        e.preventDefault();
        cardInput.parentElement.classList.add("not-valid");
        cardInput.parentElement.classList.remove("valid");
        cardInput.parentElement.lastElementChild.style.display = "block";
    }

    if (isValidZip()) {
        zipInput.parentElement.classList.add("valid");
        zipInput.parentElement.classList.remove("not-valid");
        zipInput.parentElement.lastElementChild.style.display = "none";
    } else {
        e.preventDefault();
        zipInput.parentElement.classList.add("not-valid");
        zipInput.parentElement.classList.remove("valid");
        zipInput.parentElement.lastElementChild.style.display = "block";
    }

    if (isValidInput()) {
        cvvInput.parentElement.classList.add("valid");
        cvvInput.parentElement.classList.remove("not-valid");
        cvvInput.parentElement.lastElementChild.style.display = "none";
    } else {
        e.preventDefault();
        cvvInput.parentElement.classList.add("not-valid");
        cvvInput.parentElement.classList.remove("valid");
        cvvInput.parentElement.lastElementChild.style.display = "block";
    }
});

// The Activities Section:
const boxInput = document.querySelectorAll("input[type=checkbox]");

for (let i = 0; i < boxInput.length; i++) {
    boxInput[i].addEventListener('focus', () => {
        let addFocus = boxInput[i].parentElement.classList;
        addFocus.add("focus");
    });
    boxInput[i].addEventListener('blur', () => {
        let removeFocus = boxInput[i].parentElement.classList;
        removeFocus.remove("focus");
    });
};