let money, time;

function start(){
    money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == '' || money == null){
        money = +prompt('Ваш бюджет на месяц?', '');
    }

}

start();




  
let appData = {
    budzhet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses(){
    for (let i = 0; i < 2; i++){
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдеться?', '');
           
        if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === 'string' 
        && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
            console.log("done");
            appData.expenses[a] = b;
       } else{
                i--;
       }
    }
}

chooseExpenses();

function detectDayBudzhet(){
    appData.moneyPerDay = parseInt(appData.budzhet/30);
    alert("Расход на 1 день составляет: " + appData.moneyPerDay);
}

detectDayBudzhet();
       
        
function detectLevel(){
    if (appData.moneyPerDay < 100){
        console.log("минимальный уровень достатка")
    }   else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("Средний уровень достатка")
    }   else if (appData.moneyPerDay > 2000){
        console.log("Высокий уровень достатка");
    } else{
        console.log("Произошла ошибка")
    }

}

detectLevel();


function chooseOptExpenses(){
    for (let i = 0; i < 3; ++i){
        let a = prompt("Статья необязательных расходов?");
        
        if((typeof(a)) === 'string' && (typeof(a)) != null){
            console.log("done");
            appData.optionalExpenses[a] = a;
       } else{
                
       }
    } 
    
}

chooseOptExpenses();


function checkSavings(){
    if (appData.savings == true){
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент Ваши накопления?');
        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

checkSavings();