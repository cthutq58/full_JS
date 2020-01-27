'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budget: money,
  timeData: time,
  expenses : {},
  optionalExpenses: {},
  income : [],
  savings : false
};

for (let i = 1; i < 3; i++) {
  let exp = prompt("Введите обязательную "+ i + "-ю статью расходов в этом месяце", ''),
    val = prompt("Во сколько она обойдется?", '');
  if (typeof(exp) === 'string' && typeof(exp) != null && typeof(val) != null 
      && exp != '' && val != '' & exp.length < 50) {
    console.log("done");
    appData.expenses[exp] = val;
  } else {
    i--;
  }
}

appData.moneyPerDay = appData.budget / 30;

alert("Дневной бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Низкий уровень достатка");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay >= 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("WTH?");
}





