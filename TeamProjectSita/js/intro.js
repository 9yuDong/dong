var sec = $('#snb').find('li');
console.log('메뉴 li갯수 : ' + sec.length);

var i;
function sec_menu(num) {
    for(i=0;i<sec.length;i++){
        if(num == i){
            sec.eq(i).addClass('active');
            $('.tab_content_0'+i).show();
          }else{
            sec.eq(i).removeClass('active');
            $('.tab_content_0'+i).hide();
          }
        }
      }

      $(function(){

        function options(delay){
          return {
            distance: '30px',
        origin: 'bottom',
        opacity: 0,
        easing: 'cubic-bezier(0.9, 0, 0, 0)',
        duration: 800,
        delay
      }
    }
    
    ScrollReveal().reveal($('.sec_01 div h2'), options(0))
    ScrollReveal().reveal($('.sec_01 div p'), options(250))
    ScrollReveal().reveal($('.sec_01 div button'), options(700))
    })