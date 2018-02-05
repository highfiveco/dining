
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

$(document).ready(function() {

        $('.owl-carousel').owlCarousel({
            rtl:true,
            loop:true,
            nav: false,
            dots:true,
            autoplayTimeout:4000,
            autoWidth:false,
            autoplay: true,autoplaySpeed:1000,
            items:1,
        });
        ////////////////////////////////////
        $('.bttn').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
        ////////////////////////////
        
        ////////////////////////////////////
        $("#ex2").slider({});
        ///////////////////////////////////
        $('.datepicker').datepicker();
        $('#timepicker').timepicker('showWidget');
        ///////////////////////////////////
        $(".tabnav a").click(function(e) {
            $(".tabnav a.act").removeClass("act");
            $('.tab1').removeClass('act');
            $('.tab2').removeClass('act');
            $('.tab1').removeAttr('style');
            $('.tab2').removeAttr('style');
            $(this).addClass("act");
            $(".form-horizontal div.act").hide().removeClass("act");
            $(".form-horizontal .tab" + $(".tabnav a.act").attr("href")).fadeIn().addClass("act");
            return false;
        });
        $("#pay_method").click(function(e) {
            $('.tab2').show();
            $('.tab1').hide();
            $('.a1').removeClass('act');
            $('.a2').addClass('act');
        });
        //////////////////////////////
        $('.responsive-menu').each(function () {
            $(this).parent().eq(0).click(
                function () {

                    if ($('.showMenu span').hasClass('act')) {
                        $('.responsive-menu', this).eq(0).stop(true, true).slideUp(500);
                        $('span', this).eq(0).removeClass("act");

                    } else {
                        $('.responsive-menu', this).eq(0).stop(true, true).slideDown(500);
                        $('span', this).eq(0).addClass("act");

                    }
                });
        });
});



    

