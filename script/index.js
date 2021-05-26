$(function(){
    
    $('.main').mouseenter(function(){
        $('.subMenu').stop().slideDown();
    });
    
    $('.main').mouseleave(function(){
        $('.subMenu').stop().slideUp();
    });
});