
// top slidemenu selection
$(document).ready(function () {
    $('.pick1').click(function (e) { 
        e.preventDefault();
        $(this).parent().siblings().find('ul').slideUp();
        $('.bar1').slideToggle(800);
        $('.bar1').toggleClass('active')
        
    });

    $('.pick2').click(function (e) { 
        e.preventDefault();
        $(this).parent().siblings().find('ul').slideUp();
        $('.bar2').slideToggle(800);
        $('.bar2').toggleClass('active')
        
    });
    
//   uptotop
$('.box2 a').click(function (e) { 
    e.preventDefault();
   $('html,body').animate({scrollTop:0},1500);
    
});


});

// swiper photo loop selection
const swiper = new Swiper('.swiper', {

    effect: 'cube',
    cubeEffect: {
      slideShadows: false,
    },
    // Optional parameters
    autoplay: {
        delay: 1800,
    loop: true,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  

  });

//   uptotop

