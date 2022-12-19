$(document).ready(function(){
    
    // 플라스틱 분해 과정
    var count = 0;
    $('.plastic_button .left').click(function(){
        count--;
        if(count<0){
            count=3;
        }
        $('.artGroup').css('marginLeft',-100*count+'%');
    });

    $('.plastic_button .right').click(function(){
        count++;
        if(count>3){
            count=0;
        }
        $('.artGroup').css('marginLeft',-100*count+'%');
    });
});

// 시타 사이클 원형 쇼
$(window).scroll(function(){
    var browserHeight = $(window).scrollTop();

    if(browserHeight>=500){
        $('.circle_list ul li').css('opacity','1');
    }
});