// JS Goes here - ES6 supported
import { Expo, TweenMax } from "gsap";
import smoothstate from 'smoothstate';
import AOS from 'aos';

 AOS.init();





// auto open date

var d = new Date();
var todaysDate = d.getDate();
var target = $('.calendar .date');

target.each(function(){
  var day = $(this).html();
  if (todaysDate == day) {
    $(this).parent().addClass('today').append('<div id="date-featured"></div>');
  }
  if (todaysDate < day){
    $(this).parent().addClass('future');
     $(this).parent().addClass('peek');
            $(this).parent().append('<div class="no-peek"><h2>No Peeking!</h2></div>');
  }
  if (todaysDate > day){
    $(this).parent().addClass('past')
  }
});

// handle clicks on days



$( ".today" ).click(function() {
  $( this ).toggleClass( "expanded" );
});

// close modal


// Delay scrolling

$('body').addClass('stop-scrolling')



setTimeout(
    function() {
        $('body').removeClass('stop-scrolling')
       
    }, 3500);




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


// make links live


$(function() {
    if ( document.location.href.indexOf('#calendar') > -1 ) {
        $('body').removeClass('stop-scrolling');
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






