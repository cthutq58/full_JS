'use strict'

let box = document.getElementById('box'),
  btn = document.getElementsByTagName('button'),
  circle = document.getElementsByClassName('circle'),
  heart = document.querySelectorAll('.heart'),
  hb = document.querySelectorAll('.heart:before'),
  ha = document.querySelectorAll('.heart:after'),
  oneHeart = document.querySelector('.heart'),
  wrapper = document.querySelector('.wrapper');

/* console.log(box);
console.log(btn);
console.log(btn[0]);
console.log(circle);
console.log(circle[2]);
console.log(heart);
console.log(heart[1]);
console.log(oneHeart); */

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

const colorArr = ['red', 'yellow', 'green'];

for (const i in circle)
  if (!isNaN(+i)) circle[i].style.backgroundColor = colorArr[i];

heart.forEach((item, i) => item.style.background = colorArr[i]);

let div = document.createElement('div'),
  text = document.createTextNode('I am here!'); // ?????

div.classList.add('grey');

// document.body.appendChild(div);
// wrapper.appendChild(div);

// div.innerHTML = '<h1>Hi!</h1>';
div.textContent = '<h1>Hi!</h1>';

document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[0]);

document.body.replaceChild(btn[1], circle[1]);

console.log(div);