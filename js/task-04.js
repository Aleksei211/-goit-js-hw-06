const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;
const decrementClick = () => {
    value.textContent = counterValue -= 1
};
const incremenClick = () => {
    value.textContent = counterValue += 1
};

decrement.addEventListener('click', decrementClick);
increment.addEventListener('click', incremenClick);
