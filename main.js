$(function(){//jQeury 준비

/* 모바일구분선언 */ 
function isMobile() {
  if (navigator.userAgent.indexOf('Mobile') != -1) {
      return true;
  } else {
      return false;
  } 
}
/* pc 버젼*/
if(!isMobile()){
  /* gnb메뉴 */
  var gnbOpen = false;
  $('.gnb').mouseenter(function(){
  $('.gnb').addClass('open');
  gnbOpen = true;
  }).mouseleave(function(){
  $('.gnb').removeClass('open');
  gnbOpen = false;
});
}else{
/* 모바일일때 */
  $('.gnb > ul > li').on('click', function(){
    $(this).find('.sub').toggleClass('open');
    $('.gnb > ul > li').not(this).find('.sub').removeClass('open');
    $(this).find('.gnb > ul > li > a.sub::after').toggleClass('open');
});
$('.m_btn').on('click', function(){
    $('.gnb').toggleClass('open');   
    $('.m_btn').toggleClass('cross');   
    $('.util').toggleClass('open');   
});
   $('.gnb ul.sub').parent().find('a').addClass('sub');

}

/* 문 슬라이드 */
var swiper1 = new Swiper('.door_slide', {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.door .next',
        prevEl: '.door .prev',
      },
      breakpoints: {
        890: {
          slidesPerView: 1,
          spaceBetween: 50,
          slidesPerGroup: 1,
        },
      }
    });
var swiper2 = new Swiper('.project_slide', {
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
      890: {
        slidesPerView: 1,
        slidesPerColumn: 2,
        spaceBetween: 30,
      },
    }
    });

var main = new Swiper('.main_slide', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.main_slide .next',
    prevEl: '.main_slide .prev',
  },
});
});

