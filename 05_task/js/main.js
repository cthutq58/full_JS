'use strict'

let btnStrt = document.getElementById('start'),
    resVal = document.querySelectorAll('div[class$="-value"]'),
    inEx = document.querySelectorAll('.expenses-item'),
    inOptEx = document.querySelectorAll('.optionalexpenses-item'),
    // [btnEx, btnOptEx, btnCnt]] = document.getElementsByTagName('button');
    [btnEx, btnOptEx, btnCnt] = document.querySelectorAll('button[class$="btn"]'),
    income = document.querySelector('#income'),
    cbx = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    prcnt = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

console.log(btnStrt);
console.log(resVal);
console.log(inEx);
console.log(btnEx, btnOptEx, btnCnt);
console.log(inOptEx);
console.log(income);
console.log(cbx);
console.log(sum, prcnt);
console.log(year, month, day);
