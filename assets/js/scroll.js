$(document).ready(function() {
    const scrollTopBtn = $('#scrollTop');

    $(window).scroll(function() {
        // If user scrolls down more than 300px, show the button
        if ($(window).scrollTop() > 300) {
            scrollTopBtn.addClass('show');
        } else {
            scrollTopBtn.removeClass('show');
        }
    });

    // Smooth scroll to top when clicked
    scrollTopBtn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
});