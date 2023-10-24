const name = document.querySelector('#name').focus();
let jobRoleText = document.querySelector('#other-job-role').style.display = "none";

let jobRole = document.querySelector('#title');
jobRole.addEventListener('change', (e) => {
    if (e.target.value == 'other') {
        document.querySelector('#other-job-role').style.display = 'block';
     } else {
        document.querySelector('#other-job-role').style.display = 'none';
     }
})
