$(document).ready(function() {
    // Initial trigger for the first slide on page load
    setTimeout(function() {
        $('.carousel-item.active .animate-hero').addClass('visible');
    }, 500);

    // Bootstrap Carousel Event: Fires when the slide transition starts
    $('#heroCarousel').on('slide.bs.carousel', function () {
        // Reset animations on all items so they can "re-animate"
        $('.animate-hero').css('opacity', '0').css('transform', 'translateX(-30px)');
    });

    // Fires when the slide transition is finished
    $('#heroCarousel').on('slid.bs.carousel', function () {
        $('.carousel-item.active .animate-hero').css('opacity', '1').css('transform', 'translateX(0)');
    });
});