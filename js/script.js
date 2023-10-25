// Name Field:
const name = document.querySelector('#name').focus();

// Job Role Section:
let jobRoleText = document.querySelector('#other-job-role').style.display = "none";

let jobRole = document.querySelector('#title');
jobRole.addEventListener('change', (e) => {
    if (e.target.value == 'other') {
        document.querySelector('#other-job-role').style.display = 'block';
     } else {
        document.querySelector('#other-job-role').style.display = 'none';
     }
});

// T-Shirt Info Section:
let color = document.querySelector('#color').disabled = true;
let designElement = document.querySelector('#design');
let colorOptions = document.querySelectorAll("option[data-theme]");

designElement.addEventListener('change', () => {
document.querySelector('#color').disabled = false;
    
    for(let i=0; i < colorOptions.length; i++){
        if(designElement.value !== colorOptions[i].getAttribute("data-theme")){
            colorOptions[i].hidden = true;
            colorOptions[i].disabled = true;
        } else {
            colorOptions[i].hidden = false;
            colorOptions[i].disabled = false;
        }
    }
});

// Activities Section:
const activities = document.querySelector("#activities");
let activity = document.querySelectorAll("input[type='checkbox']")
let totalCost = document.querySelector("#activities-cost");
let totalPrice = 0;

 activities.addEventListener('change', (event) => {
        if(event.target.checked === true) {
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
    }
);

// Payment Info Section:
const payment = document.querySelector("#payment");
let creditCard = document.querySelector("#credit-card");
let paypal = document.querySelector("#paypal");
let bitcoin = document.querySelector("#bitcoin");
paypal.hidden = true;
bitcoin.hidden = true;
payment.children[1].setAttribute('selected', '');
console.log(payment.children);

payment.addEventListener('change', (event) => {
        if(event.target.value === payment.children[1].getAttribute("value")){
            creditCard.style.display = 'block';
            paypal.style.display = 'none';
            bitcoin.style.display = 'none';
        }
        if(event.target.value === payment.children[2].getAttribute("value")){
            paypal.style.display = 'block';
            creditCard.style.display = 'none';
            bitcoin.style.display = 'none';
        }
        if(event.target.value === payment.children[3].getAttribute("value")){
            bitcoin.style.display = 'block';
            paypal.style.display = 'none';
            creditCard.style.display = 'none';
        }
});





