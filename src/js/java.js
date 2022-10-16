//Команда для проверки подключения

alert("Java is connected");


//выводит данные о пользователе - браузер и тд
let windoww = navigator.userAgent;
console.log(windoww);

//Перенос на другую страницу, также выводит каким путем пользователь добрался до сайта

/*let windoww2 = location.href;
location.href = "http://yandex.ru";
console.log(windoww2);*/ 


//нижняя команда нужна чтобы квери работал независимо от положения в html
//$(document).ready(function () {
//$('#secondtext').text("Privet,andrej");
//$('#secondtext').css("border", '2px solid red');    
//});

$('#secondtext').text("Privet,andrej");
$('#secondtext').css("border", '2px solid red');
$(".second_title").find(".secondsecond").css('border','3px solid black');

//как выбрать конкретный элемент в родителе
//$(".ul>li:odd").css('border','1px solid black');
$(".ul>li:eq(1)").text("FURT");
$(".ul").find("li").css("color", "black");
$('.box:empty'/*parent*/).css('border','10px solid red');
$('a[href*="#"]:even').css('color','red');

//Должно срабоать но не работает
/*$(document).ready(function(){
    $("#pidtest").click(function(){
    $(this).toggleClass("red");
});

});*/
//Take musi fungovat
/*$("#pidtest").mouseenter(function(){
    $(this).toggleClass("red");
});
$("#pidtest").mouseleave(function(){
    $(this).toggleClass("red");
});*/
$("input[ipp*='lex']").keyup(function(){
   $('#nechat_message').text("Hi,"+$(this).val());
});
/*
$('.cases_project_info').click(function(){
   $(this).delay(1000).hide(2000).delay(500).show(1000);
    return;
});*/
$('.cases_project_info').click(function(){
   $(this).animate({opacity:'0.25'},1000);
});
$('img').click(function(){
    $(this).fadeOut(500, function(){
      $(this).attr("src","img/ракета.png").fadeIn(500);  
    });
});






