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
        let exp = expensesItem[i].value,
            val;
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
    console.log(appData.optionalExpenses);
});

countBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.value = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Низкий уровень достатка";
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay >= 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = 'Произошла ошибка!';
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка!';
    }
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    chooseExpenses: () => { },
    detectDayBudget: () => { },
    detectLevel: function () {

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
/* 
        appData.income.push(prompt("Может, что-то ещё?", ""));
        appData.income.sort();
        console.log(appData.income);
        alert("Cпособы доп.заработка: \n");
        appData.income.forEach((item, i) =>
            alert((i + 1) + "-й способ доп.заработка: " + item)); */
    }
};


/* console.log("Наша программа включает в себя данные: \n");
for (const key in appData) {
    console.log(key);
} */


