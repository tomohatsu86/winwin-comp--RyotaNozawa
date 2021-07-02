$(function(){

  // ヘッダーの固定
  var navPos = $('.header').offset().top;

  $(window).scroll(function(){
    if($(window).scrollTop() > navPos - 5 ){
      $('.header').addClass('fixed');
    }else{
      $('.header').removeClass('fixed');
    }
  });

  // スムーススクロール
  $("a").click(function(){
    var target = $($(this).attr('href')).offset().top;

    $('html, body').animate({scrollTop: target}, 500);

    return false;

  });

  //バーガーメニュー
$('.menu__btn').click(function(){
  $(this).toggleClass('active');
  $('.header__nav').toggleClass('active');
  $('.burger-musk').fadeToggle(300);
  $('body').toggleClass('noscroll');
});





});
