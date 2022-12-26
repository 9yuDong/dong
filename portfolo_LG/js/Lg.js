// 상단 버튼 닫기
$(document).ready(function () {
    $('.close1').click(function () {
        $('aside').hide();

    })
    $('.login_box').on({
        'mouseover': function () {
            $('.login_menu').show();

        }
    });
    /*  */
 

    $('.login_menu').on({
        'mouseout': function () {
            $('.login_menu').hide();


        }

    });

    $(function () {
        $('.slide_gallery').bxSlider({
            mode: 'fade',
            pager: true,
            slideWidth: 1440
        });
    });
    $(function () {
        $('.slide_gallery').bxSlider({
            auto: true,
            autoControls: false,
            autoHover: true,
            pager: true,
            // pagerCustom: '.slide_pager',
            slideWidth: 1920,
        });
    });


});
var tab = $('.gnb').find('li');
var j;
function tab_menu(num) {
    for (j = 0; j < tab.length; j++) {
        if (num == j) {

            tab.eq(j).addClass('on');
            $('.menu_box_all .menu_box0' + j).show();
        } else {
            tab.eq(j).removeClass('on');
            $('.menu_box_all .menu_box0' +j).hide();
        }
    }
}
// function tab_menu1(){
//     $('.menu_box_all .menu_box01').show();
// }
var tab = $('.sub_gnb').find('li');
var i;
function tab_sub(num) {
    for (i = 0; i < tab.length; i++) {
        if (num == i) {

            tab.eq(i).addClass('on');
            $('.sub_menu0' + i).show();
        } else {
            tab.eq(i).removeClass('on');
            $('.sub_menu0' + i).hide();
        }
    }
}
var tab = $('.sub_gnb').find('li');
var i;
function tab_img(num) {
    for (i = 0; i < 3; i++) {
        if (num == i) {

            tab.eq(i).addClass('on');
            $('.tab_content_0' + i).show();
        } else {
            tab.eq(i).removeClass('on');
            $('.tab_content_0' + i).hide();
        }
    }
}


