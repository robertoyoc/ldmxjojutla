

$(document).ready(function(){
    window.$.fn.onePageNav = window.function

    window.$.fn.countDown=window.countDown
    window.$.fn.digitChangeTo= window.digitChangeTo
    window.$.fn.dashChangeTo= window.dashChangeTo
    window.$.fn.doCountDown=window.doCountDown 
    window.$.fn.setCountDown = window.setCountDown
    window.$.fn.stopCountDown = window.stopCountDown 

    $("#preloader").fadeOut("slow");
    wow = new WOW({
        mobile:       false,       // default
      }
    )
    wow.init();
    
   


    window.$('#top-nav').onePageNav({
        currentClass: 'current',
        changeHash: true,
        scrollSpeed: 1200
    });

     
    //animated header class
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".navbar-default").addClass("animated");
        } else {
            $(".navbar-default").removeClass('animated');
        }
    });

    window.$('#countdown_dashboard').countDown({
        targetDate: {
            'day':      11,
            'month':    3,
            'year':     2017,
            'hour':     00,
            'min':      00,
            'sec':      01,
        },
        omitWeeks: true
    });

    $('.init-slider').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        video:true,
        smartSpeed: 600
    });

    /*$('input, textarea').data('holder', $('input, textarea').attr('placeholder'));

    $('input, textarea').focusin(function () {
        $(this).attr('placeholder', '');
    });
    $('input, textarea').focusout(function () {
        $(this).attr('placeholder', $(this).data('holder'));
    });*/


    //contact form validation
    // $("#contact-form").validate({
    //     rules: {
    //         name: {
    //             required: true,
    //             minlength: 2
    //         },
    //         message: {
    //             required: true,
    //             minlength: 2
    //         },
    //         email: {
    //             required: true,
    //             email: true
    //         }
    //     },
    //     messages: {
    //         name: {
    //             required: "Please enter Your Name",
    //             minlength: "Your name must consist of at least 2 characters"
    //         },
    //         message: {
    //             required: "Please Write Something",
    //             minlength: "Your message must consist of at least 2 characters"
    //         },
    //         email: "Please enter a valid email address"
    //     },
    //     submitHandler: function(form) {
    //         $(form).ajaxSubmit({
    //             type:"POST",
    //             data: $(form).serialize(),
    //             url:"mail.php",
    //             success: function() {
    //                 $('#contact-form :input').attr('disabled', 'disabled');
    //                 $('#contact-form').fadeTo( "slow", 0.15, function() {
    //                     $(this).find(':input').attr('disabled', 'disabled');
    //                     $(this).find('label').css('cursor','default');
    //                     $('#success').fadeIn();
    //                 });
    //             },
    //             error: function() {
    //                 $('#contact-form').fadeTo( "slow", 0.15, function() {
    //                     $('#error').fadeIn();
    //                 });
    //             }
    //         });
    //     }
    // });

});

