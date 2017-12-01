// JS Goes here - ES6 supported
import { Expo, TweenMax } from "gsap";
import 'smoothstate';




//$(function() {
//   var d =new Date();
//  var curmonth = d.getMonth()+1;
// var curDate = d.getFullYear()+"-"+curmonth+"-"+d.getDate();

//    $(".grid-item[data-date="+curDate+"]").append('<div id="date-featured"></div>').find('#date-featured').addClass("today");
//});


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

$('body').bind('touchmove', function(e) { e.preventDefault() })

setTimeout(
    function() {
        $('body').removeClass('stop-scrolling')
        $('body').off('touchmove', function(e) { e.preventDefault() })
    }, 3500);





// open box

$(function() {
    $('.today').click(function() {
        $(this).toggleClass('expanded');

    });
});


//

// no peek!

$(function() {
    $('.no-peek').click(function() {
   TweenMax.to(this, 1, { opacity:1, repeat:1, yoyo:true });
 TweenMax.to('.peek h1', 1, { opacity:0, repeat:1, yoyo:true });

    });
});






// header open

TweenMax.to(".star__logo", 1, { width: "8rem", transform: "translateY(4vh)", delay: 1, ease: Expo.easeIn });

TweenMax.to(".star__burst", .85, { opacity: "1", delay: 1.5, ease: Expo.easeIn });
TweenMax.to(".ground--back", 1, { fill: "#272067", delay: 1, ease: Expo.easeIn });
TweenMax.to(".ground--middle", 1, { fill: "#1E1759", delay: 1, ease: Expo.easeIn });
TweenMax.to(".home", .85, { backgroundColor: "#1A144F", delay: 1.5, ease: Expo.easeIn });



TweenMax.to(".banner__wordmark", .5, { transform: "translateY(0vh)", opacity: "0", delay: 1, ease: Expo.easeIn });
TweenMax.to(".stars", .75, { opacity: "1", delay: 1.5, ease: Expo.easeIn });
//TweenMax.to(".banner__ground", .75, {  opacity:"1",delay:4.25,ease:Expo.easeIn});
//TweenMax.to(".banner__background", .75, {  opacity:"1",delay:3.5,ease:Expo.easeIn});