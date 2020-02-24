'use strict';

let box = document.querySelector('.box'),
    btn = document.querySelectorAll('button');

let clientWidth = box.clientWidth,
    clientHeight = box.clientHeight,
    offsetWidth = box.offsetWidth,
    offsetHeight = box.offsetHeight,
    scrollWidth = box.scrollWidth,
    scrollHeight = box.scrollHeight,
    docElem = document.documentElement;

console.log(clientWidth + " " + offsetWidth + ' ' + scrollWidth);
console.log(clientHeight + " " + offsetHeight + ' ' + scrollHeight);
console.log(box.getBoundingClientRect().left.toFixed());
console.log(docElem.clientWidth);
console.log(docElem.clientHeight);
console.log(docElem.scrollTop);

btn[0].textContent = 'visible';
btn[1].textContent = 'getScrollTop';
btn[2].textContent = 'textTop';
btn[3].textContent = 'Width';
btn[4].textContent = 'Height';
btn[5].textContent = 'Top';
btn[6].textContent = 'scrollBy200';
btn[7].textContent = 'scrollTo200';

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

btn[2].addEventListener('click', () => {
    box.scrollTop = 0;
    btn[1].textContent = 'scrollTop: ' + 0;
});

btn[3].addEventListener('click', () => {
    btn[3].textContent = 'Width: ' + docElem.clientWidth;
});

btn[4].addEventListener('click', () => {
    btn[4].textContent = 'Height: ' + docElem.clientHeight;
});

btn[5].addEventListener('click', () => {
    docElem.scrollTop = 0;
});

btn[6].addEventListener('click', () => {
    scrollBy(0, 200);
});

btn[7].addEventListener('click', () => {
    scrollTo(0, 200);
});
