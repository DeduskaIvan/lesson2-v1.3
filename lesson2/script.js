let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
  
let appData = {
    budzhet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i = 0; i < 2; i++){
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдеться?', '');
       
       if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === 'string' 
       && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
           console.log("done");
            appData.expenses[a] = b;
       } else{

       };

       appData.moneyPerDay = appData.budzhet / 30;
       
        
}
// let i =0;
// while(i < 2){
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдеться?', '');

//         if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === 'string' 
//        && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
//            console.log("done");
//             appData.expenses[a] = b;
//        } else{

//        };
//        i++;
//        appData.moneyPerDay = appData.budzhet / 30;
// }

// do{
//     i++;
// }   while( i < 2 ){
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//             b = prompt('Во сколько обойдеться?', '');
    
//             if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === 'string' 
//            && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
//                console.log("done");
//                 appData.expenses[a] = b;
//            } else{
    
//            };
          
//            appData.moneyPerDay = appData.budzhet / 30;
// }

alert("Расход на 1 день составляет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100){
    console.log("минимальный уровень достатка")
}   else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Средний уровень достатка")
}   else if (appData.moneyPerDay > 2000){
    console.log("Высокий уровень достатка");
} else{
    console.log("Произошла ошибка")
}



