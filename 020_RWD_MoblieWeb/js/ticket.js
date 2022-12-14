$('#myBtn').on('click',myFunction);

// Event Listener
function myFunction(){
    var dots = $('#dots');
    var moreButton = $('#more');
    var textButton = $('#myBtn');
    var result = $('#dots').css('display');
    // 이벤트 시 작동
    if(result=='none'){
        dots.css({display:'inline'});
        textButton.text('+MORE');
        moreButton.css({display:'none'});
    }else{ 
        dots.css({display:'none'});
        textButton.text('-CLOSE');
        moreButton.css({display:'inline'});
    }
}