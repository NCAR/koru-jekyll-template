'use strict';

// init modules when doc is ready
jQuery(document).ready(function($) {
  //reset any and all of body main-menu menu-button top-bar
  $(window).on('changed.zf.mediaquery', function(event, newSize, oldSize){
    if (Foundation.MediaQuery.atLeast('mlarge')) {
      var $main_menu = $('#utility-menu');
      if($main_menu.hasClass('show-for-mlarge') === false) {
        $main_menu.addClass('show-for-mlarge');
      }
    }
  });

  var $banner_content = $(".banner-content");
  var $dropdown_menu = $("nav.main-nav ul.menu.dropdown");

  $dropdown_menu.on("show.zf.dropdownmenu", function(){
    {
      $banner_content.addClass("show-for-sr");
    }
  });

  $dropdown_menu.on("hide.zf.dropdownmenu", function(){
    {
      $banner_content.removeClass("show-for-sr");
    }
  });

  // make_iframes_responsive
  $("iframe").wrap("<div class='responsive-embed widescreen' />");
});

// initialize Foundation
jQuery(document).foundation();
