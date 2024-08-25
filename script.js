
const userName = prompt("Как вас зовут;");

const pageBackgroundColor = prompt("напишите любой цвет фона;");

const boxBackgroundColor = prompt("напишите любой цвет карточки;");





const boxElement = document.querySelector('.box')
const box = document.querySelector('.box')

const name = document.querySelector('#name')



name.textContent = userName


document.body.style.backgroundColor = pageBackgroundColor;

box.style.backgroundColor = boxBackgroundColor
