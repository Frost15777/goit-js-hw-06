const input = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

input.addEventListener('input', handlePut);

function handlePut(event) {
    userName.textContent = event.currentTarget.value
}