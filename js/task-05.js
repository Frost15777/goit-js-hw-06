const input = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

input.addEventListener('input', handlePut);

function handlePut(event) {
    if (event.currentTarget.value.trim() === '') {
        userName.textContent = 'Anonymous';
    } else {
        userName.textContent = event.currentTarget.value
    }
}