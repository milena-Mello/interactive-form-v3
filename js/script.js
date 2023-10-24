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
designElement.addEventListener('change', (e) {
    color = document.querySelector('#color').disabled = false;
});

