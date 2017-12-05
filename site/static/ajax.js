/* eslint-disable */

$(function(){
  'use strict';
  var options = {
    prefetch: true,
    cacheLength: 2,
    onStart: {
      duration: 250, // Duration of our animation
      render: function ($container) {
        // Add your CSS animation reversing class
        $container.addClass('is-exiting');

        // Restart your animation
        smoothState.restartCSSAnimations();
      }
    },

    onProgress: {
            // How long this animation takes
            duration: 0,
            // A function that dictates the animations that take place
            render: function ($container) {
               $('.spinner').show(100);
            }
        },
    
    onReady: {
      duration: 0,
      render: function ($container, $newContent) {
        // Remove your CSS animation reversing class
        $container.removeClass('is-exiting');

        // Inject the new content
        $container.html($newContent);

      }
    },

    onAfter: function() {
 window.ga("send", "pageview", window.location.pathname)
  }
  },
  smoothState = $('#main').smoothState(options).data('smoothState');
});