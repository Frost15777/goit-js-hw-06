const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector(`#ingredients`);
const fragment = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  fragment.appendChild(li)
});

list.appendChild(fragment);