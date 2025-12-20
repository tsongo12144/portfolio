$(window).on('load', function() {
    // 1. Give a slight delay so the user can see the logo
    setTimeout(function() {
        const preloader = $('#preloader');
        
        // 2. Add the hidden class
        preloader.addClass('preloader-hidden');

        // 3. Trigger your Hero section animations manually once loader is gone
        // This ensures the page doesn't animate while still hidden
        $('.hero-animate').addClass('hero-visible'); 
        
    }, 1000); // 1 second delay
});