// JS Goes here - ES6 supported
import { Expo, TweenMax } from "gsap";
import 'smoothstate';
import AOS from 'AOS';

 AOS.init();



// auto open date

$(function() {
    var date = new Date(),
        currentDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    currentDate = Date.parse(currentDate);
    $(".grid-item").each(function() {
        var specifiedDate = $(this).data('date');
        specifiedDate = Date.parse(specifiedDate);
        if (specifiedDate == currentDate) {
            $(this).addClass("today").append('<div id="date-featured"></div>');

        } else if (currentDate > specifiedDate) {
            $(this).addClass('past');
        } else {
            $(this).addClass('future');
            $(this).addClass('peek');
            $(this).append('<div class="no-peek"><h2>No Peeking!</h2></div>');
        }
    });
});

// Delay scrolling

$('body').addClass('stop-scrolling')



setTimeout(
    function() {
        $('body').removeClass('stop-scrolling')
       
    }, 3500);





// open box

$(function() {
    $('.today').click(function() {
        $(this).addClass('expanded');
  $(this).find('.day__content').toggleClass('box-close');
    });
});


// open past

$(function() {
    $('.past').click(function() {
        $(this).addClass('expanded');
  $(this).find('.day__content').toggleClass('box-close');
    });
});


//




$(window).resize(function(){
    if ($(window).width() < 700){  
    // no peek!

$(function() {
    $('.peek').click(function() {
        $(this).addClass('peek-open');

setTimeout(
    function() {
        $('.peek').removeClass('peek-open') }, 
        1000);

    });
});

    }   
});


// header open

TweenMax.to(".star__logo", 1, { width: "8rem", transform: "translateY(4vh)", delay: 1, ease: Expo.easeIn });

TweenMax.to(".star__burst", .85, { opacity: "1", delay: 1.5, ease: Expo.easeIn });
TweenMax.to(".ground--back", 1, { fill: "#272067", delay: 1, ease: Expo.easeIn });
TweenMax.to(".ground--middle", 1, { fill: "#1E1759", delay: 1, ease: Expo.easeIn });
TweenMax.to(".home", .85, { backgroundColor: "#1A144F", delay: 1.5, ease: Expo.easeIn });
TweenMax.to(".banner__title", .85, { opacity:"1", delay: 2, ease: Expo.easeIn });




TweenMax.to(".banner__wordmark", .5, { transform: "translateY(0vh)", opacity: "0", delay: 1, ease: Expo.easeIn });
TweenMax.to(".stars", .75, { opacity: "1", delay: 1.5, ease: Expo.easeIn });


//masonry

// - - - - - - - - - 


$( function() {

    $('.calendar').masonry({
        columnWidth: '.grid-sizer',
        percentPosition:true,
        itemSelector: '.grid',
        horizontalOrder: true,
      gutter: '.gutter-sizer',

    });

});




