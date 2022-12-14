//브라우저 너비, 높이 변수할당
var bw = $(window).width();
var bh = $(window).height();
console.log('브라우저 너비값은 :' + bw);
console.log('브라우저 높이값은 :' + bh);
$('#wrap').css({height:bh});
//브라우저 높이의 half
var halfHeight = bh/2;
$('.youtube').css({'margin-top':halfHeight});