var winHeight;
var footerHeight;
var sectionId;
var sectionPosition;
var fromTop;
var mainHeader = $('.main-header');

// Zadavanje visine sekcijama
function sectionHeight() {
  winHeight = $(window).height();
  footerHeight = $('.main-footer').outerHeight();
  $('#home, #about, #gallery').css('min-height', winHeight);
  $('#contact').css('min-height', winHeight - footerHeight);
}
sectionHeight();
$(window).on('resize', function () {
  sectionHeight();
});

//Navigacija
$('nav, .nav-button').on('click', function () {
  $('nav').fadeToggle(300);
  $('.nav-button').toggleClass('white');
});

// Smooth scroll
$('nav a').on('click', function (e) {
  e.preventDefault();

//Preuzimanje id-ija sekcije
sectionId = $(this).attr('href');
sectionPosition = $(sectionId).offset().top;
$('html, body').animate({
  scrollTop : sectionPosition
}, 1000);
});

//Skupljanje hedera na scroll
$(window).on('scro5ll', function () {
fromTop = $(window).scrollTop();
if(fromTop > 100) {
  mainHeader.addClass('change-header');
} else {
  mainHeader.removeClass('change-header');
}
});

//Plugins
$('#contact-form').validate();
$('#gallery .img-holder a').magnificPopup({
  type: 'image',
  gallery : {
    enabled : true
  }
});
