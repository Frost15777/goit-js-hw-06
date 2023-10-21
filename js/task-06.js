const input = document.querySelector('#validation-input');

input.addEventListener("blur", handleFocus);

function handleFocus(event) {
    const requiredCount = parseInt(input.getAttribute('data-length'));
    const inputValue = input.value;

    if (inputValue.length === requiredCount) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}