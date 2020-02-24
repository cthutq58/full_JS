'use strict';

let box = document.querySelector('.box'),
    btn = document.querySelectorAll('button');

let clientWidth = box.clientWidth,
    clientHeight = box.clientHeight,
    offsetWidth = box.offsetWidth,
    offsetHeight = box.offsetHeight,
    scrollWidth = box.scrollWidth,
    scrollHeight = box.scrollHeight;

console.log(clientWidth + " " + offsetWidth + ' ' + scrollWidth);
console.log(clientHeight + " " + offsetHeight + ' ' + scrollHeight);

btn[0].textContent = 'visible';
btn[1].textContent = 'getScrollTop';
btn[2].textContent = 'gotoTop';

let a = false,
    b = (box.offsetHeight + -getComputedStyle(box).padding.slice(0,-2)*2)+ 'px';

btn[0].addEventListener('click', () => {
    if ((a = !a)) {
        box.style.height = box.scrollHeight + 'px';
        box.style.overflow = 'visible';
        btn[0].textContent = 'scroll';
    }
    else {
        box.style.height = b;
        btn[0].textContent = 'visible';
        box.style.overflow = 'scroll';
    }
});

btn[1].addEventListener('click', () => {
    btn[1].textContent = 'scrollTop: ' + box.scrollTop;
});

btn[2].addEventListener('click', (e) => {
    box.scrollTop = 0;
    btn[1].textContent = 'scrollTop: ' + 0;
    console.log(e.type);
});
