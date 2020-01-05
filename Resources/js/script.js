/* only works after we import jQuery */
/*
$(document).ready(function() {
    $('h1').click(function() {
        $(this).css('background-color', '#ff0000');
    });
    
}); */

/* nav-bar appears each time we scroll to the section-features section */
$(document).ready(function () {
    /* uses waypoint */
    $('.js--section-features').waypoint(function(direction) {
        /* scrolling past this section adds the sticky class to the navigation tab */
        if (direction == 'down') {
            /* if user scrolls down, then the sticky class will be added to the nav class */
            $('nav').removeClass('fadeOut');
            $('nav').addClass('sticky animated fadeIn');
        } else {
            $('nav').removeClass('fadeIn');
            $('nav').addClass('fadeOut');
        }
    }, {
        /* navigation shows up 60px before the section-features */
        offset: '60px'
    });
    
    /* remove sticky from nav after it finishes fadeout animation */
    $('.js--section-features').waypoint(function(direction) {
        /* scrolling past this section adds the sticky class to the navigation tab */
        if (direction == 'up') {
            /* if user scrolls down, then the sticky class will be added to the nav class */
            $('nav').removeClass('sticky animated');
        } 
    }, {
        /* navigation shows up 300px before the section-features */
        offset: '500px'
    });
    
    /* define our own on-click functions for the two buttons in the header using jQuery */
    $('.js--scroll-to-plans').click(function() {
        /* scrolls to the top of the plans section in 1 second (1000 ms) */
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function () {
        /* scrolls to the top of the plans section in 1 second (1000 ms) */
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    /* navigation scrolling -> utilizing someone else's code for jQuery, for animation function */
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate( {
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
    
    /* uses waypoint js library to add class to an element after user scrolls past it! */
    /* features */
    $('.js--wp-1').waypoint(function(direction) {
        if (direction == 'down') {
            $('.js--wp-1').removeClass('fadeOut');
            $('.js--wp-1').addClass('animated fadeIn');
        }
    }, {
        offset: '70%'
    });
    
    
    $('.js--wp-1').waypoint(function(direction) {
        if (direction == 'up') {
            $('.js--wp-1').addClass('fadeOut')
            $('.js--wp-1').removeClass('animated fadeIn');
        }
    }, {
        offset: '120%'
    });
    
    /* how it works */
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
        /* or we can use the animation-name property in css to directly give an element same animation we define using the keyframes syntax. */
    }, {
        offset: '50%' /* comes on screen when top of element is in middle vertically of screen */
    });
    
    /* CITIES */
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%' 
    });
    
    /* PRICING PLAN */
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    /* mobile nav */
    /* js--nav-icon is the button */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200); /* toggles visibility of the navigation bar */
        
        /* toggles icon between 3 bars and x */
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
        /* toggle back upon switching window size */
    });
    
    $(window).resize(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        /* makes nav bar appear even if it was hidden previously */
        if ($(window).width() > 767) {
            nav.slideDown(200);
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }else if ($(icon).hasClass('ion-navicon-round')){
            nav.slideUp(200);
        }
        
    });
});

/*
var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of windo')
});
*/
