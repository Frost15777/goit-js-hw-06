const btnAdd = document.querySelector('button[data-action="decrement"]')
const btnMin = document.querySelector('button[data-action="increment"]')
const counterValueElement = document.querySelector('#value')

btnMin.addEventListener('click', handleMin);
btnAdd.addEventListener('click', handleAdd);

let counterValue = 0;

function handleMin() {
    counterValue += 1;
    counterValueElement.textContent = counterValue
}
function handleAdd() {
    counterValue -= 1;
    counterValueElement.textContent = counterValue
}

