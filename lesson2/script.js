let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    question1 = prompt("Введите обязательную статью расходов в этом месяце"),
    question2 = prompt("Во сколько обойдеться?"),
    appData = {
    budzhet: money,
    timeData: time,
    expenses: {question1 : question2},
    optionalExpenses: '',
    income: [],
    savings: false
};

alert("Расход на 1 день составляет: " + money / 30);
