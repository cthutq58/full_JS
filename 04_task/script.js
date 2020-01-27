'use strict';

let money, time;

function start() {
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "50000");
  }
  time = prompt("Введите дату в формате YYYY-MM-DD", Date.now());
}
start();

let appData = {
  budget: money,
  timeData: time,
  fixExpenses: {},
  optionalExpenses: {},
  sideIncome: [],
  savings: false,
  chooseFixExpenses: function () {
    for (let i = 1; i < 3; i++) {
      let exp = prompt("Введите обязательную " + i + "-ю статью расходов в этом месяце", i + "-я"),
        val = +prompt("Во сколько она обойдется?", '5000');
      if (typeof (exp) === 'string' && typeof (exp) != null && typeof (val) != null
        && exp != '' && val != '' & exp.length < 50) {
        console.log("done");
        appData.fixExpenses[exp] = val;
      } else {
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert("Дневной бюджет: " + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Низкий уровень достатка");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay >= 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("WTH?");
    }
  },
  checkSavings: function () {
    if (appData.savings || (appData.savings = confirm("Имеете вложения?"))) {
      let save = +prompt("Какова сумма вложений?", 1000000),
        procent = +prompt("Под какой процент?", 12);

      appData.monthIncome = (save / 100 / 12 * procent).toFixed(1);
      alert("Доход в месяц с вложений: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i < 4; i++) {
      let exp = prompt("Введите необязательную " + i + "-ю статью расходов в этом месяце", i + "-я"),
        val = +prompt("Во сколько она обойдется?", '2000');
      if (typeof (exp) === 'string' && typeof (exp) != null && typeof (val) != null
        && exp != '' && val != '' & exp.length < 50) {
        console.log("done");
        appData.optionalExpenses[exp] = val;
      } else {
        i--;
      }
    }
  },
  chooseSideIncome: function () {
    let items = '';
    while (typeof (items) !== 'string' || items == '' || typeof (items) === null) {
      items = prompt("Что принесет доп.заработок? (перечислите через ', ')", '');
    }
    appData.sideIncome = items.split(", ");
    appData.sideIncome.push(prompt("Может, что-то ещё?", ""));
    appData.sideIncome.sort();
    console.log(appData.sideIncome);
    alert("Cпособы доп.заработка: \n");
    appData.sideIncome.forEach((e, i) => alert((i+1)+"-й: "+ e));
  }
};

/* appData.chooseFixExpenses();
appData.chooseOptExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavings();
appData.chooseSideIncome(); */

console.log("Наша программа включает в себя данные: \n");  
for (const key in appData) {
  console.log(key);  
}


