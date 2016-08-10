/* globals $ */

$(function(){

  var mobileThreshold = 600;
  var $mainMenu = $('#main-nav .menu');
  var $menuItems = $mainMenu.find('li');
  var $menuLinks = $menuItems.find('a');
  var isMobile = $(window).width() < mobileThreshold;

  $('#fullpage').fullpage({
      css3: true,
      scrollingSpeed: 700,
      afterLoad: function(anchor, index){
        console.log('afterLoad: ', arguments);
        $menuItems.removeClass('active');
        $('li[data-menuanchor="' + anchor + '"]').addClass('active');
      },
      responsiveWidth: 1100
  });

  $('#menu-toggler').on('click.toggle', function(){
    $mainMenu.slideToggle();
  });

  $menuLinks.on('click.menu', function(){
    $menuItems.removeClass('active');
    $(this).parent().addClass('active');
    if(isMobile){
      $mainMenu.slideUp();
    }
  });
});


// var $viewportWidth = $(window).width();
// var mobileThreshold = 650;
// var isMobile = $viewportWidth > mobileThreshold;
//
// var fullpageOptions = {
// //add your options here
// };
//
// if(!isMobile){
// 	autoScrolling = false;
//   }
//
// });
