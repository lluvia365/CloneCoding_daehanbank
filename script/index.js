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
    
    
    
    // secC
    $('.button').click(function(){  /* 공지사항, 갤러리 버튼 */
        $('.button').removeClass('active');  /* 모든 버튼 초기화 */
        $(this).addClass('active');  /* 클릭한 버튼만 효과 적용 */
    });
    
    
    //공지사항 버튼 클릭할 때
    $('#btn1').click(function(){
        $('#gallery').hide();  // 갤러리 숨김
        $('#notice').show();  // 공지사항 보임
    });  
    
    // 갤러리 버튼 클릭할 때
    $('#btn2').click(function(){
        $('#notice').hide();  // 공지사항 숨김
        $('#gallery').show();  // 갤러리 보임
    });
    
    
    // 첫번째 리스트를 클릭할 때
    $('.list').eq(0).click(function(){
        $('#modal').css('display','flex');  // 모달창 보이기 
    });
    
    // 모달창 닫기버튼을 클릭할 때
    $('#modalClose').click(function(){
        $('#modal').hide();  // 모달창 숨기 
    });
    
    
});


