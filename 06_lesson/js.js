'use strict';

let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].onclick = () => alert('You press the 1st button!');
// btn[0].onclick = () => alert('You have again pressed the 1st button!');

// btn[0].addEventListener('click', () => 
//     alert('You press the 1st button!'));

// btn[0].addEventListener('click', () => 
//     alert('You have again pressed the 1st button!'));

// btn[0].addEventListener('mouseenter', () => 
//     alert('You are over the 1st button!'));
const handlerBtn0 = event => {
    console.log('the 1st button');
    let target = event.target;
    // target.style.display = "none";
    console.log('Here has been the ' + event.type + ' event on the ' + target);
};
btn[0].addEventListener('click', handlerBtn0);

wrap.style.backgroundColor = "red";
const handlerWrap = event => {
    console.log('wrapper of the 1st button');
    let target = event.target;
    console.log('Here has been the ' + event.type + ' event on the ' + target);
};
wrap.addEventListener('click', handlerWrap);

const handlerLink = event => {
    let target = event.target;
    event.preventDefault();
    console.log('link');
    console.log('Here has been the ' + event.type + ' event on the ' + target);
};
link.addEventListener('click', handlerLink);

const handlerBtn = () => console.log("Off!");
btn.forEach(item => item.addEventListener('mouseleave', handlerBtn));
