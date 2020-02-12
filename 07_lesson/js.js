'use strict';

let sayHi = (i = 1) => console.log(`Hi World ${i}!`);

/* delay invokee === setTimeout */
let timeID = setTimeout(sayHi, 3000);
// clearTimeout(timeID);

/* interval delay invokee == setInterval */
let interID = setInterval(sayHi, 3000, 2);
// clearInterval(interID);
clearTimeout(interID);

/* recurseve setTimeout */
let timerID = setTimeout(function log(i = 0, x = 5) {
    console.log(`Hello ${i++}`);
    if (i > x) {
        clearTimeout(timerID);
        return;
    }
    setTimeout(log, 1000, i, x);
});

let btn = document.querySelector('.btn'),
    box = document.querySelector('.box');

function myAmimation(msec = 17, cycles = 2) {
    let posX = 0, posY = 0, size = 300,
        // start = Date.now();
        cnt = 0;

    let timer = setInterval(fnInterval, msec);

    function fnInterval(fn = movePerimeter) {
        // let timePassed = Date.now() - start;
        // if (timePassed > 12000) {
        if (++cnt > 4 * size * cycles) {
            clearInterval(timer);
            return;
        }
        fn();
    }

    function movePerimeter(elem = box, x = size) {
        if (posX >= 0 && posX < x && posY <= 0) {
            posX++;
        } else if (posX >= x && posY < x && posY >= 0) {
            posY++;
        } else if (posX > 0 && posX <= x && posY >= x) {
            posX--;
        } else if (posX <= 0 && posY <= x && posY > 0) {
            posY--;
        }
        elem.style.left = posX + 'px';
        elem.style.top = posY + 'px';
    }
}

btn.addEventListener('click', myAmimation);

/* further => event deligation  */

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', event => {
    if (event.target && event.target.classList.contains('first'))
        console.log("Hey, first!");
});

btnBlock.addEventListener('click', event => {
    if (event.target && event.target.matches('button.second')) // like in Google
        console.log("Hey, second!");
});

btnBlock.addEventListener('mouseover', event => {
    if (event.target && event.target.tagName == 'BUTTON')
        console.log("Hey, mouseover!");
});