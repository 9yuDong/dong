$(document).ready(function(){
    // 브라우저 너비 높이값 변수 할당
    // 콘솔에 브라우저 너비값 : ??? 브라우저 높이값 : ???
    var broeserWidth = $(window).width();
    var broeserHeight = $(window).height();
    console.log('브라우저 너비값은 : '+ broeserWidth);
    console.log('브라우저 높이값은 : '+ broeserHeight);
    // DOM #wrap에 동적 높이값 적용 
    $('#wrap').css({height:broeserHeight});



});