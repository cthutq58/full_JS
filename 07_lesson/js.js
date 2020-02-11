'use strict';

let sayHi = (i = 1) => console.log(`Hi World ${i}!`);

/* delay invokee === setTimeout */
let timeID = setTimeout(sayHi, 3000);
// clearTimeout(timeID);

/* interval setTimeout == setInterval */
let interID = setInterval(sayHi, 3000, 2);
clearTimeout(interID);

/* recurseve setTimeout */
let timerID = setTimeout(function log(i = 0, x = 5) {
    console.log(`Hello ${i++}`);
    if (i > x) return;
    setTimeout(log, 1000, i, x);
});

let btn = document.querySelector('.btn');

function myAmimation () {
    let box = document.querySelector('.box');
    let posX = 0, posY = 0; 

    let t = setInterval(move, 10);
  
    function move(x = 300) {
        if(posX >= 0 && posX < x && posY <= 0) {
            posX++;
        } else if(posX >= x && posY < x && posY >= 0) {
            posY++;
        } else if(posX > 0 && posX <= x && posY >= x) {
            posX--;
        } else if(posX <= 0 && posY <= x && posY > 0) {
            posY--;
        }
        box.style.left = posX +'px';
        box.style.top = posY +'px';
    }    
}    

btn.addEventListener('click', myAmimation);


