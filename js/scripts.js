 //Get the button
 var mybutton = document.getElementById("myBtn");

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }

// Navbar Scroll Function
$(function () {
    $(document).scroll(function () {
        var headerheight = $('.header-area').height();
        var navheight = $('.navbar').height();
        var totalheight = headerheight + navheight;
      var $nav = $(".navbar");
      $nav.toggleClass('sticky', $(this).scrollTop() > totalheight);
    });
});

$(document).ready(function() {
    // Handle dropdown toggle for mobile icons
    $('.dropdown-tog').on('click', function(e) {
        // Only handle the icon toggle on mobile (when dropicon is visible)
        if ($(window).width() < 992) { // Bootstrap's lg breakpoint
            var $icon = $(this).find('.dropicon');
            if ($icon.hasClass('la-plus')) {
                $icon.removeClass('la-plus').addClass('la-minus');
            } else if($icon.hasClass('la-minus')) {
                $icon.removeClass('la-minus').addClass('la-plus');
            }
            // $icon.toggleClass('la-plus la-minus');
        }
    });
});