$(document).ready(function(){
  // Add smooth scrolling to all links
  var scrollElement = 'html, body';
    $('html, body').each(function () {
        var initScrollTop = $(this).attr('scrollTop');
        $(this).attr('scrollTop', initScrollTop + 1);
        if ($(this).attr('scrollTop') == initScrollTop + 1) {
            scrollElement = this.nodeName.toLowerCase();
            $(this).attr('scrollTop', initScrollTop);
            return false;
        }
    });

// - - - - S M O O T H - S C R O L L - - - - -

    $("a[href^='#']").click(function(event) {
        event.preventDefault();

        var $this = $(this),
        target = this.hash,
        $target = $(target);

        $(scrollElement).stop().animate({
            'scrollTop': $target.offset().top
        }, 300, 'swing', function() {
            window.location.hash = target;
        });

    });

    $("#myCarousel").carousel({
        interval: 2400,
        paused: false

      });

});

console.log(apple);
