// JS Goes here - ES6 supported
import {Expo,TweenMax} from "gsap";
import 'smoothstate';




$(function() {
    var d =new Date();
    var curmonth = d.getMonth()+1;
    var curDate = d.getFullYear()+"-"+curmonth+"-"+d.getDate();

    $(".grid-item[data-date="+curDate+"]").append('<div id="date-featured"></div>').find('#date-featured').addClass("today");
});





$(function() {


    $('.grid-item').click(function() {

          // Toggle the Body Class "show-nav"
          $(this).toggleClass('expanded');


          // Deactivate the default behavior of going to the next page on click 
   

    });
});







TweenMax.to(".star__logo", 1, {  width: "8rem", transform:"translateY(4vh)",delay:2,ease:Expo.easeIn});

TweenMax.to(".star__burst", .85, {  opacity:"1",delay:2.5,ease:Expo.easeIn});
TweenMax.to(".ground--back", 1, {  fill:"#272067",delay:2,ease:Expo.easeIn});
TweenMax.to(".ground--middle", 1, {  fill:"#1E1759",delay:2,ease:Expo.easeIn});
TweenMax.to(".home", .85, {  backgroundColor:"#1A144F",delay:2.5,ease:Expo.easeIn});



TweenMax.to(".banner__wordmark", .5, {  transform:"translateY(0vh)" ,opacity:"0",delay:2,ease:Expo.easeIn});
TweenMax.to(".stars", .75, {  opacity:"1",delay:2.5,ease:Expo.easeIn});
//TweenMax.to(".banner__ground", .75, {  opacity:"1",delay:4.25,ease:Expo.easeIn});
//TweenMax.to(".banner__background", .75, {  opacity:"1",delay:3.5,ease:Expo.easeIn});

