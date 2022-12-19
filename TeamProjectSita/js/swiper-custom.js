var swiper = new Swiper('.swiper-container', {
    /* a. 슬라이드 보이는 갯수 */
    slidesPerView: 3, 
    /* b. 슬라이드 사이 간격 */
    spaceBetween: '2%',
    /* c. 슬라이드 반복 여부 */
    loop: true,
    /* d. 그룹 수 맞추기 => 안 맞을 경우 빈칸으로 채우기 여부 */
    loopFillGroupWidthBlank: true,
    /* e. 활성 슬라이드 항상 가운데 배치하기 */
    // centeredSlides: true,

    // 네비게이션 좌우화살표
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});