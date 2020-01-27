'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

// Ctrl+K Ctrl+C <-> Ctrl+K Ctrl+U
// console.log(money);
// console.log(time);

let appData = {
  budget: money,
  timeData: time,
  expenses : {},
  optionalExpenses: {},
  income : [],
  savings : false
};

let e1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	  v1 = prompt("Во сколько обойдется?", ''),
	  e2 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	  v2 = prompt("Во сколько обойдется?", '');


/* Shift+Alt+A : toggle */
/* console.log(e1);
console.log(v1);
console.log(e2);
console.log(v2); */

appData.expenses[e1] = v1;
appData.expenses[e2] = v2;

// Ctrl+/ : Toggle line comment

// Ctrl+K Ctrl+C <-> Ctrl+K Ctrl+U
// console.log(e2);
// console.log(v2);

alert(appData.budget / 30);






