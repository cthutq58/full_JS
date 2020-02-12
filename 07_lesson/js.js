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

function myAmimation () {
    let posX = 0, posY = 0,
        // start = Date.now();
        cnt = 0;

    let t = setInterval(function(elem) {
        // let timePassed = Date.now() - start;
        // if (timePassed > 12000) {
        if (++cnt > 1200) {
            clearInterval(t);
            return;
        }
        move(elem);
    }, 10, box);

    function move(elem, x = 300) {
        if(posX >= 0 && posX < x && posY <= 0) {
            posX++;
        } else if(posX >= x && posY < x && posY >= 0) {
            posY++;
        } else if(posX > 0 && posX <= x && posY >= x) {
            posX--;
        } else if(posX <= 0 && posY <= x && posY > 0) {
            posY--;
        }
        elem.style.left = posX +'px';
        elem.style.top = posY +'px';
    } 
}   

btn.addEventListener('click', myAmimation);


