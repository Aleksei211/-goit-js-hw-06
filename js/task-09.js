 function getRandomHexColor() {
   const random =  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
   bgc.textContent = random;
   bodyStyle.style.backgroundColor = random;
 }

const button = document.querySelector('.change-color');
const bodyStyle = document.querySelector('body');
const bgc = document.querySelector('.color')

button.addEventListener('click', getRandomHexColor);
