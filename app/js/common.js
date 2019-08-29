$(function() {

//------------------------------анимация-----------------------------
  var $window = $(window);
  var $elem = $(".step__item")

  function isScrolledIntoView($elem, $window) {
      var docViewTop = $window.scrollTop();
      var docViewBottom = docViewTop + $window.height();

      var elemTop = $elem.offset().top;
      var elemBottom = elemTop + $elem.height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  $(document).on("scroll", function () {
      if (isScrolledIntoView($elem, $window)) {
          $elem.addClass("step__item--active")
      }
  });

//------------------------------------------------
  var $windowone = $(window);
  var $elemone = $(".fadeIn")

  function isScrolled($elemone, $windowone) {
      var docViewTop = $windowone.scrollTop();
      var docViewBottom = docViewTop + $windowone.height();

      var elemoneTop = $elemone.offset().top;
      var elemoneBottom = elemoneTop + $elemone.height();

      return ((elemoneBottom <= docViewBottom) && (elemoneTop >= docViewTop));
  }
  $(document).on("scroll", function () {
      if (isScrolled($elemone, $windowone)) {
          $elemone.addClass("fadeIn--active")
      }
  });

//------------------------------------------------
  $('.h1').addClass('h1--active');
  $('.sub-title').addClass('sub-title--active');



//------------------------------modal-----------------------------
  $('.begin_open').click(function() {
    $('#begin').addClass('modal--active');
    event.preventDefault();
  });

  $('.begin_close').click(function() {
    $('#begin').removeClass('modal--active');
    event.preventDefault();
  });



//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('.nav').toggleClass('nav--active');
    $('.header').toggleClass('header--menu');
  });

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>20){
          $('.header').addClass('header--active');
      }
      else if ($(this).scrollTop()<20){
          $('.header').removeClass('header--active');
      }
  });

  if($(this).scrollTop()>20){
      $('.header').addClass('header--active');
  }

//-------------------------скорость якоря---------------------------------------
  $(".click").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 60}, 'slow', 'swing');
  });

//-------------------------скорость якоря---------------------------------------
  $(".nav ul li").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 60}, 'slow', 'swing');
  //--------------------закриття меню при кліку на ссилку якоря--------------------
     $('.hamburger').removeClass('hamburger--active');
     $('.nav').removeClass('nav--active');
     $('.header').removeClass('header--menu');
  });
    
});
