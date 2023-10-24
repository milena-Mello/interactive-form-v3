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




