//body preloader
$(window).on('load', function () {
  setTimeout(function () { // allowing 3 secs to fade out loader
    $('.page-loader').fadeOut('slow');
  }, 3500);
});

/*-------------------------------------
    On hover open dropdown menu & clickable parent link
    -------------------------------------*/
jQuery(function ($) {
  if ($(window).width() > 320) {
    $('.navbar .dropdown').hover(function () {
      $(this).find('.dropdown-menu').first().stop(true, true).delay(20).slideDown();

    }, function () {
      $(this).find('.dropdown-menu').first().stop(true, true).delay(20).slideUp();

    });

    $('.navbar .dropdown > a').click(function () {
      location.href = this.href;
    });

  }
});

//menu toggel
$('.menu-toggle').on('click', function () {
  $('.btn-wrapper').toggleClass('menu--is-revealed');
});

/*-------------------------------------
    On Scroll back to top
    -------------------------------------*/
$(window).on('scroll', function () {

  // Back Top Button
  if ($(window).scrollTop() > 500) {
    $('.scrollup').addClass('back-top');
  } else {
    $('.scrollup').removeClass('back-top');
  }
});
// On Click Section Switch
// used for back-top
$('[data-type="section-switch"]').on('click', function () {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    var target = $(this.hash);
    if (target.length > 0) {

      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

// countdown js
setInterval(function time() {
  var d = new Date();
  var hours = 24 - d.getHours();
  var min = 60 - d.getMinutes();
  if ((min + '').length == 1) {
    min = '0' + min;
  }
  var sec = 60 - d.getSeconds();
  if ((sec + '').length == 1) {
    sec = '0' + sec;
  }
  jQuery('.the-final-countdown .timer').html(hours + ':' + min + ':' + sec)
}, 1000);

//review slider
$('#carouselReview').owlCarousel({
  loop: false,
  margin: 30,
  nav: true,
  dots: false,
  items: 3,
  navText: ["<i class='bi bi-arrow-left-short'></i>", "<i class='bi bi-arrow-right-short'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 3
    }
  }
});

// aos animation
AOS.init();

// video frame open popup
jQuery(document).ready(function ($) {
  // Define App Namespace
  var popup = {
    // Initializer
    init: function () {
      popup.popupVideo();
    },
    popupVideo: function () {

      $('.video_model').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        gallery: {
          enabled: true
        }
      });

      // Image Gallery Popup
      $('.gallery_container').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        gallery: {
          enabled: true
        }
      });

    }
  };
  popup.init($);
});