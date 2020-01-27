'use strict';

let money, time;

function start() {
  while(isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "50000");
  }
  time = prompt("Введите дату в формате YYYY-MM-DD", Date.now());
}
start();
 
let appData = {
  budget: money,
  timeData: time,
  fixExpenses : {},
  optionalExpenses: {},
  income : [],
  savings : false
};

function chooseFixExpenses() {
  for (let i = 1; i < 3; i++) {
    let exp = prompt("Введите обязательную "+ i + "-ю статью расходов в этом месяце", i + "-я"),
        val = +prompt("Во сколько она обойдется?", '5000');
    if (typeof(exp) === 'string' && typeof(exp) != null && typeof(val) != null 
        && exp != '' && val != '' & exp.length < 50) {
      console.log("done");
      appData.fixExpenses[exp] = val;
    } else {
      i--;
    }
  }
}
chooseFixExpenses();

function chooseOptExpenses() {
  for (let i = 1; i < 4; i++) {
    let exp = prompt("Введите необязательную "+ i + "-ю статью расходов в этом месяце", i + "-я"),
        val = +prompt("Во сколько она обойдется?", '2000');
    if (typeof(exp) === 'string' && typeof(exp) != null && typeof(val) != null 
        && exp != '' && val != '' & exp.length < 50) {
      console.log("done");
      appData.optionalExpenses[exp] = val;
    } else {
      i--;
    }
  }
}
chooseOptExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed(1);
  alert("Дневной бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Низкий уровень достатка");
  } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay >= 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("WTH?");
  }
}
detectLevel();

function checkSavings() {
  if(appData.savings || (appData.savings = confirm("Имеете вложения?"))) {
    let save = +prompt("Какова сумма вложений?", 1000000),
        procent = +prompt("Под какой процент?", 12);

    appData.monthIncome = (save / 100 / 12 * procent).toFixed(1);
    alert("Доход в месяц с вложений: " + appData.monthIncome);
  }
}
checkSavings();

