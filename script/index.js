var slideNo = 0;

function slide(){
    slideNo++;
    if(slideNo>2) slideNo=0;
    
    var y = slideNo * -100 + '%';
    
    $('#slideBox').css('margin-left',x);
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


