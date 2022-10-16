

let sum = 0, days = 0;

function calc(){
let type = prompt("Какой тип сайта? 1 - Сайт-визитка 2 - Интернет-магазин");
    
    if( type == "1"){
    sum += 1000;
    days += 1;    
}else if( type == "2"){
    sum += 5000;
    days += 10;
}else {
    alert("Ошибка, выберите вариант.");
    calc();
    }
    
let design = prompt("Какой тип дизайна? 1 - Шаблон 2 - Уникальный");
    if ( design =="2"){
    sum+=2000;
    days +=2;
    }
    
    
let adaptation = prompt("Какой тип адаптивности? 1 - ПК  2 - ПК + Моб. ");
    if ( adaptation == "2"){
        sum+=1500;
        days+=2;
    }

alert("Сроки: "+ days + " Стоимость: "+ sum);
}
calc();



