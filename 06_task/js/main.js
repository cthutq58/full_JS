'use strict'

let startBtn = document.getElementById('start'),
    resaltValue = document.querySelectorAll('div[class$="-value"]'),
    [budgetValue, dayBudgetValue, levelValue, expensesValue, optionalExpensesValue,
        incomeValue, monthSavingsValue, yearSavingsValue] = resaltValue,

    expensesItem = document.querySelectorAll('.expenses-item'),
    // [expensesBtn, optionalExpensesBtn, countBtn]] 
    //      = document.getElementsByTagName('button');
    [expensesBtn, optionalExpensesBtn, countBtn]
        = document.querySelectorAll('button[class$="btn"]'),

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('#income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let time, money;

startBtn.addEventListener('click', function () {
    // let d = new Date(Date.now()).toISOString().match(/\d{4}-\d{2}-\d{2}/g);
    let d = new Date(Date.now()).toISOString().slice(0, 10);
    time = prompt("Введите дату в ISO-формате YYYY-MM-DD", d);

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "50000");
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    // yearValue.value = d[0].slice(0, 4);
    [yearValue.value, monthValue.value, dayValue.value] = d.split('-');
});

expensesBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let exp = expensesItem[i].value, val;
        sum += +(val = expensesItem[++i].value);
        if (typeof (exp) === 'string' && typeof (exp) != null && typeof (val) != null
            && exp != '' && val != '' & exp.length < 50) {
                appData.expenses[exp] = val;
                console.log("done exp");
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += opt + ' ';
        console.log("done opt");
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    chooseExpenses: () => { },
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
            console.log("Опаньки...!");
        }
    },
    checkSavings: function () {
        if (appData.savings || (appData.savings = confirm("Имеете вклады?"))) {
            let save = +prompt("Какова сумма вкладов?", 1000000),
                procent = +prompt("Под какой процент?", 12);

            appData.monthIncome = (save / 100 / 12 * procent).toFixed(1);
            alert("Доход в месяц с вложений: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: () => { },
    chooseIncome: function () {
        let items = '';
        while (typeof (items) !== 'string' || items == '' || typeof (items) === null) {
            items = prompt("Что принесет доп.заработок? (перечислите через ', ')", '');
        }
        appData.income = items.split(", ");
        appData.income.push(prompt("Может, что-то ещё?", ""));
        appData.income.sort();
        console.log(appData.income);
        alert("Cпособы доп.заработка: \n");
        appData.income.forEach((item, i) =>
            alert((i + 1) + "-й способ доп.заработка: " + item));
    }
};


/* console.log("Наша программа включает в себя данные: \n");
for (const key in appData) {
    console.log(key);
} */


