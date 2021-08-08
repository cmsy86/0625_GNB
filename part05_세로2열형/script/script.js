$(function(){
    
    $("li.mainLi").mouseover(function(){
        $(this).children("ul.subMenu").stop().slideDown(300);
    });
    
        $("li.mainLi").mouseout(function(){
        $(this).children("ul.subMenu").stop().hide();
    });
    
});