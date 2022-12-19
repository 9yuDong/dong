$(document).ready(function(){
    /* start video play */
    $('.start_content i').click(function(){
        $('.start_content iframe').fadeIn(1000);
    });
});

$(window).scroll(function(){
    var browserHeight = $(window).scrollTop();
    // console.log(browserHeight);
    
    /* if(browserHeight>=500){
        $('.circle_list ul li:nth-child(1)').slideDown(500);
        $('.circle_list ul li:nth-child(2)').slideDown(1000);
        $('.circle_list ul li:nth-child(3)').slideDown(1500);
        $('.circle_list ul li:nth-child(4)').slideDown(2000);
        $('.circle_list ul li:nth-child(5)').slideDown(3000);
        $('.circle_list ul li:nth-child(6)').slideDown(3500);
        $('.circle_list ul li:nth-child(7)').slideDown(4000);
        $('.circle_list ul li:nth-child(8)').slideDown(4500);
    } */
});