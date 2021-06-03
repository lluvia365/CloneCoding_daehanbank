var slideNo = 0;

function slide(){
    slideNo++;
    if(slideNo>2) slideNo=0;
    
    var x = slideNo * -100 + '%';
    
    $('#slideBox').css('margin-left',x); /* 슬라이드 왼쪽으로 이동 */
}

function playSlide(){
    setInterval('slide()',3000);
}



$(function(){
    
    $('.main').mouseenter(function(){
        $('.subMenu').stop().slideDown();
    });
    
    $('.main').mouseleave(function(){
        $('.subMenu').stop().slideUp();
    });
    
    
    
    
    
    
    
    
    
    
    
});


