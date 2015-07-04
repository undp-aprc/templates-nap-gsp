// Avoid `console` errors in browsers that lack a console.
;(function($) {
    $(document).ready(function() {
        var controller = new ScrollMagic();

        var scene = new ScrollScene({triggerElement: "main .container", triggerHook:0.3, duration: 0})
            .setPin("header")
            .addTo(controller);

    });
})(jQuery);

// Place any jQuery/helper plugins in here.

