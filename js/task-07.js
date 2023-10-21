const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', handleUse);

function handleUse(event) {
    span.style.fontSize = input.value + 'px';
}