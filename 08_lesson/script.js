'use strict';

let box = document.querySelector('.box'),
    btn = document.querySelectorAll('button');

// let width = box.clientWidth,
//     height = box.clientHeight;
// let width = box.offsetWidth,
//     height = box.offsetHeight;
let width = box.scrollWidth,
    height = box.scrollHeight;

console.log(width);
console.log(height);

btn[0].textContent = 'UnScroll';
let a = 0;
btn[0].addEventListener('click', () => {
    if (!a && (a = getComputedStyle(box).height)) {
        box.style.height = box.scrollHeight + 'px';
        btn[0].textContent = 'Scroll';
    }
    else {
        box.style.height = a;
        a = 0;
        btn[0].textContent = 'Un' + btn[0].textContent;
    }
});

btn[1].addEventListener('click', () => {
    console.log(box.scrollTop);
});

btn[2].addEventListener('click', () => {
    box.scrollTop = 0;
});
